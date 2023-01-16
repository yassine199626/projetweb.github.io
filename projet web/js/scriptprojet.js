var tab=[{src:"../image/jeudragon.png",figcaption:"projet jeu dragon slyer"},
    {src:"../image/jeudragon1.png",figcaption:"projet jeu dragon slyer"},
    {src:"../image/jeudragon2.png",figcaption:"projet jeu dragon slyer"},
    {src:"../image/projetc.png",figcaption:"projet language c"},
    {src:"../image/projethtml1.jpg",figcaption:"projet html"},
    {src:"../image/projethtml2.jpg",figcaption:"projet html"},
    {src:"../image/projethtml3.jpg",figcaption:"projet html"},
    {src:"../image/projet3.png",figcaption:"projet html"}
]
    var precedent=document.getElementById("precedent")
    var next=document.getElementById("next")
    var playy=document.getElementById("play")
    var imageprojet=document.getElementById("imageprojet")
    var titreprojet=document.getElementById("titreprojet")
    var stop=document.getElementById("")
    var etat=1
    var start
    
    var position=1;
    function nextt(){
        position++;
        if(position>7){
            position=0
           }
        imageprojet.src=tab[position].src;
        titreprojet.innerHTML=tab[position].figcaption;
        
       
    }
    function precedentt(){
        position--;
        if(position<0){
            position=7
           }
        imageprojet.src=tab[position].src;
        titreprojet.innerHTML=tab[position].figcaption;
        
    }
    function play(){
        if(etat==0)etat=1
        else if(etat==1)etat=0
        if(etat==0){
            start=setInterval(nextt,1000);
            playy.classList.replace("fa-play","fa-pause")
            
        }
        if(etat==1){
            clearInterval(start);
            playy.classList.replace("fa-pause","fa-play")
            
        }
        

    }
    precedent.addEventListener('click',precedentt);
    next.addEventListener('click',nextt);
    playy.addEventListener('click',play)