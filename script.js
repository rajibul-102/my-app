const songs = [
    { image: 'om.jpg', song: 'ong1.mp3' },
    { image: 'om2.jpg', song: 'ong2.mp3' },
    { image: 'om3.jpg', song: 'ong3.mp3' },
];

const playButton = document.getElementById('play-button');
const progressBar = document.getElementById('progress-bar');

playButton.addEventListener('click', playSong);

function playSong() {
    const randomSong = songs[Math.floor(Math.random() * songs.length)];
    const audio = new Audio(randomSong.song);
    audio.play();
    progressBar.style.width = '100%';
    setTimeout(() => {
        progressBar.style.width = '0%';
    }, 5000);
}
function revealContent() {
    const cover = document.getElementById('cover');
    const message = document.getElementById('message');

    // Toggle the display of message
    message.style.display = (message.style.display === 'none') ? 'flex' : 'none';
}


// Add animation to the card
document.getElementById('card').addEventListener('mouseover', () => {
    document.getElementById('card').style.transform = 'scale(1.1)';
    document.getElementById('card').style.transition = 'transform 0.5s ease-in-out';
});

document.getElementById('card').addEventListener('mouseout', () => {
    document.getElementById('card').style.transform = 'scale(1)';
    document.getElementById('card').style.transition = 'transform 0.5s ease-in-out';
});
window.onload = function() {
    const backgroundMusic = new Audio('b1.mp3');
    backgroundMusic.loop = true;
    document.body.addEventListener('click', function() {
        backgroundMusic.play();
        document.body.removeEventListener('click', arguments.callee);
    });
};

// script.js

// Function to reveal the content
function revealContent() {
    // Toggle the display property of the message element
    var messageElement = document.getElementById("message");
    messageElement.style.display = "block";
    
    // Trigger the animation by adding a class
    messageElement.classList.add("animate");
}

// script.js

// List of image URLs for the slideshow
var imageUrls = [
    "4.jpg",
    "5.jpg",
    "6.jpg",
];

// Counter to keep track of the current image
var currentImageIndex = 0;

// Function to change the image in the slideshow
function changeImage() {
    // Set the src attribute of the <img> tag to the current image URL
    document.getElementById("slideshow").src = imageUrls[currentImageIndex];
    
    // Increment the current image index
    currentImageIndex++;
    
    // If the current image index exceeds the length of the imageUrls array, reset it to 0
    if (currentImageIndex >= imageUrls.length) {
        currentImageIndex = 0;
    }
    
    // Trigger the animation by toggling a class
    document.getElementById("slideshow").classList.toggle("animate");
}

// Call the changeImage function every 3 seconds to create the slideshow effect
setInterval(changeImage, 3000);
// Function to reveal the content and play the song
function revealContent() {
    // Toggle the display property of the message element
    var messageElement = document.getElementById("message");
    messageElement.style.display = "block";
    
    // Trigger the animation by adding a class
    messageElement.classList.add("animate");

    // Play the song
    var audio = new Audio('b1.mp3'); // Replace 'song.mp3' with the path to your song file
    audio.play();
}



