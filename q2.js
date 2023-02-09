// Create an Object MetadataParser using constructor functions
// The Object should have private properties _version, _channel, _keyField 
// Object should have get and set function for each property
// Add a method in the class getKeyFields, which takes an array of JSON objects (eg [{channel: ‘A’}, {channel: ‘B’}, {channel ‘C’}]) as input and returns an array of values of _keyField, input array.


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