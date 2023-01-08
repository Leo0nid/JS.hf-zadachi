// https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/train/javascript

// const evenOrOdd = number => {
// if (number % 2 ===0){
// return "Even"}
// else {
// return "Odd"}
// }
// console.log(evenOrOdd(2))


// https://www.codewars.com/kata/century-from-year

// const century = (year) => {
//    return Math.ceil( year / 100)
// }
// console.log(century(1708))


 ///https://www.codewars.com/kata/easy-mathematical-callback //

// const processArray = (arr, callback) => arr.map((callback) => {
//    return  callback * 2
// })
// console.log(processArray([ 8, 16, 4, 14, 10 ]))



// https://www.codewars.com/kata/570597e258b58f6edc00230d/train/javascript

// const array = (arr) => {
//     if ( arr.length > 3 ){
//         return arr.replace(/,/g, " ").slice(1,-1).trim()
//     }
//     else {
//         return null
//     }
// }
// console.log(array("2"))


//https://www.codewars.com/kata/56ba8a9b022c16017d0001f3/train/javascript

// class Shark extends Animal {
//     constructor(name, age, status) {
//       super();
//       this.name = name;
//       this.age = age;
//       this.legs = 0;
//       this.status = status;
//       this.species = 'shark';
//     }
//     return `Hello, my name is ${this.name} and I am ${this.age} years old.`
//   }
  
//   class Cat extends Animal {
//     constructor(name, age, status) {
//       super();
//       this.name = name;
//       this.age = age;
//       this.status = status;
//       this.legs = 4;
//       this.species = 'cat';
//     }
//     introduce() {
//       return `Hello, my name is ${this.name} and I am ${this.age} years old.  Meow meow!`;
//     }
//   }
  
//   class Dog extends Animal {
//     constructor(name, age, status,master='') {
//       super();
//       this.master = master;
//       this.name = name;
//       this.age = age;
//       this.status = status;
//       this.legs = 4;
//       this.species = 'dog';
//     }
//     introduce() {
//       return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
//     }
//     greetMaster() {
//       return `Hello ${this.master}`;
//     }
//   }


// https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/train/javascript

// const repeatStr = (n, s) =>{
// return s.repeat(n)
// }
// console.log(repeatStr(6, "I"))



//https://www.codewars.com/kata/51f9d93b4095e0a7200001b8/train/javascript

// const howManyLightsabersDoYouOwn = (names) =>{
//     return names === 18 ? "Zach" : 0
// }
// console.log(howManyLightsabersDoYouOwn(5))


//https://www.codewars.com/kata/57f780909f7e8e3183000078/train/javascript

// const grow = x => x.reduce((acc,rec) => {
//     return acc * rec
// })
// console.log(grow([1, 2, 3, 4]))