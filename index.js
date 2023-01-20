// 1.
const Person = function(firstName,lastName,age){
    this.firstName = firstName,
    this.lastName = lastName,
    this.age = age
};

const person1 = new Person("Kratika","Singhal",21);


// 2.
class MetadataParser{
    constructor(options){
        this._version = options.version;
        this._channel = options.channel;
        this._keyField = options.keyField;
    }
    getVersion(){
        return this._version;
    }
    setVersion(version){
        this._version = version;
    }
    getChannel(){
        return this._channel;
    }
    setChannel(channel){
        this._channel = channel;
    }
    getKeyField(){
        return this._keyField;
    }
    setKeyField(keyField){
        this._keyField = keyField;
    }
    getKeyFields(array){
        return array.map((obj)=>{
            return obj.keyField;
        })
    }
}

const m1 = new MetadataParser({version: "hhj",channel:"ghj",keyField:"hhj"});
const m2 = new MetadataParser({version: "hhj",channel:"ghj",keyField:"hj"});
const m3 = new MetadataParser({version: "hhj",channel:"ghj",keyField:"hh"});
const m = new MetadataParser({version: "hhj",channel:"ghj",keyField:"hh"});
const arr = [m1,m2,m3];
console.log(m.getKeyFields(arr));




// 3.
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



// 4.
class SortArray{
    constructor(array){
        this.array = array;
    }
    getSortedArray(){
        this.array.sort(function(a, b){return a-b});
        return this.array;
    }
    #sortArray(){
        this.array.sort(function(a, b){return a-b});
        return this.array;
    }
}

class SortObjectArray extends SortArray{
    constructor(array,obj){
        super(array);
        this.sarray = obj;
    }
    sortjsonArray(){
        const arr = Object.values(this.sarray);
        arr.sort(function(a, b){return a-b});
        return arr;
    }
}

const array = [1,2,3,4,5];
const sortarray = new SortArray(array);
const obj = {key1: 56,key2: 67,key3: 23,key4: 11,key5: 88};
const sortObjectArray = new SortObjectArray(array,obj);