//3 ways


//1. Function declartion 
function add (x,y)
{
    return x+y
}
let aa = add(23,34)
console.log(aa)


// 2. Function expression
let sub = function(x,y)
{
    return x-y
}
let bb = sub(88,65)
console.log(bb)

// 3. Arrow function
let multiply =(x,y)=>x*y

//let multiply =(x,y)=>x*y
console.log(multiply)
let m= multiply(9,9)
console.log(m)
