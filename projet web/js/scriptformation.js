/***page formation */
var tab=[{src:"../image/diplome9.png",figcaption:"Mon diplome de 9 éme anneé",desc:"le premier cycle des études secondaires a été effectué au collége habib bourguiba de2009 à 2011 et a été ponctué par la reussite au concours de la 9 éme avec une moyenne de 13.45 (Mention assez bien)"},
{src:"../image/bac.png",figcaption:"diplome bac",desc:"Les études secondaires ont été effectuées au Lycéé habib maazoun sfax sur la période de 2011-2015 orienté à la section mathématiques aprés une premiére désignation en 2 éme année en sciences expérimentales,j'ai passé le concours du baccalauréat ave une moyenne passable de 10.95 à la session principale."},
{src:"../image/license.png",figcaption:"diplome universitaire",desc:"passionné par l'informatique,j'ai poursuivi mes études supérieures de 2015-2018 à la FSEG sfax en informatique de gestion "}
];
var diplome=document.getElementById("diplome");
var figcaption=document.getElementById("titrediplome");
var buttonprecedent=document.getElementById("back");
var buttonnext=document.getElementById("next");
var articlediplome=document.getElementById("articlediplome");
var position=0;
function next(){
    position++;
    if(position>2){
        position=0
       }
   diplome.src=tab[position].src;
   figcaption.innerHTML=tab[position].figcaption;
   articlediplome.innerHTML=tab[position].desc;
   
}
function precedent(){
    position--;
    if(position<0){
        position=2
       }
    diplome.src=tab[position].src;
    figcaption.innerHTML=tab[position].figcaption;
    articlediplome.innerHTML=tab[position].desc;
}
buttonprecedent.addEventListener('click',precedent);
buttonnext.addEventListener('click',next);