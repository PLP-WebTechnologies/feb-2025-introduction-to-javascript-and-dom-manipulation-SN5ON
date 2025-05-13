// Change text content dynamically
document.getElementById('change-text-btn').addEventListener('click', () => {
    const description = document.getElementById('description');
    description.textContent = 'The text has been changed dynamically!';
  });

   // Modify CSS styles via JavaScript
  document.getElementById('change-style-btn').addEventListener('click', () => {
    const title = document.getElementById('main-title');
    title.style.color = 'tomato';
    title.style.fontSize = '2.5rem';
  }); 
  
  // Add or remove an element
  let isElementPresent = false;
  
  document.getElementById('toggle-element-btn').addEventListener('click', () => {
    const dynamicArea = document.getElementById('dynamic-area');
  
    if (!isElementPresent) {
      const newDiv = document.createElement('div');
      newDiv.id = 'dynamic-element';
      newDiv.textContent = 'This element was added!';
      newDiv.style.backgroundColor = '#e0ffe0';
      newDiv.style.padding = '10px';
      dynamicArea.appendChild(newDiv);
      isElementPresent = true;
    } else {
      const elementToRemove = document.getElementById('dynamic-element');
      if (elementToRemove) {
        elementToRemove.remove();
      }
      isElementPresent = false;
    }
  });