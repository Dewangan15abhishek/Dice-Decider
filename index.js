alert("Both the players choose one number(1 or 2)")

var ran1 = 1 + Math.floor(6* Math.random());
var ran2 = 1 + Math.floor(6* Math.random());

if(ran1 === 1 )
    document.querySelector("#img1").setAttribute("src" , "dice1.png");
else if(ran1 === 2)
    document.querySelector("#img1").setAttribute("src" , "dice2.png");
else if(ran1 === 3)
    document.querySelector("#img1").setAttribute("src" , "dice3.png");
else if(ran1 === 4)
    document.querySelector("#img1").setAttribute("src" , "dice4.png");
else if(ran1 === 5)
    document.querySelector("#img1").setAttribute("src" , "dice5.png");
else
    document.querySelector("#img1").setAttribute("src" , "dice6.png");


if(ran2 === 1 )
    document.querySelector("#img2").setAttribute("src" , "dice1.png");
else if(ran2 === 2)
    document.querySelector("#img2").setAttribute("src" , "dice2.png");
else if(ran2 === 3)
    document.querySelector("#img2").setAttribute("src" , "dice3.png");
else if(ran2 === 4)
    document.querySelector("#img2").setAttribute("src" , "dice4.png");
else if(ran2 === 5)
    document.querySelector("#img2").setAttribute("src" , "dice5.png");
else
    document.querySelector("#img2").setAttribute("src" , "dice6.png");  

if(ran1 > ran2)
    document.querySelector("h1").textContent= "Player 1 win!";
else if( ran1 === ran2)
    document.querySelector("h1").textContent= "Drawww";
else
    document.querySelector("h1").textContent= "Player 2 win!";