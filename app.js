const whatsappContactButton = document.querySelector('.whatsapp-contact');
const phoneNumber = '1234567890'; // Replace with your phone number
const messageForm = document.querySelector("#message-form");
const messageInput = document.querySelector("#message-input");

whatsappContactButton.addEventListener("click", () => {
  const confirmation = confirm("Are you sure you want to send a message to us on WhatsApp?");
  if (confirmation) {
    window.open(`https://wa.me/${phoneNumber}`);
  }
});

messageForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // Get the user's message from the input field
  const message = messageInput.value;

  // Open the WhatsApp chat window with the user's message
  const confirmation = confirm("Are you sure you want to send this message to us on WhatsApp?");
  if (confirmation) {
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`);

    // Clear the input field
    messageInput.value = "";
  }
});


const imageSources = ['uche1.jpg', 'uche2.jpg', 'uche3.jpg', 'uche4.jpg'];
const imageContainer = document.getElementById('image-container');
let currentIndex = 0;

function displayNextImage() {
  const image = new Image();
  image.src = imageSources[currentIndex];
  image.width = 600;
  //image.height= 100; // Set the image width to 100 pixels
  currentIndex = (currentIndex + 1) % imageSources.length;
  imageContainer.innerHTML = '';
  imageContainer.appendChild(image);
}

setInterval(displayNextImage, 500); 
// Change the value to adjust the interval time in milliseconds


// Create a new AudioContext object
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioContext = new AudioContext();

// Create a new Audio object with the FreeCodeCamp Radio streaming URL
const audio = new Audio('https://coderadio-admin.freecodecamp.org/radio/8010/radio.mp3');

// Get the play and stop buttons by their IDs
const playButton = document.getElementById('play-button');
const stopButton = document.getElementById('stop-button');

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

// typing effect
const text = "I am a professional with dynamic interests in web technologies, financial reporting, and business management looking for career opportunities in a growing organization where excellence, value-add and honesty are norms, and where exceptional performance is recognized and rewarded, looking forward to applying my finance knowledge in the world of Tech. (fintech)";
let index = 0;

function type() {
  if (index < text.length) {
    document.getElementById("typing-text").innerHTML += text.charAt(index);
    index++;
    setTimeout(type, 50); // Adjust typing speed here (in milliseconds)
  } else {
    setTimeout(erase, 2000); // Adjust delay before erasing here (in milliseconds)
  }
}

function erase() {
  if (index >= 0) {
    document.getElementById("typing-text").innerHTML = text.substring(0, index);
    index--;
    setTimeout(erase, 30); // Adjust erasing speed here (in milliseconds)
  } else {
    index = 0;
    setTimeout(type, 1000); // Adjust delay before typing again here (in milliseconds)
  }
}

type();

//email

const emailLink = document.getElementById("email-link");

emailLink.addEventListener("click", function(event) {
  event.preventDefault();
  const subject = "Example subject";
  const body = "Message text";
  const mailtoLink = "mailto:uchebest053@gmail.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
  window.location.href = mailtoLink;
});
// typing skills
const segun = "I am currently up skilling in web development, would sychronize my accounting skills with web technologies, my major goal is to solve business problem with technological tools.";
let uche = 0;

function type2() {
  if (uche < segun.length) {
    document.getElementById("caption-text").innerHTML += segun.charAt(uche);
    uche++;
    setTimeout(type2, 50); // Adjust typing speed here (in milliseconds)
  } else {
    setTimeout(erase2, 2000); // Adjust delay before erasing here (in milliseconds)
  }
}

function erase2() {
  if (uche >= 0) {
    document.getElementById("caption-text").innerHTML = segun.substring(0, uche);
    uche--;
    setTimeout(erase2, 30); // Adjust erasing speed here (in milliseconds)
  } else {
    uche = 0;
    setTimeout(type2, 1000); // Adjust delay before typing again here (in milliseconds)
  }
}

type2();
