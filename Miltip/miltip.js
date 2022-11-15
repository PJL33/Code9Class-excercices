let enteval = [1,20];
let a = 2, b = 3;
let miltipA = [], miltipB = [], miltipAB = [],multip0 = [];
let elemanA = 1,elemanB = 1;
while(a*elemanA <= enteval[1] && a*elemanA >= enteval[0])
{
    miltipA.push(a*elemanA);
    elemanA++;
}

while(b*elemanB <= enteval[1] && b*elemanB >= enteval[0])
{
    miltipB.push(b*elemanB);
    elemanB++;
}

for(el of miltipA)
{
    if(miltipB.includes(el)) miltipAB.push(el);
}

for(let i = enteval[0] ; i < enteval[1] ; i++)
{
    if(!miltipB.includes(i) && !miltipA.includes(i)) multip0.push(i)
}

console.log("Pou a = "+a+" epi b ="+b);
console.log("Miltip "+a+" se\n"+miltipA.join()+" -> total nonb se "+miltipA.length);
console.log("Miltip "+b+" se\n"+miltipB.join()+" -> total nonb se "+miltipB.length);
console.log("Miltip "+a+" ak "+b+" se\n"+miltipAB.join()+" -> total nonb se "+miltipAB.length);
console.log("Nonm ki pa miltilp ni "+a+" ak "+b+" se\n"+multip0.join()+" -> total nonb se "+multip0.length);




