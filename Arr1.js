//Merge arrays
//The merge performed using the spread operator or array.concat() creates a new array
//Merge using array.concat()
//Merge using spread operator
//Merge using array.push()

// let ar=[23,46,76,43,22,13,48];
// the spread operator [...array1, ...array2], or a functional way [].concat(array1, array2) to merge 2 or more arrays and  are immutable because the merge result is stored in a new array.
function arr(){
    var num1=[11,12,13];
    var num2=[14,15,16];
    var num3=[17,18,19];
    console.log(num1.concat(num2,num3));
    var num4=[].concat(num1,num2);
    console.log("New Way",num4);
}
arr();


const array1=['aaa','bbb','ccc','ddd'];
const array2=['eee','fff','ggg','hhh'];
array3=[...array1,...array2]
console.log(array3)


//Merge using push()
//To perform a mutable merge, i.e. merge into an array without creating a new one, then you can use array1.push(...array2) approach.
//heroes.push(...villains) pushes all the items of villains array at the end of heroes array — performing a mutable merge. heroes array is mutated.
const nu1=[23,46,76,43,22,13,48],nu2=[67,86,77];
const result=nu1.push(...nu2);
console.log(nu1);
console.log(result);


//reduce method  .merge multiple arrays is using the reduce() method.
//we can initialize a variable(arr) with the value of arr1 and then insert the elements of arr2 one by one to arr.
const ar1=[1,2,3],ar2=[4,5,6];
const merged=ar2.reduce((ar,item)=>{
    ar.push(item);
    return ar;
},ar1);
console.log(merged);

//merge elements from one array to another, we must first iterate(loop) through all the array elements. 
//In the loop, we will retrieve each element from an array and insert(using the array push() method) to another array.
const merge=(first,second)=>{
    for(let i=0;i<second.length;i++){
        first.push(second[i]);
    }
    return first;
   
} 
console.log(merge([11,22,33,44],[55,66,77,88]));