$(document).ready(function () {
    $("#but").click(function () {
        console.log("Hello World!");
    });
});


$(function () {
    $("#but","body").click(function () {
        console.log("Hello World!");
    });
});


$(function () {
    $("#but","body").click(function () {
        // $("#container").text("<p>Hello</p>")
        // $("#container").html("<p>Hello</p>");
        $("div#container").prepend("<h1>Hello</h1>");
        $("div#container").append("<h1>Bye</h1>");
    });
});


// Utilisation de la méthode .attr(nomAttribut) qui permet de récupérer la valeur de l'attribut passé en paramètre
// Affiche "blue"
$(function () {
   console.log($("p").attr("class"));
   $("div p:nth-child(1)").prepend("<p>Test</p>");
});


/* Utilisation de la méthode .attr(nomattribut)
et de each() qui permet de récupérer toutes les valeurs
de l'attribut passé en paramètre
*/
$(function () {
    $("p").each(function(){
        console.log($(this).attr("class"))
    });
 });

 /*
Utilisation de la méthode length
qui permet de déterminer le nombre
d'éléments sélectionnés
 */

 $(function () {
    console.log($("p").length);
 });


 // Utilisation de la méthode .eq(i)
// qui permet de choisir l'élément 
// ayant l'indice passé en paramètre
// Affiche "blue"
$(function () {
    //console.log($("p").eq(0));
    console.log($("p:eq(0)"));
});

 // Opérations
 // p:lt(i) : parag < indice i
 // p:gt(i) : parag > indice i
 // p:even: parag d'indice pair et d'indice impair
 // p:first : premier parag et p:last : dernier parag
 // input:text: on récupère les input de type text
//$("div p:nth-child(1)").prepend("<p>Test</p>")
   

/*
Utilisation de la méthode remvAttr(Nomattribut)
en supprimant l'attribut passé en paramète,
ici "class" puis, de la méthode .attr(nomAttribut,nouvelleValeur)
qui va permettre de modifier la valeur de l'attribut
passé en paramètre.
*/
$(function () {
   // $("p").eq(0).removeAttr("class");
    // $("p").eq(0).attr("class","red");
    $("p").even().removeClass("blue").addClass("red");
});


/*
Utilisation de la méthode val() qui
nous permet de remplacer la valeur
de l'attribut value par la valeur passée en paramètre
*/
$(function () {
    $("#but").click(function () {
        console.log($("#nom").val("John Wick"));
    });
});


/*
Utilisation de la méthode val() qui
nous permet de récupérer la valeur
de l'attribut value
*/
$(function () {
    $("#but").click(function () {
        console.log($("#nom").val());
    });
});

/* Utilisation de la méthode .css(nomPropriete)
qui nous permet de récupérer la valeur de la
propriete CSS passée en paramètre
*/

$(function () {
    console.log($("p").eq(0).css("color"));
});


/* Utilisation de la méthode .css(nomPropriete, nouvelleValeur)
qui va permettre de modifier la valeur de la propriété passée
en paramète
*/
$(function () {
    console.log($("p").eq(0).css("color","green"));
    console.log($("p").eq(0).css({"color" : "green", "color" : "green"}));
});

// Méthodes .xClass()
// .addClass(): Ajoute une classe
// .removeClass() : Supprime une classe
// .hasClass(): Teste l'existence d'une classe
// .toggleClass() : Retire ou ajoute une classe

$(function() {
    $(".red").each(function() {
        $(this).removeClass("red").addClass("blue");
    });
})


//de bleu à vert 
$(function() {
    $(".blue").each(function() {
        $(this).removeClass("blue").addClass("green");
    });
});

//affiche tout en vert
//de vert à rouge
$(function() {
    $(".green").each(function() {
        $(this).removeClass("green").addClass("red");
    });
});

//affiche tout en rouge
$('#button1').click(function(){
    $("textarea").css("border","2px solid red")
    .add("p").css("border", "2px solid red")
});

$('#button1').click(function()[
    $("textarea").css("border","2px solid red")
    .add("p").css("border","2px solid red")
])

$("p").last().addClass("w3r_font_color");

function semantique() {
    $("#contenu.italique").wrap("<i></i>")
    $("#contenu.gras").wrap("<b></b>")
    $("#contenu.souligne").wrap("<u></u>")
    $("#contenu.barre").wrap("<del></del>")
}

  function colorer() {
    $("#contenu.rouge").wrap("<span style='color:red'></span>")
    $("#contenu.vert").wrap("<span style='color:green'></span>")
    $("#contenu.bleu").wrap("<span style='color:blue'></span>")
    $("#contenu.orange").wrap("<span style='color:orange'></span>")
  }
  
  function mettreTitres() {
    $("#contenu.titre1").wrap("<h1></h1>")
    $("#contenu.titre2").wrap("<h2></h2>")
  }
  
  function liensEnBoutons() {
    $("#contenu a").wrap("<button></button>")
  }
  
  function dupliquerTexte() {
    $("#contenu").clone().appendTo("#contenu")
  }
  
  function regrouperTitres() {
   $("h1").wrapall("<div></div>")
   $("h2").wrapall("<div></div>")
  }
  
  function regrouperLiens() {
    $("#contenu a").wrapall("<div></div>")
  }
  
  function viderBoutons() {
    $("button").empty()
  }
  
  function enleverLiens() {
    $("#contenu a").remove()
  }
  
  function enleverGras() {
    $("#contenu b").remove()
  }
  
  function enleverItalique() {
    $("#contenu i").remove()
  }
  
  function enleverDecor() {
    $("#contenu *:not(html):not(body):not(p):not(button)").remove()
  }
  
  function voirCode() {
    $("#contenu").text($("p").html())
  }
