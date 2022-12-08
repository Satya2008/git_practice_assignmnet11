prime problem...
let num=10;
let count=0;
for(let i=0; i<=num; i++){
if(num%i==0){
count++;
}
}
if (count==2){
console.log("it is prime")
}else{
console.log("it is not prime")
}