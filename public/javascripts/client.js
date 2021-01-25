console.log('Client-side code running');



const seedButton = document.getElementById('seedButton');
seedButton.addEventListener('click', function(e) {
  console.log('seedbutton was clicked');
  fetch('/seed', {method: 'POST'})
  location.reload()
  });

  const playButton = document.getElementById('playButton');
  playButton.addEventListener('click', function(e) {
    console.log('Playbutton was clicked');
    fetch('/play')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    window.open(data.url, '_blank');
  })
    
    });








