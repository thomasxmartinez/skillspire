var pictures = ['http://www.activityshelter.com/wp-content/uploads/2016/04/picture-of-number-1-gold.jpg','http://cliparts.co/cliparts/rTL/ozK/rTLozKG9c.jpg','http://blognumbers.files.wordpress.com/2010/09/3.jpg','http://www.clker.com/cliparts/W/V/w/3/j/m/red-rounded-with-number-4-hi.png','http://www.clker.com/cliparts/B/o/X/x/P/w/number-5-hi.png','http://www.clker.com/cliparts/7/x/U/Y/J/c/red-rounded-with-number-6-hi.png','http://www.psdgraphics.com/file/red-number-7.jpg','http://www.clker.com/cliparts/Q/8/d/t/D/s/number-8-green-round-hi.png','http://www.clker.com/cliparts/T/L/j/H/p/g/red-rounded-square-with-number-9-hi.png']

document.getElementById("assending").addEventListener("click", pullPictures);
document.getElementById("desending").addEventListener("click", pullPicturesRev);
document.getElementById("makingGrid").addEventListener("click", pushPictures);
document.getElementById("thisbtn").addEventListener("click", defThis);


function pullPicturesRev(){
	
  var  newA = []
  for(i = pictures.length-1; i >= 0; i--){
    newA.push('<img class="resultPicture" src="' + pictures[i] + '">')
    
  }
  document.getElementById('photoDiv').innerHTML = (newA)
  }

function pullPictures (){

  var newA = []
  for (i = 0; i <pictures.length; i++){
	//newA.push(pictures[i]);
	newA.push('<img class="resultPicture" src="' + pictures[i] + '">')
  }
 
  document.getElementById('photoDiv').innerHTML = (newA)
}

function pushPictures (){
	var newA = ""
	for (i = 0; i <pictures.length; i++){
	  //newA.push(pictures[i]);
	  newA += ('<img id="'+ [i] +'" class="resultPicture" src="' + pictures[i] + '">')
	  
	}
    document.getElementById('results').innerHTML = (newA)
}

function defThis(){
	var apple = 'fewfew'
    document.getElementById('thisdef').innerHTML = (apple)
}
