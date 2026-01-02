# 🎂 The Birthday Curse - A Horror Hide & Seek Game

## 📖 The Story

*It was supposed to be a celebration...*

Your father's birthday party was going perfectly until midnight struck. The birthday cake—a beautiful pink creation with glowing candles—suddenly came to life. Its frosting twisted into a sinister grin, its candles burned with an unnatural flame, and its eyes... those terrible glowing eyes... locked onto you.

The cake's curse spread through the house, transforming your family members into mindless cake servants. Now you're trapped in this nightmare mansion with 10 rooms of terror. The cake hunts relentlessly, teleporting through shadows when it hears you, moving faster than any human should.

Your only hope? Survive until dawn. Hide in the shadows, stay silent, and pray the cake doesn't find you. Because if it does... you'll become part of the frosting.

**Can you survive your father's birthday party?**

---

A dark, atmospheric horror hide & seek game featuring an evil sentient birthday cake, dynamic AI behavior, spell books, and a sprawling 10-room mansion of terror!

## 🌟 Features Implemented

### ✅ Core Gameplay
- **Dark Mode Environment** - Very dim lighting for intense atmosphere
{{ ... }}
- **First-Person Controls** - WASD movement with mouse look
- **Three Movement Modes**:
  - 🚶 Walk (normal speed)
  - 🏃 Sprint (Ctrl + W - faster, louder)
  - 🤫 Sneak (Shift - slower, quieter, crouches)

### ✅ Flashlight System
- **Toggle with F key**
- **Limited battery** (drains when on)
- **Bright spotlight** to see in the dark
- **Battery indicator** in UI

### ✅ Main Menu System
- **Choose game mode** on startup
- **Play Solo** - Against AI seeker
- **Play Online** - Multiplayer (requires server)
- Beautiful gradient menu design

### ✅ Nightmare Mansion Environment
- **10 rooms** - All on single sprawling floor
- **3-column layout** - Left wing (3), Center (4), Right wing (3)
- **Complex interior walls** creating maze-like corridors
- **Multiple hallways** connecting room clusters
- **Furniture obstacles** in each room
- **Realistic haunted house layout**
- **Dark atmospheric lighting** per room
- **Larger play area** for intense chases

### ✅ Locker Hiding System
- **16 lockers** - 2 per room across both floors
- **Green glow for hiders** - Only hiders can see which are lockers
- **Normal appearance for seeker** - Seeker sees them as regular objects
- **Press E to enter/exit** locker
- **Seeker can open lockers** - Not completely safe!
- **One player per locker**

### ✅ AI Seeker (Evil Birthday Cake!) 🎂
- **Pink glowing birthday cake** with candle and evil eyes
- **3 AI States**:
  - 🚶 **Patrol** - Walks through waypoints across the house
  - 🏃 **Chase** - Runs after spotted player (2.5x speed!)
  - 🔍 **Search** - Investigates noise locations
- **Single floor navigation** - Patrols 8 waypoints
- **Checks hiding spots** when nearby
- **Hears noise** and investigates
- **5 second spotted timer** - You have 5 seconds to hide after being spotted
- **Game Over** if caught!

### ✅ Advanced Sprint System
- **Sprint meter** (100%) shown in UI
- **Drains when sprinting** (Ctrl + W)
- **Regenerates slowly** when not sprinting
- **Auto-spotted for 5 seconds** if you sprint too much
- **Big red warning** when spotted
- **Seeker chases** when you're spotted

### ✅ Noise Detection System
- **Random noise** generated while moving
- **Yellow ripple indicator** shows when you make noise
- **Seeker investigates** noise locations
- **Not automatically spotted** - just gives away general location
- **Strategic gameplay** - balance speed vs stealth

### ✅ Game Mechanics
- **5-minute timer** - survive to win (hider mode)
- **Collision detection** - can't walk through walls/objects/furniture
- **Among Us style vision** - Dark environment with limited vision circle
- **Vignette effect** - Dark edges, clear center
- **Heavy fog** - Can only see nearby objects (5-20 units)
- **Camera shake** when walking/running
- **Footstep sounds** (quieter when sneaking)
- **Warning system** - UI turns red when seeker is near
- **Can't move while hiding** in locker

### ✅ AI Teammates & Characters 🟡
- **2 AI teammates** in hider mode (yellow block characters)
- **1 AI hider** in seeker mode (you hunt them)
- **Yellow block design** - Body + head blocks with eyes
- **Mini-map shows positions** - See teammates in real-time

### ✅ Mini-Map System 🗺️
- **150x150 canvas** at top right
- **Shows in hider/explorer modes** only
- **Green dot** = You
- **Yellow dots** = Teammates
- **Red dot** = Cake/Seeker
- **House bounds** shown as gray rectangle
- **Real-time position updates**

