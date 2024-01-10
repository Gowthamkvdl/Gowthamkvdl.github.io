
// head = document.getElementById("head")
// head.innerHTML = "Gowtham"

// let name = "Gowtham"
// let lengthOfName = name.length;
// let random = Math.ceil(Math.random()*lengthOfName)-1;
// console.log(name[random]);
// console.log(random);

// let age = 19;
// let networth = "$0";

// let protfolio = `he is ${name} and he is ${age} old and his networth is ${networth}`
// console.log(protfolio)

// let arr = [1,2,3,4,5,6,7,8,9,10,11,[1,2],"hello"]
// arrlenght = arr.length
// msg = `${arrlenght} is lenght of the array`
// console.log(msg)
// console.log(arr[arr.length-1])

// arr.push(10)  
// arr.pop()
// arr.shift()
// arr.unshift(10)
// delete arr[3]
// arr.splice(3,1,4)
// arr.splice(2,2)
// let a = arr.join(",")
// console.log(a)
// arr1 = a.split(",")
// console.log(arr1)
// console.log(arr)
// let arrtotal = arr.concat(arr1)
// console.log(arrtotal)
// console.log("hello")

// let love = true
// if(love == true)
//     console.log("You will never succed")
// else
//     console.log("you will succed")


// let obj = {
//     name : "Gowtham",
//     age : "19",
//     networth : "0"
// }

// obj.date = "09-08-2004"
// console.log(obj.date)

// let object = {
//     add(n){
//         let seconds = n*60
//         return seconds;
//     },
//     sub(){
//         console.log("subract")
//     }
// }

// console.log(object.add(5))

// let factorial = 1
// function fact(n){
//     if(n==0 || n==1){
//         return factorial
//     }
//     factorial = n*(fact(n-1))
//     return factorial
// }
// console.log(fact(5))

// let arr2 = [1,2,3,4,5,6,7,8,9,1];

// function addArr(arr){
//     let length = arr.length;
//     let result = 0;
//     for(let i=0; i<length; i++){
//         result += arr[i];
//     }
//     return result;
// }

// console.log(addArr(arr2))

// let arr3 = [2, 3, 4, 5, 6, 7, 8, 9, 0];

// function addArr(arr) {
//     let length = arr.length;
//     let result = 0;
//     for (let i = 0; i < length; i++) {
//         result += arr[i];
//     }
//     return result;
// }

// console.log(addArr(arr3)); // Output: 44


// let area = r => Math.PI*(r*r)

// console.log(area(10))

// let pro = (a,b) => a*b
// console.log(pro(5,4))

// let index = [1,-2,3,-4,3,2,-5,6,-7,6]
// let sm = 0
// index.forEach( val => {
//     if(val>0){
//         sm += val
//     }
// })

// console.log(sm)

// const filt = [1,1,22,33,22,5,6,7,4]

// let filtred = filt.filter( (val,index,filt) => {
//     return filt.indexOf(val) === index;
// })

// console.log(filtred)

// let name1 = "Robert Andrew George";

// name1 = name1.split(" ")

// let abb = name1.map( val => {
//     return val.slice(0,1)
// })
// console.log(abb.join(""))

// let arr21 = [1,-2,3,-4,2,1,-4,5,7,-5,7,-4]

// let arr22 = arr21.filter( val => val>=0)
// console.log(arr22)
// let finalArr = arr22.reduce((accumulator,currentElement) => {
//     return accumulator + currentElement;
// },0)

// console.log(finalArr)


// let arr = [1,2,3,2,1,3,5,3,22,1,21]

// let myset = new Set(arr)
// console.log(myset)

// class User{
//     constructor(name,age){
//         this.age = age
//         this.name = name
//     }

//     login() {
//         console.log("login...")
//     }
//     sign() {
//         console.log("sign....")
//     }
// }

// let user1 = new User("Gowtham",19)

// user1.login()

// console.log("settimeout")



// setTimeout(fun1,4000)

// let fun = () =>{
//     console.log("hello1")
// }

// function fun1(){
//     console.log("hello")
// }

// let dateTime = new Date()

// try{
//     let a = 5/0   
//     throw "error accured"

// }

// catch(error){
//     console.log(error)
// }

let joke;

fetch("https://official-joke-api.appspot.com/jokes/programming/random")
.then((res) => res.json())
.then((msg) => {
    joke = 
        `Setup: ${msg[0].setup}<br><br>Punchline: ${msg[0].punchline}` 
    document.getElementById("head").innerHTML = joke
}); 

fetch("https://api.thecatapi.com/v1/images/search")
.then((res) => res.json())
.then((msg) => {
    document.getElementById("photo").src = msg[0].url
})

