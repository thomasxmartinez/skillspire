var houseBtn = document.getElementById('house-btn');
var gotBtn = document.getElementById('got-btn');
var clearBtn = document.getElementById('clear-btn');
var imgDiv = document.getElementById('img-div');

clearBtn.addEventListener('click', function() {
  imgDiv.innerHTML = '<img src="http://cliparts.co/cliparts/rTL/ozK/rTLozKG9c.jpg" height=300 width=400>';
});

houseBtn.addEventListener('click', function() {
  imgDiv.innerHTML = '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjt-19fxipEEBiUCHtkXzbDTcl420bFn-K1DFRc8ZcqBXDc6tq">';
});

gotBtn.addEventListener('click', function() {
  imgDiv.innerHTML = '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMPaS2N51zYxgtG0XunQSnT44y6tzrkcn12OAMxMnDMzsNUDe73w">';
});


