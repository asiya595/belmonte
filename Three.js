let arr= [9, -3, 5, -2, -8, -6, 1, 3];
let pos=[],neg=[];
for(let i of arr){
    if(i<0){
       neg.push(i)
    }
    else if(i>0) {
   pos.push(i);
    }
}
console.log(neg);
console.log(pos);








// for(let i of arr){
// //     if(i<0){
// //       let b=arr.push()
// //         console.log(i);       
// // }
//  let b=arr.sort()
//  console.log(b);
// }
