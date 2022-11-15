let chennDigit = "5 45 123 12".split(" ");
let pot = 0,vale = [],totalDigit = 1;
for(let i = 0 ; i < chennDigit.length ; i++)
{
    for(let j = 0 ; j < chennDigit[i].length ; j++)
    {
        pot += parseInt(chennDigit[i][j]);
    }
    vale.push(pot)
    pot = 0;
}

for(el of vale)
{
    totalDigit *= el;
}
console.log("Pwodwi total chak dijit ki konpoze chak nonb se",totalDigit);