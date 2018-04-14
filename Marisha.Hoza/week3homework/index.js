// This function works best when you're looking for the Wizzard of Oz
function ohMy (animal1,animal2,animal3) {
    if (animal1 == 'lion' && animal2 == 'tiger' && animal3 == 'bear')
    return 'oh my!!';
    else return 'I do not feel like this is surprising';
  }
  
  ohMy ('lion','tiger','bear');



// This function makes your stuff = 12. 
// You're quite welcome
var letsMakeItTwelve = function (nums) {
    if (nums == 12) return '12. Thanks, that was easy!';
    else if (isNaN(nums)) return 'That is just rude. Put a number in!';
    else return (nums/nums)*12;
  }
  
  letsMakeItTwelve ('put your number here');