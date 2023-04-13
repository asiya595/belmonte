let arr=[3,6,8,9,5,1]
let res=[];
for(let i=0;i<10;i++){
    if(arr.indexOf(i)===-1){
        res.push(i)
    }
}
console.log(res);