document.addEventListener('click', function(event) {
    // Create a new div element to represent the heart
    const heart = document.createElement('div');
    
    // Add the 'heart' class to the div
    heart.className = 'heart';
    
    // Position the heart at the click location
    heart.style.left = `${event.clientX - 25}px`; // Adjust for the center of the heart
    heart.style.top = `${event.clientY - 25}px`; // Adjust for the center of the heart
    
    // Append the heart element to the body
    document.body.appendChild(heart);
    
    // Remove the heart after the animation completes (2 seconds)
    setTimeout(() => {
      heart.remove();
    }, 2000);
  });
  