### ✅ UI Elements
- **Main menu** - Choose Hider, Cake, or Explorer mode
- **Timer** - countdown to victory
- **Battery meter** - flashlight charge (turns red when low)
- **Sprint meter** - stamina indicator (turns red when low)
- **Mini-map** - Shows teammates and seeker positions
- **Pause menu (ESC)** - Resume or quit game
- **Role indicator** - shows status:
  - "Hider" - Normal
  - "Hiding in Locker" - Safe (green)
  - "SPOTTED!" - Danger (red, pulsing)
  - "DANGER - SEEKER NEARBY!" - Warning (red)
- **Spotted warning** - Full screen red alert
- **Noise indicator** - Yellow ripple when making noise
- **Instructions** - Control guide at bottom

### ✅ Multiplayer Ready
- **Socket.io server** included
- **Room system** for multiple games
- **Player synchronization**
- **Ready for 2-6 players**

## 🎯 How to Play

### Single Player (AI Mode)
1. Open `index.html` in a web browser
2. **Click "Play Solo (AI)"** in the menu
3. Click again to lock mouse cursor
4. **Explore the two-floor house** with 8 rooms
5. **Find green glowing lockers** (16 total) and press **E** to hide
6. **Use flashlight (F)** to see in the dark
7. **Sprint carefully** - too much sprinting = auto-spotted!
8. **Listen for footsteps** - seeker is patrolling
10. **Survive 5 minutes** to win!

### Strategy Tips:
- **Sneak (Shift)** when seeker is nearby - quieter and harder to spot
- **Don't sprint too much** - you'll get auto-spotted for 5 seconds
- **Lockers aren't 100% safe** - seeker can open them if nearby
- **Move between rooms** to avoid patrol routes
- **Use second floor** - seeker takes time to climb stairs
- **Turn off flashlight** when hiding - less visible
- **Watch sprint meter** - don't let it hit zero

### Game Modes Suggested

### Mode 1: Classic Hide & Seek (Current)
### Mode 1: Classic Hide & Seek ✅ (Current)
- AI seeker patrols and chases
- Hide in green spots
- Survive the timer

### Mode 2: Multiplayer Hunt (Ready to implement)
- One player is seeker
- Others are hiders
- Real players instead of AI

### Mode 3: Freeze Tag
- Tagged players freeze
- Others can unfreeze them
- Seeker wins if all frozen

### Mode 4: Collect & Hide
- Find 3 items while hiding
- Seeker tries to stop you
- First to collect wins

### Mode 5: Infection
- Tagged hiders become seekers
- Last hider wins
- Gets more intense over time

## 🛠️ Technical Stack

- **Three.js** - 3D graphics engine
- **Socket.io** - Real-time multiplayer
- **Express** - Web server
- **Node.js** - Backend runtime

## 📁 Project Structure

```
birthday-dad/
├── index.html          # Main game file (single-player)
├── server.js           # Multiplayer server
├── package.json        # Dependencies
└── README.md          # This file
```

## 🎨 Customization Ideas

### Easy Tweaks:
- Change `gameTime` variable to adjust round length
- Modify `seekerSpeed` to make AI faster/slower
- Adjust `flashlightBattery` drain rate
- Change hiding spot positions
- Add more obstacles

### Advanced Features to Add:
- Multiple AI seekers
- Power-ups (battery packs, speed boost)
- Different maps/rooms
- Voice chat
- Leaderboards
- Character customization
- Sound effects (heartbeat, footsteps)
- Mini-map
- Spectator mode

## 🐛 Known Issues

- Multiplayer needs Socket.io client integration in HTML
- No sound effects yet (only procedural footsteps)
- AI can sometimes get stuck on obstacles
- Battery doesn't recharge (by design, but could add pickups)

## 🚀 Next Steps

1. **Add multiplayer client code** to index.html
2. **Implement voice chat** with WebRTC
3. **Add more game modes**
4. **Create lobby system** with room browser
5. **Add sound effects** and music
6. **Implement leaderboards**
7. **Add mobile support** (touch controls)

## 🎉 For Dad's Birthday

This game was created as a birthday present! You can:
- Play solo against AI
- Host multiplayer games with family
- Customize it however you want
- Use it as a base for other game ideas

**Happy Birthday, Dad!** 🎂

---

## 📝 License

MIT - Feel free to modify and share!

## 🤝 Contributing

Want to add features? Go for it! Some ideas:
- Better AI pathfinding
- More hiding spots
- Different seeker types
- Day/night cycle
- Weather effects
- Achievements

Have fun! 🎮
