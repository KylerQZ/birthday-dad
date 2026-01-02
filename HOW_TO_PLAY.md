# 🎮 How to Play - Birthday Hide & Seek

## 🚀 Starting the Server (LAN Multiplayer)

### Step 1: Start the Server
```bash
cd /Users/kyler/workspace/birthday-dad
npm start
```

### Step 2: Connect to the Game

**On This Computer:**
- Open: `http://localhost:3000`

**On Other Devices (Phone, Tablet, Other Computers):**
- Make sure they're on the **same WiFi network**
- Open: `http://YOUR_IP_ADDRESS:3000`
- (The IP address will be shown in the terminal when you start the server)

Example:
```
🌐 LAN ACCESS (Other Devices on Network):
   http://192.168.1.100:3000
```

## 🎯 Game Modes

### 🟢 Hider Mode (Recommended)
- You + 2 AI teammates (yellow blocks)
- Hide from the evil cake for 5 minutes
- **Dark environment** with limited vision
- Mini-map shows teammates
- 5 seconds to hide after being spotted

### 🎂 Cake/Seeker Mode
- You hunt 1 AI hider (yellow block)
- Find and catch them
- **Dark environment** with limited vision
- No mini-map

### 🌟 Explorer Mode
- Free roam with **BRIGHT lighting**
- No time limit
- Perfect for exploring the house
- See all characters

## 🎮 Controls

- **W/A/S/D** - Move
- **Mouse** - Look around
- **F** - Toggle flashlight (drains battery!)
- **E** - Hide in spot / Exit hiding spot
- **Shift** - Sneak (quieter, slower)
- **Ctrl** - Sprint (faster, makes noise!)
- **ESC** - Pause menu

## 💡 Tips

1. **Use flashlight sparingly** - Battery drains fast!
2. **Sneak near the cake** - Quieter movement
3. **Don't sprint too much** - Makes loud noise
4. **Watch the mini-map** - See where teammates are
5. **5 second rule** - You have 5 seconds to hide after being spotted
6. **Explorer mode** - Use this to learn the house layout

## 🏠 Hiding Spots (30+)

- **Lockers** - Stand inside
- **Beds** - Hide under them
- **Curtains** - Behind windows
- **Closets** - Small spaces
- **Bathrooms** - Stalls

## 🌐 Network Troubleshooting

### Can't connect from other devices?

1. **Check WiFi** - All devices on same network?
2. **Check Firewall** - Allow port 3000
3. **Check IP** - Use the IP shown in terminal
4. **Restart Server** - Stop (Ctrl+C) and `npm start` again

### Still not working?

Use Python server for single player:
```bash
python3 -m http.server 8000
```
Open: `http://localhost:8000`

---

**Have fun! 🎂👻**
