// Write a function groupObjectsBy which takes as an input an array of JSON objects and returns a grouped object by a key. Eg
// groupObjectsBy([ 
//   {
//     "channel": "A",
//     "name": "shoe"
//   },
//   {
//     "channel": "A",
//     "name": "electronics"
//   },
//   {
//     "channel": "B",
//     "name": "apparel"
//   },
//   {
//     "channel": "C",
//     "name": "electronics"
//   }
// ], ‘channel’)
// Will return
// {
//   "A":[{"channel":"A","name":"shoe"},{"channel":"A","name":"electronics"}],
//   "B":[{"channel":"B","name":"apparel"}],
//   "C":[{"channel":"C","name":"electronics"}]
  
// }




var result = function(arr,key){
    var re = {};
    arr.forEach((obj) => {
        if(obj.hasOwnProperty(key)){
            if(!re.hasOwnProperty(obj[key])){
                re[obj[key]] = [];
            }
            re[obj[key]].push(obj);
        }
});
return re;
};
console.log(result([
    {
    "channel": "A",
    "name": "shoe"
  },
  {
    "channel": "A",
    "name": "electronics"
  },
  {
    "channel": "B",
    "name": "apparel"
  },
  {
    "channel": "C",
    "name": "electronics"
  }
], "channel"));