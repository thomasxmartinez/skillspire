var houseBtn = document.getElementById('house-btn');
var gotBtn = document.getElementById('got-btn');
var clearBtn = document.getElementById('clear-btn');
var imgDiv = document.getElementById('img-div');

clearBtn.addEventListener('click', function() {
  imgDiv.innerHTML = '';
});

houseBtn.addEventListener('click', function() {
  imgDiv.innerHTML = '<img src="http://i.imgur.com/KbwPb6Y.jpg" height=300 width=400>';
});

gotBtn.addEventListener('click', function() {
  imgDiv.innerHTML = '<img src="http://cliparts.co/cliparts/rTL/ozK/rTLozKG9c.jpg" height=300 width=400>';
});
