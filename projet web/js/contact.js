

function verif(){
    var nom=document.getElementById("nom").value
    var prenom=document.getElementById("prenom").value
    var objet=document.getElementById("objet").value
    var message=document.getElementById("message").value
    var adresse=document.getElementById("adresse").value

var envoyer=document.getElementById("envoyer")
    if (nom==""){
        alert('Ajouter votre nom!');
        document.form.nom.focus();
    }

    else if (prenom==""){
        alert('Ajouter votre prénom!');
        document.form.prenom.focus();
    }
    else if (objet==""){
        alert('Ajouter un objet a votre message');
        document.form.objet.focus();
    }
    else if (adresse==""){
        alert('saisir votre adresse');
        document.form.adresse.focus();
    }

    else if (message==""){
        alert('ecrire votre message');
        document.form.message.focus();
    }
    
    console.log(nom)
}
envoyer.addEventListener('click',verif)