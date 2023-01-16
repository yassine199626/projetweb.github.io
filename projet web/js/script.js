/**page quiz */
var point=document.getElementById("point");
var minute=document.getElementById("minute");
var seconde=document.getElementById("seconde");
var tempps=document.getElementById("temps");
var button=document.getElementById("button")


var i=0;
var j=2;
minute.innerHTML=j;
seconde.innerHTML=i;
function temps(){
  var minuterie=setInterval(function() {
    if(seconde.innerHTML==0&&minute.innerHTML!=0){
      seconde.innerHTML=59;
      minute.innerHTML-=1;

    }
    if(seconde.innerHTML!=0&&minute.innerHTML!=0){
      seconde.innerHTML-=1;

    }
    if(minute.innerHTML==0&&seconde.innerHTML!=0){
      seconde.innerHTML-=1;

    }
    if(minute.innerHTML==0&&seconde.innerHTML<=10){
      tempps.style.backgroundColor="pink";

    }
    if(seconde.innerHTML==0&&minute.innerHTML==0){
      clearInterval(minuterie);
  
      afficheresult()


    }




}, 1000);

}
/*** quiz  */
var letextquestion=document.getElementById("letextquestion");
var a=document.getElementById("a");
var b=document.getElementById("b");
var c=document.getElementById("c");
var atext=document.getElementById("atext");
var btext=document.getElementById("btext");
var ctext=document.getElementById("ctext");
var sumbit=document.getElementById("sumbit");
var input=document.querySelectorAll("ul li input[type=radio]")
var tableaudereponse=document.getElementById("tableaudereponse")
var tablereponsebody=document.getElementById("tablereponsebody")
var nbrereponse=0;
var finish=document.getElementById("finish")
var tabresult=document.getElementById("tableaudereponse")
var containerquiz=document.getElementById("containerquiz")
console.log(input);
var questioncourante=[
{
    textquestion:"question 1 :Dans quel balise HTML plaçons-nous le code JavaScript?",
    a:"La balise js",
    b:"La balise javascript",
    c:"La balise script",
    correct:"c",
    reponsejuste:"La balise script",
    votrereponse:"aucune reponse"
  
},
{
  textquestion:"question 2 :Que signifie HTML ?",
  a:"HyperText Markup Language",
  b:"Hyperspace TradeMark Language",
  c:"XpTdr Mdr Lol",
  correct:"a",
  reponsejuste:"HyperText Markup Language",
  votrereponse:"aucune reponse"

},
{
  textquestion:"question 3:Qu'est ce qu'un navigateur web ?",
  a:"Un logiciel capable d'interpréter et d'afficher du code HTML",
  b:"Un outil permettant d'accéder à Internet ",
  c:"Une interface pour lire et recevoir des e-mails",
  correct:"a",
  reponsejuste:"Un logiciel capable d'interpréter et d'afficher du code HTML",
  votrereponse:"aucune reponse"

},
{
  textquestion:"question 4:HTML est considéré comme ______ ?",
  a:"Langage de haut niveau",
  b:"Langage de balisage",
  c:"Langage POO",
  correct:"b",
  reponsejuste:"Langage de balisage",
  votrereponse:"aucune reponse"

},
{
  textquestion:"question 5:Quelle organisation définit les standards Web?",
  a:"Apple Inc.",
  b:"IBM Corporation",
  c:"World Wide Web Consortium",
  correct:"c",
  reponsejuste:"World Wide Web Consortium",
  votrereponse:"aucune reponse"

},
{
  textquestion:"question 6:HTML utilise des ______?",
  a:"Balises fixes définis par le langage",
  b:"Balises uniquement pour les liens",
  c:"Balises définis par l’utilisateur",
  correct:"a",
  reponsejuste:"Balises fixes définis par le langage",
  votrereponse:"aucune reponse"

},
{
  textquestion:"question 7:HTML a été proposé pour la première fois l’année ___.",
  a:"1980",
  b:"1990",
  c:"2000",
  correct:"b",
  reponsejuste:"1990",
  votrereponse:"aucune reponse"

},
{
  textquestion:"question 8:Si nous souhaitons définir le style d’un seule élément, quel sélecteur css utiliserons-nous?",
  a:"id",
  b:"class",
  c:"name",
  correct:"a",
  reponsejuste:"id",
  votrereponse:"aucune reponse"

},
{
  textquestion:"question 9:La balise HTML qui spécifie un style CSS intégré dans un élément est appelée ____?",
  a:"Design",
  b:"Style",
  c:"Define",
  correct:"b",
  reponsejuste:"Style",
  votrereponse:"aucune reponse"

},
{
  textquestion:"question 10:Un document HTML est enregistré avec l’extension ____.",
  a:".html",
  b:".hvl",
  c:".css",
  correct:"a",
  reponsejuste:".html",
  votrereponse:"aucune reponse"

}

];

