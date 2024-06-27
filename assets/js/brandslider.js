document.addEventListener('DOMContentLoaded', function() {
  fetch('assets/images/partners/images.json')
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.json();
      })
      .then(images => {
          const clientLogoList = document.getElementById('clientlogo');
          images.forEach(image => {
              const listItem = document.createElement('li');
              const imgElement = document.createElement('img');
              imgElement.src = `assets/images/partners/${image}`;
              imgElement.alt = 'Logo';
              listItem.appendChild(imgElement);
              clientLogoList.appendChild(listItem);
          });

          // After loading images, adjust the list width and start the slider
          adjustClientSlider();
          startClientSlider();
      })
      .catch(error => console.error('Error loading images:', error));
});

function adjustClientSlider() {
  var $clientslider = $('#clientlogo');
  var clients = $clientslider.children().length;
  var clientwidth = (clients * 220); 
  $clientslider.css('width', clientwidth);
}

function startClientSlider() {
  var rotating = true;
  var clientspeed = 1800;
  var seeclients = setInterval(rotateClients, clientspeed);
  $(document).on({
      mouseenter: function() {
          rotating = false;
      },
      mouseleave: function() {
          rotating = true;
      }
  }, '#ourclients');

  function rotateClients() {
      if (rotating != false) {
          var $first = $('#clientlogo li:first');
          $first.animate({
              'margin-left': '-220px'
          }, 2000, function() {
              $first.remove().css({
                  'margin-left': '0px'
              });
              $('#clientlogo li:last').after($first);
          });
      }
  }
}