// Simple multiplayer server for Hide and Seek game
// Run with: node server.js

const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const path = require('path');
const os = require('os');

const PORT = process.env.PORT || 3000;

// Get local IP address for LAN access
function getLocalIP() {
  const interfaces = os.networkInterfaces();
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      // Skip internal and non-IPv4 addresses
      if (iface.family === 'IPv4' && !iface.internal) {
        return iface.address;
      }
    }
  }
  return 'localhost';
}

// Serve static files
app.use(express.static(__dirname));

// Game state
const rooms = new Map();
const players = new Map();

io.on('connection', (socket) => {
  console.log('Player connected:', socket.id);

  // Join or create room
  socket.on('joinRoom', (roomCode) => {
    if (!rooms.has(roomCode)) {
      // Create new room
      rooms.set(roomCode, {
        players: [],
        seeker: null,
        gameStarted: false,
        gameTime: 300
      });
    }

    const room = rooms.get(roomCode);
    
    // Add player to room
    const player = {
      id: socket.id,
      position: { x: 0, y: 1.6, z: 5 },
      rotation: { x: 0, y: 0, z: 0 },
      isHiding: false,
      role: room.players.length === 0 ? 'seeker' : 'hider'
    };

    room.players.push(player);
    players.set(socket.id, { roomCode, player });
    socket.join(roomCode);

    // Assign seeker if first player
    if (room.seeker === null) {
      room.seeker = socket.id;
    }

    // Send room info to player
    socket.emit('roomJoined', {
      roomCode,
      playerId: socket.id,
      role: player.role,
      players: room.players
    });

    // Notify other players
    socket.to(roomCode).emit('playerJoined', player);

    console.log(`Player ${socket.id} joined room ${roomCode} as ${player.role}`);
  });

  // Update player position
  socket.on('updatePosition', (data) => {
    const playerData = players.get(socket.id);
    if (!playerData) return;

    const { roomCode, player } = playerData;
    player.position = data.position;
    player.rotation = data.rotation;
    player.isHiding = data.isHiding || false;

    // Broadcast to other players in room
    socket.to(roomCode).emit('playerMoved', {
      id: socket.id,
      position: data.position,
      rotation: data.rotation,
      isHiding: data.isHiding
    });
  });

  // Player found
  socket.on('playerFound', (targetId) => {
    const playerData = players.get(socket.id);
    if (!playerData) return;

    const { roomCode } = playerData;
    const room = rooms.get(roomCode);

    // Notify all players
    io.to(roomCode).emit('playerCaught', {
      seekerId: socket.id,
      hiderId: targetId
    });
  });

  // Start game
  socket.on('startGame', () => {
    const playerData = players.get(socket.id);
    if (!playerData) return;

    const { roomCode } = playerData;
    const room = rooms.get(roomCode);
    room.gameStarted = true;

    io.to(roomCode).emit('gameStarted', {
      seeker: room.seeker,
      gameTime: room.gameTime
    });

    console.log(`Game started in room ${roomCode}`);
  });

  // Disconnect
  socket.on('disconnect', () => {
    const playerData = players.get(socket.id);
    if (playerData) {
      const { roomCode } = playerData;
      const room = rooms.get(roomCode);

      if (room) {
        // Remove player from room
        room.players = room.players.filter(p => p.id !== socket.id);

        // Notify other players
        socket.to(roomCode).emit('playerLeft', socket.id);

        // Delete room if empty
        if (room.players.length === 0) {
          rooms.delete(roomCode);
          console.log(`Room ${roomCode} deleted`);
        }
      }

      players.delete(socket.id);
    }

    console.log('Player disconnected:', socket.id);
  });
});

// Listen on all network interfaces (0.0.0.0) for LAN access
http.listen(PORT, '0.0.0.0', () => {
  const localIP = getLocalIP();
  
  console.log('\n🎮 ========================================');
  console.log('   BIRTHDAY HIDE & SEEK - SERVER RUNNING');
  console.log('========================================\n');
  
  console.log('📡 LOCAL ACCESS (This Computer):');
  console.log(`   http://localhost:${PORT}`);
  console.log(`   http://127.0.0.1:${PORT}\n`);
  
  console.log('🌐 LAN ACCESS (Other Devices on Network):');
  console.log(`   http://${localIP}:${PORT}\n`);
  
  console.log('📁 Serving files from:', __dirname);
  
  console.log('\n🎯 HOW TO PLAY:');
  console.log('   1. On this computer: Open http://localhost:3000');
  console.log('   2. On other devices: Open http://' + localIP + ':3000');
  console.log('   3. Choose your game mode and have fun!\n');
  
  console.log('💡 TIP: Make sure all devices are on the same WiFi network!\n');
});
