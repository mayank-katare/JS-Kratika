
// Implement inheritance. Define a constructor function SortArray which 
// a Has a property originalArray
// b Has get function to getSortedArray 
// c Has a private function to sort the array.
// d Takes as an input to construct an array of numbers
// e Define another constructor function (SortObjectArray) which extends SortArray, and is used to sort array of JSON object



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