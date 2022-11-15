let enonse = "Ayiti se yon BEL PEYI";
let enonseSplit = enonse.split(" ");
let lowercase = "";
for(let i = 0; i < enonseSplit.length ; i++)
{
    for(let j = 0 ; j < enonseSplit[i].length ; j++)
    {
       (j == 0)? lowercase += enonseSplit[i][j].toUpperCase() :lowercase += enonseSplit[i][j].toLowerCase()
    }
    lowercase += " ";
}
console.log(lowercase)