var actuel=1;
var pos=0

function changequestion(){
  
      
  if(actuel<10){
    for(var i=0;i<input.length;i++){
    input[i].checked =false;
    }
    letextquestion.innerHTML=questioncourante[actuel].textquestion;
    atext.innerHTML=questioncourante[actuel].a;
    btext.innerHTML=questioncourante[actuel].b;
    ctext.innerHTML=questioncourante[actuel].c;
    if(questioncourante[actuel].correct=="a"){
      input[0].value="correct"
      input[1].value="false"
      input[2].value="false"

    }
    if(questioncourante[actuel].correct=="b"){
      input[0].value="false"
      input[1].value="correct"
      input[2].value="false"
    }
    if(questioncourante[actuel].correct=="c"){
      input[0].value="false"
      input[1].value="false"
      input[2].value="correct"
    }
  }
  
  if(actuel==10){
    finish.style.display="inline"
    sumbit.style.display="none"
  }
  actuel++;
}

function checkreponse(question){
  
  if(question.checked==true&&question.value=="correct"){
    nbrereponse++;
    console.log(nbrereponse)
  }
  if(question.checked==true&&pos<10){
    
    questioncourante[pos].votrereponse=question.nextElementSibling.innerHTML
    console.log(questioncourante[pos].votrereponse)
  }
  

}

function quiz(){
  for(var com=0;com<3;com++){
    checkreponse(input[com])
    }
    resultat(pos)
    pos++;
}

function resultat(position){

  var newtr = document.createElement("tr");
  var td1 = document.createElement("td");
  var td2 = document.createElement("td");
  var td3 = document.createElement("td");
  var td4 = document.createElement("td");
  
 newtr.appendChild(td1)
 newtr.appendChild(td2)
 newtr.appendChild(td3)
 newtr.appendChild(td4)
 td1.innerHTML=questioncourante[position].textquestion;
 td2.innerHTML=questioncourante[position].votrereponse;
 td3.innerHTML=questioncourante[position].reponsejuste;
if(td2.innerHTML==td3.innerHTML){
  td4.innerHTML='<i class="fa fa-check" aria-hidden="true"></i>';
}
else if(td2.innerHTML!=td3.innerHTML){
 td4.innerHTML='<i class="fa fa-times" aria-hidden="true"></i>';
}
 tablereponsebody.appendChild(newtr)
  
}
function afficheresult(){
  var trfinal = document.createElement("tr");
  var tdresult = document.createElement("td");
  var tdresult1 = document.createElement("td");
  tdresult.setAttribute("colspan","2");
  tdresult1.setAttribute("colspan","2");
  trfinal.appendChild(tdresult1);
  trfinal.appendChild(tdresult);
  
  tdresult1.innerHTML="nbre reponse juste";
  tdresult.innerHTML=nbrereponse;
  tablereponsebody.appendChild(trfinal)
  containerquiz.style.display="none";
  tabresult.style.display="inline-block"



}



window.addEventListener('load',temps);
sumbit.addEventListener('click',quiz);
sumbit.addEventListener('click',changequestion);
finish.addEventListener('click',afficheresult);



