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
   if(arr[0] && (arr.length)-1){
    arr.shift();
    arr.pop();
    console.log(arr)
    }
  // expected output [
  //     
  //     {
  //         name:"vinay",
  //         age:"21"
  //     },
  //     {
  //         name:"kalyan",
  //         age:"22"
  //     }
  // ]
  /* arr.forEach((e,i)=>{
  let a=arr[0];
  if(a ){
  let d=arr.pop();
  console.log(d)
  }
  }) */
  /* let a=arr[0];
   let b=arr.length;
  if(a ){
  arr.shift()
  console.log(arr)
  if((arr.length)-1){
  arr.pop()
  console.log(arr)
  }
  } */
  //Method 1
  
 
  
 