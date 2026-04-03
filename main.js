// State
let p1Life = 20;
let p2Life = 20;

// DOM Elements
const p1LifeEl = document.getElementById('p1-life');
const p2LifeEl = document.getElementById('p2-life');
const resetButton = document.getElementById('reset-button');
const tapZones = document.querySelectorAll('.half-tap');

// Update DOM
function updateDisplay() {
  p1LifeEl.textContent = p1Life;
  p2LifeEl.textContent = p2Life;
}

// Logic: Change Life
function adjustLife(player, amount) {
  if (player === 1) {
    p1Life += amount;
  } else if (player === 2) {
    p2Life += amount;
  }
  updateDisplay();
  triggerHaptic();
}

// Logic: Reset
function resetGame() {
  p1Life = 20;
  p2Life = 20;
  updateDisplay();
  
  // A slightly longer haptic purely for reset
  if ('vibrate' in navigator) {
    navigator.vibrate([10, 30, 10]);
  }
}

// Haptic feedback function
function triggerHaptic() {
  if ('vibrate' in navigator) {
    // 15ms is a short, sharp flutter on most devices
    navigator.vibrate([15]);
  }
}

// Event Listeners for Tap Zones
tapZones.forEach(zone => {
  // Using pointerdown for instantaneous reaction compared to click
  zone.addEventListener('pointerdown', (e) => {
    // Prevent default to disable double-tap to zoom or long-press context menus
    e.preventDefault();
    
    const player = parseInt(zone.getAttribute('data-player'), 10);
    const action = zone.getAttribute('data-action');
    
    // In our CSS, player zones are rotated depending on their position.
    // .top-half is +1, .bottom-half is -1.
    const amount = action === 'inc' ? 1 : -1;
    adjustLife(player, amount);
  });
});

// Reset Button Listener
resetButton.addEventListener('pointerdown', (e) => {
  e.preventDefault(); // Stop double-tap zoom
  resetGame();
});

// Screen Wake Lock API
let wakeLock = null;

async function requestWakeLock() {
  try {
    if ('wakeLock' in navigator) {
      wakeLock = await navigator.wakeLock.request('screen');
      console.log('Screen Wake Lock acquired');
      
      wakeLock.addEventListener('release', () => {
        console.log('Screen Wake Lock released');
      });
    }
  } catch (err) {
    console.error(`Wake Lock error: ${err.name}, ${err.message}`);
  }
}

// Handle visibility change to re-acquire wake lock when returning to the app
document.addEventListener('visibilitychange', () => {
  if (wakeLock !== null && document.visibilityState === 'visible') {
    requestWakeLock();
  }
});

// Initialize
requestWakeLock();
updateDisplay();

// Prevent standard context menu (right click / long press)
document.addEventListener('contextmenu', event => event.preventDefault());
