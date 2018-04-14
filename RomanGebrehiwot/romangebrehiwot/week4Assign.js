function areaClass(lenth, height) {
    var areaClass = length * height;
    return areaClass;
     
  }
  areaClass(3,4);
/*
    var areaClass = document.getElementById('area-class')
    areaClass.addEventListener('submit', function(){
    var length = document.getElementById('alength-input');
    var height = document.getElementById('aheight-input');
    return areaClass;
   }
    
/*

  'use strict'

var nameForm = document.getElementById('name-form')
nameForm.addEventListener('submit', function(){
    var fnameInput = document.getElementById('fname-input');
    var lnameInput = document.getElementById('lname-input');
    var outputP = document.getElementById('output-p');

    event.preventDefault();
    if (fnameInput.value === '' || lnameInput.value === '') {
        outputP.innerHTML = 'you need to enter your first name and last name.';
 } else {
     outputP.innerHTML = 'Welcome, ' + fnameInput.value + '' + lnameInput.value + '.';  
 
 fnameInput.value = '';
lnameInput.value = '';
}

})*/