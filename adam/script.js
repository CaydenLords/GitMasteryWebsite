const toggleBtn = document.getElementById('toggle-btn');

//random colors
const randomColors = ['red', 'lime', 'blue', 'yellow', 'purple', 'orange', 'pink', 'cyan'];
const randomFonts = ['Comic Sans MS', 'Papyrus', 'Impact', 'Courier New', 'Brush Script MT', 'Verdana', 'Times New Roman'];

// Home button functionality
document.getElementById('home-btn').addEventListener('click', function() {
    window.location.href = 'index.html';
});

toggleBtn.addEventListener('click', () => {
  const body = document.body;
  const header = document.querySelector('header');
  const main = document.querySelector('main');
  const footer = document.querySelector('footer');

  // Good & Bad Toggle
  body.classList.toggle('bad-design');
  header.classList.toggle('bad-design');
  main.classList.toggle('bad-design');
  footer.classList.toggle('bad-design');

  if (body.classList.contains('bad-design')) {
    // Change button text
    toggleBtn.textContent = 'Switch to Good Design';

    //rando styles
    body.style.backgroundColor = getRandomValue(randomColors);
    body.style.color = getRandomValue(randomColors);
    body.style.fontFamily = getRandomValue(randomFonts);
    body.style.fontSize = `${getRandomSize()}px`;

    header.style.backgroundColor = getRandomValue(randomColors);
    header.style.color = getRandomValue(randomColors);

    footer.style.backgroundColor = getRandomValue(randomColors);
    footer.style.color = getRandomValue(randomColors);

    // Add shaking effect
    body.classList.add('shake'); // Add the shake class to trigger the animation
    setTimeout(() => {
      body.classList.remove('shake'); // Remove the shake class after 1 second
    }, 1000);
  } else {
    // Reset button
    toggleBtn.textContent = 'Switch to Bad Design';

    // Reset styles
    body.style.backgroundColor = '';
    body.style.color = '';
    body.style.fontFamily = '';
    body.style.fontSize = '';

    header.style.backgroundColor = '';
    header.style.color = '';

    footer.style.backgroundColor = '';
    footer.style.color = '';
  }
});

// Helper function to get a random value from an array
function getRandomValue(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// Helper function to get a random font size
function getRandomSize() {
  return Math.floor(Math.random() * 40) + 10; // Random size between 10px and 50px
}