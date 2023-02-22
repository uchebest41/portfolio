function promptToViewMainPage() {
    var response = confirm("The main page is still in development. Do you still want to view it?");
    if (response) {
      redirectToMainPage();
    } else {
      var playGame = confirm("Are you interested in playing a game instead?");
      if (playGame) {
        redirectToGamePage();
      } else {
        showThanksMessage();
      }
    }
  }
  function redirectToMainPage() {
    window.location.href = 'main/index.html';
  }
  function redirectToGamePage() {
    window.location.href = 'game.html';
  }
  function showThanksMessage() {
    alert('Thank you for visiting my portfolio. Check back later for updates!');
  }
// Select the menu button and menu list
const menuButton = document.querySelector("#menu-button");
const menuList = document.querySelector("#menu-list");

// Add a click event listener to the menu button
menuButton.addEventListener("click", function() {
  // Toggle the "active" class on the menu button
  this.classList.toggle("active");

  // Toggle the "active" class on the menu list
  menuList.classList.toggle("active");

  // If the menu list is now active
  if (menuList.classList.contains("active")) {
    // Show the submenus
    showSubmenus();
  } else {
    // Hide the submenus
    hideSubmenus();
  }
});

// Function to show the submenus
function showSubmenus() {
  // Select all the menu items with submenus
  const menuItems = document.querySelectorAll(".has-submenu");

  // Loop through the menu items
  menuItems.forEach(function(menuItem) {
    // Select the submenu for this menu item
    const submenu = menuItem.querySelector(".submenu");

    // Show the submenu
    submenu.style.display = "block";
  });
}

// Function to hide the submenus
function hideSubmenus() {
  // Select all the submenus
  const submenus = document.querySelectorAll(".submenu");

  // Loop through the submenus
  submenus.forEach(function(submenu) {
    // Hide the submenu
    submenu.style.display = "none";
  });
}
// gg


// Create a new AudioContext object
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioContext = new AudioContext();

// Create a new Audio object with the FreeCodeCamp Radio streaming URL
const audio = new Audio('https://coderadio-admin.freecodecamp.org/radio/8010/radio.mp3');

// Get the play and stop buttons by their IDs
const playButton = document.getElementById('play-button1');
const stopButton = document.getElementById('stop-button2');

// Add event listeners to the buttons
playButton.addEventListener('click', async () => {
  try {
    // Start the audio playback
    await audioContext.resume();
    audio.play();
  } catch (e) {
    // If the user doesn't give permission, catch the error and log it
    console.error(e);
  }
});

stopButton.addEventListener('click', () => {
  audio.pause();
});

