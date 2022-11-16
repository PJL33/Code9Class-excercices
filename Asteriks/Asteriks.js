let chenn = "La voiture";
let chennSplit = chenn.toLowerCase().split(" ");
let vwayel = "aeiouy",aa,cc = "";
for(let i = 0; i < chennSplit.length ; i++)
{
    for(let j = 0 ; j < chennSplit[i].length  ; j++)
    {
       
            bb = chennSplit[i][j + 1];
            
            if(vwayel.includes(bb)) 
            {   console.log(bb);
                cc += "*";
            }
            else{
                cc += chennSplit[i][j];
            }
    }
    cc += " ";
}
    console.log(cc)
