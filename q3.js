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


const groupObjectsBy = function(arr,key){
    let resulted_array = {};
    arr.forEach((obj) => {
        if(obj.hasOwnProperty(key)){
            if(!resulted_array.hasOwnProperty(obj[key])){
              resulted_array[obj[key]] = [];
            }
            resulted_array[obj[key]].push(obj);
        }
});
return resulted_array;
};
console.log(groupObjectsBy([
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