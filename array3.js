let students = [
    {fistname:"Aelina", Age:33, skill:["python","c++","java"]},
    {fistname:"rojina", Age:30, skill:["c#","c++","java"]},
    {fistname:"Eliza", Age:27, skill:["python","c++","java"]}
]
console.log(students[0].fistname, students[0].skill.length)

// print name and skills for every student in array
for(let i=0; i<students.length;i++)
{
    console.log(students[i].fistname, students[i].skill)
}
console.log("******************8")


//1. find -->to find something to compare
let test =students.find(function(el,index,array){
    return el.fistname=="rojina"
})
console.log(test)   //{ fistname: 'rojina', Age: 30, skill: [ 'c#', 'c++', 'java' ] }

//2. findIndex -->find index of arrary
let test1 = students.findIndex(function(el,index,array){
    return el.fistname =="Eliza"
})
console.log(test1) //2

//3. some --> returns true if even 1 condition match else returns false
let test2 = students.some(function(el,index,array){
    return el.fistname =="Aelina"
})
console.log(test2)   //true

//4. every --> returns true if every condition match else false
let number=[1, 22, 33, 44, 55]
let test3 = number.every(function(el,index,array){
    return el>44
})
console.log(test3)     //false

// 5. forEach -->does not return anything
let cities = ["pune","mumbai","tokiyo","newyork"]
cities.forEach(function(el,index,array){ 
   console.log(`Welcome  ${el}!`)   // Welcome  pune! Welcome  mumbai!...
})

// 5. sort() -->sort the order by alphabetical 
cities.sort()
console.log(cities)    //[ 'mumbai', 'newyork', 'pune', 'tokiyo' ]


// 6. fill -->fill index by assigned value
let r = [1,2,3,4,5,6,7,8,9]
console.log(r.fill('a',4,r.length))      ////[1,2,3,4,'a','a','a','a','a']


// 7. flat() -->shows array inside array in 1 single array
let number1 = [[10,20,30],[11,224,33],[23,44,55]]
let test4 = number1.flat()
console.log(test4) //[10, 20, 30, 11, 224,33, 23, 44, 55]

//to find largest number
//console.log(Math.max(test4))
let largest = 0;
for(i=0; i<test4.length; i++)
{
    if (test4[i]>largest)
    {
         largest = test4[i]

    }
}
console.log(largest)

// 8. slice(start value, 2nd last value) --> end value will not be included.
let name = ["rita", "sita", "gita", "pita"]
console.log(name.slice(1,5))


// 8. concat  --> add 2 array in a single
let aa = [1, 2, 3, 4, 5]
let bb = ["rita", "sita", "gita"]
let test5 = aa.concat(bb)    //[1,2,3,4,5,'rita','sita','gita']
let test6 =bb.concat(aa)     //['rita','sita','gita' 1,2,3,4,5]
console.log(test6)


// 9. includes --> returns true if included value is available else false
console.log(aa.includes("pass"))   //false
console.log(aa.includes(1))    //true
console.log(bb.includes("sita")) //true


//10. splice(startpoint,no.of delete,"replace with")
console.log(bb.splice(1,3,"yal"))
console.log(bb)

// 11. join --> join every elemet of array with given action
let cc = ["i", "am", "a", "good", "girl"]
console.log(cc.join("-"))   //i-am-a-good-girl

