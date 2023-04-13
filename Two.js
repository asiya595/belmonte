let arr = [
    {
           name:"venkat",
           age:"20"
      },
       {
           name:"vinay",
           age:"21"
       },
       {
           name:"kalyan",
           age:"22"
       },
       {
           name:"krishna",
           age:"23"
       }
   ]
   

   
let sum=0;
   arr.map((e,i)=>{
    // arr[i].phone=i+1;
    e["phone"] = i+1
   
   })
   console.log(arr);
// let sum=0;
// for(let i of arr){
//      arr[i].phone=0;
//     console.log(arr);
// }
// arr[0].phone=1;
// console.log(arr);