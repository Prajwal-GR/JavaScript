// console.log("Hello World")
// console.log(typeof true);
// console.log(typeof(true))

// console.log(1+2);
// console.log(1+"2")
// console.log("1"+2);
// console.log(typeof("1"+2+3));


//comparision
// console.log("3">1);
// console.log("03">1);

// console.log(undefined<=0);

// console.log(null>0);
// console.log(null<=0);

// console.log(undefined>0);
// console.log(undefined<=0);
// console.log();


//Data rypes classified based on type of there storage


//1 premitives
    // 7 types : String , Number, null , undefined, Symbol, BigInt, 

//2 Reference type (non premitive)
    // Array, Object, Function
// +++++++++++++++++++++++++++++++++++++++++++++++++++++ dates +++++++++++++++++++++++

// let myDate = new Date();
// console.log('date : ',myDate)
// console.log('toDateString : ',myDate.toDateString());
// console.log('toISOString: ',myDate.toISOString());
// console.log('toString',myDate.toString());
// console.log('toJSON :',myDate.toJSON());
// console.log('toLocaleDateString : ',myDate.toLocaleDateString());
// console.log('toLocaleString: ',myDate.toLocaleString());

// console.log(myDate.getDate());
// console.log(myDate.getFullYear());

// const newDate = new Date(2025,5,33)
// console.log(newDate.toDateString())

// const newDate = new Date("2022-1-30")
// console.log(newDate.toDateString())

// const newDate = new Date("11-30-2025")
// console.log(newDate.toDateString())


// const arr = new Array(1,2,3,4,5);
// console.log('arr',arr);
// console.log(arr.slice(1,3));
// console.log('arr',arr);

// console.log('==========')

// console.log('splicing',arr.splice(1,3,8,9,10));
// console.log("arr", arr);

const mySymb = Symbol("Key1") 
const obj = {
    name :"Hello",
    [mySymb] : "myKeyoNE",
    age : 100
}

console.log(obj);
console.log(obj[mySymb])
















