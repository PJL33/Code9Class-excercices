let ip = prompt("Antre adrès IP a");
let ipSplit = ip.split(".");
let pot = 0;
for(let i = 0 ; i < ipSplit.length ; i++)
{
    for(let j = 0 ; j < ipSplit[i].length ; j++)
    {
        pot += parseInt(ipSplit[i][j]);
    }
}
pot *= parseInt(ipSplit[0][0])
console.log(pot)