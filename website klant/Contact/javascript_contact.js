//****************************<function>*************************
function SendRequest()
{
    // email ophalen
    var email = document.getElementById("email").value;
    // subject ophalen
    var subject = document.getElementById("subject").value;
    // message ophalen
    var message = document.getElementById("text").value;
    // filestring met parameters maken
    var file = "email.php?email="+email+"&subject="+subject+"&message="+message;
    // xmlHTTPrequest object maken
    var xmlObject = new XMLHttpRequest();
    //***********<checken of alles ingevuld is geweest>**********
    if(email!="" && subject!="" && message!="")
    {
      // functie dat moet worden uitgevoerd wanneer alles klaar is 
      xmlObject.onreadystatechange = function() 
      { 
           if(this.readyState == 4 && this.status == 200) 
           {
                // message van messagebox veranderen
                document.getElementById("messagetext").innerHTML = this.responseText;
           }
           else
           {
                // message van messagebox veranderen
                document.getElementById("messagetext").innerHTML = "Error PHP-script"; 
           }
      };
      // openen van document
      xmlObject.open("GET", file, true);
      // zenden
      xmlObject.send();            
    }
    else
    {
     // message van messagebox veranderen
     document.getElementById("messagetext").innerHTML = "Please fill in all boxes :";
    }
   // popup laten verschijnen
   ShowPopUp();   
}
// var maken
var bool = true;
//****************************<function>*************************
function ToonNavBar()
{
  //********<wanneer de slider er niet is>********
  if(bool==true) 
  {
    // naar beneden laten gaan  
    $(".nav1").slideDown(500);
    // bool op false zetten  
    bool=false;
    // button van kleur laten veranderen
    $(".bar1").addClass("barColorOnclick");
    $(".bar2").addClass("barColorOnclick");
    $(".bar3").addClass("barColorOnclick");
    // klassen deleten
    $(".bar1").removeClass("barColorUnclick");
    $(".bar2").removeClass("barColorUnclick");
    $(".bar3").removeClass("barColorUnclick");
    // div laten roteren
    $(".bar1").addClass("divRotate45");
    // div laten roteren  
    $(".bar3").addClass("divRotate-45");
    // twee classes verwijderen
    $(".bar1").removeClass("divRotate0");
    $(".bar3").removeClass("divRotate-0");
    // tweede lijn laten verdwijnen + eerste en laatste lijn verplaatsen
    $(".bar2").animate({opacity: "0"},{ queue: false, duration: 400 });
    $(".bar1").animate({top: "0.9em"},{ queue: false, duration: 400 });
    $(".bar3").animate({top: "0.9em"},{ queue: false, duration: 400 });
  }
  //********<wanneer de slider er wel is>********
  else
  {
    // naar boven laten gaan
    $(".nav1").slideUp(500);
    // bool op true zetten    
    bool=true;
    // button van kleur laten veranderen
    $(".bar1").addClass("barColorUnclick");
    $(".bar2").addClass("barColorUnclick");
    $(".bar3").addClass("barColorUnclick");
    // klassen deleten
    $(".bar1").removeClass("barColorOnclick");
    $(".bar2").removeClass("barColorOnclick");
    $(".bar3").removeClass("barColorOnclick");
    // div laten roteren
    $(".bar1").addClass("divRotate0");
    // div laten roteren  
    $(".bar3").addClass("divRotate-0");
    // twee classes verwijderen
    $(".bar1").removeClass("divRotate45");
    $(".bar3").removeClass("divRotate-45");
    // tweede lijn terug laten zien + eerste en laatste lijn verplaatsen
    $(".bar2").animate({opacity: "1"},{ queue: false, duration: 400 });
    $(".bar1").animate({top: "0.2em"},{ queue: false, duration: 400 });
    $(".bar3").animate({top: "1.7em"},{ queue: false, duration: 400 });
  }
}
//****************************<function>*************************
function ShowPopUp()
{
    //*******************<classen toevoegen en verwijderen>*****************
    $("#fullCover").addClass("coverShown");
    $("#fullCover").removeClass("uncoverShown");
    $("#fullCover").removeClass("display");
    $("#messagemail").addClass("messageMailVisible");
    $("#messagemail").removeClass("messageMailHidden");
}
//****************************<function>*************************
function HidePopUp()
{
     //*******************<classen toevoegen en verwijderen>*****************
     $("#fullCover").addClass("uncoverShown");
     $("#fullCover").removeClass("coverShown");
     $("#messagemail").addClass("messageMailHidden");
     $("#messagemail").addClass("messageMailVisible");
     // deze functie mag niet meteen uitgevoerd worden
     SetDispayNone();
}
//****************************<function>*************************
function SetDispayNone() 
{
    // functie dat na 0.7s wordt uitgevoerd
    setTimeout(function(){ $("#fullCover").addClass("display"); }, 700);
}