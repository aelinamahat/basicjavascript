/*1. map -->let newArray = arrayName.map(function(currentEle,index,arr){
    return  statment
})*/
let languages = ["Nepali","Hindi", "English"]
for(let i=0;i<languages.length;i++)
{
    console.log(languages[i].length)  //to find length of el in array
}
let birthyear= [2000, 2001, 2002]
let age = []
for(let i=0;i<birthyear.length;i++)
{
    let ages = 2021-birthyear[i]
    age.push(ages)
}
console.log(age) //[ 21, 20, 19 ] using simple method
console.log("-------------")

//a. now using map to find year
let test= birthyear.map(function(el)
{
    return 2021-el
})
console.log(test)

//b. now using map to print string
let names = ["Aelina", "Rojina","Eliza"]
let test1= names.map(function(el)
{
    return `welcome ${el}!`
})
console.log(test1)

/*2. filter --> let newArray = arrayName.filter(function(currentEle,index,arr){
     return statment
})
//a. using filter  find number greater than 15
// let number = [14, 15, 16, 12, 11, 17]  
// let result = []               //old way
// for(let i=0; i<number.length;i++)
// {
//     if(number[i]>15)
//     {
//         result.push(number[i])
//     }
// }
// console.log(result)  ///[ 16, 17 ]

// let test2 = number.filter(function(el,index,arr){    //using filter 
//     return el>15
// })
// console.log(test2)   //[ 16, 17 ]


// //b. using filter  find length greater than 3
// let names = ["Aelina", "Rojina","Eli"]
// let test3 = names.filter(function(el){
//     return el.length>3
// })
// console.log(test3)    //[ 'Aelina', 'Rojina' ]


// //c. using filter  find odd number
// let odd = [23,34,55,66,77,88]
// let test4 = odd.filter(function(el){
//     return el % 2 !== 0
// })
// console.log(test4)    //[ 23, 55, 77 ]

// //d. using arrow function find odd number
// let odd1 = [23,34,55,66,77,88]
// let test5 = odd1.filter((el)=>el % 2 !==0)
// console.log(test5)    //[ 23, 55, 77 ]


/*3. reduce --> let newArray = arrayName.reduce(function(acc,currentEle,index,arr)
{
     return statment
},0)*/
let names1 = ["Aelina", "Rojina","Eli"]
let test6 =names1.reduce(function(acc,el,index,arr){
    return acc+el.length
},0)
console.log(names1)
console.log(names1.length)
console.log(names1/names1.length)


console.log("-------------")
let number1 = [10,20,30,40]
let sum = 0                       //old way
for(let i = 0 ; i < number1.length ; i++)
{
    sum = sum + number1[i] // 100
}
console.log(sum/number1.length)  //100/4=25

let test7 = number1.reduce(function(el,acc){    //using reduce
    return el+acc

},25)
console.log(test7)   //125

let test8 = number1.reduce((acc,el)=>acc+el,0)  //using arrow function
console.log(test7/number1.length)  //31.25

let n=[10,20,30]             //array
//10/2=20/5=30/4=7.5
let ab=n.reduce(function(acc,el){           //reduce method returns array
    return  acc+el               //0+10=10+20=30+30=60
},0)/n.length
console.log(ab)

//reduce methods return number
//map method return array
//filter method return array
let abc=n.reduce(function(acc,ek){
    return ek/acc
},2)
console.log(abc)

let ii=n.filter(function(el,index,arr){
    return el>25
})
console.log(ii)