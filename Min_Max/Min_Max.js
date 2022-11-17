let numbers = [1,2,3,0,4,5,6,7,10,11,8,9]
let min = numbers[0],max = numbers[0];
for(let i = 0; i < numbers.length ; i++)
{
    if(max < numbers[i]) max = numbers[i]
}

for(let j = 0; j < numbers.length ; j++)
{
    if(min > numbers[j]) min = numbers[j]
}

console.log("Nan lis tablo " + numbers.join() + " a. Nonm ki pi piti a se " + min + " tandiske nonb ki pi gran an se " + max +".")
