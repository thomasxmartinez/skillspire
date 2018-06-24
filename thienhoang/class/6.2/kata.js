



function iqTest(anything){
    var abc = {
      'a':1,
      'b':2,
      'c':3,
      'd':1,
      'e':2,
      'f':3,
      'g':1,
      'h':2,
      'i':3,
      'j':1,
      'k':2,
      'l':3,
      'm':1,
      'n':2,
      'o':3,
      'p':1,
      'q':2,
      'r':3,
      's':4,
      't':1,
      'u':2,
      'v':3,
      'w':1,
      'x':2,
      'y':3,
      'z':4,
      "":1
    }
       var nums = anything.split('');
       var answer1 = [];
       var answer2 = [];
    
      // for (let [key, value] of Object.entries(anything)) {  
      // console.log(key + ':' + value);}}
    
      for(var i =0; i < nums.length; i++)
    
      if(abc.hasOwnProperty(nums[i])){
    answer1.push(abc[nums[i]])
    
      }
      const reducer = (accumulator, currentValue) => accumulator + currentValue;
    answer2 = answer1.reduce(reducer)
    return answer2
      }