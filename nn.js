const tt =["A","ABA","ABCBA","ABCDCBA","ABCDEDCBA","ABCDEFEDCBA","ABCDEFGFEDCBA","ABCDEFEDCBA","ABCDEDCBA","ABCDCBA","ABCBA","ABA","A"];
let text =" ";
for ( let i =0 ; i < tt.length;i++){
    text += tt[i]+ "<br>";

}

document.getElementById("demo").innerHTML=text ; 