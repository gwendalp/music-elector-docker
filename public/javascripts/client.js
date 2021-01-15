console.log('Client-side code running');



const seedButton = document.getElementById('seedButton');
seedButton.addEventListener('click', function(e) {
  console.log('seedbutton was clicked');
  fetch('/seed', {method: 'POST'})
  location.reload()
  });






