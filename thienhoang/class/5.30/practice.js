function getMiddle(strangalang){

    if(strangalang.length % 2 === 0){
      
      return strangalang.charAt(strangalang.length / 2 -1) + strangalang.charAt(strangalang.length / 2)
     
    } if (strangalang.length % 2 !== 0){
      return strangalang.charAt(strangalang.length/2);
   }
  }
  console.log(getMiddle('striing'))