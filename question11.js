// 11. Write a JavaScript program to check whether a given number is prime or not.
const a= 3;
let i=1;
let count=0;
while(i<=a)
{
    if(a%i===0)
    {
        count++;
    }
    i=i+1;
}
if(count==2)
{
    console.log("This is a Prime Number");
}
else {
    console.log("This is not a Prime Number");
}