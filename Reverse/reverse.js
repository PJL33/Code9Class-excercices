let chenn = "Ayibobo Ayiti";
let chennSplit = chenn.split(" ");
let reverse = chennSplit.reverse();
let final = "";
for(let i = 0; i < reverse.length ; i++)
{
    for(let j = reverse[i].length; j > 0  ; j--)
    {
        final += reverse[i][j - 1];
    }
}
console.log(final);