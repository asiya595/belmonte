//count
let arr=[5, 6, 3, 4, 3, 6, 4 ]
let obj={}
for(let i of arr){
obj[i]=(obj[i]||0)+1
}
console.log(obj);