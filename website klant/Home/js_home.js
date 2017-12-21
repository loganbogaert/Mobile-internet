// teller
var aantal =1;
// vorigeteller
var vorige_aantal =0;
// timer
var timer;
//******************<function>*****************     
function ChangeSrc()
{
  // teller terug op nul zetten    
  if(aantal==3){aantal=0;}
  // eerste background
  if(aantal==0){$("#backgrounddiv").removeClass("container_background2");$("#backgrounddiv").addClass("container_background0");} 
  // tweede background
  if(aantal==1){$("#backgrounddiv").removeClass("container_background0");$("#backgrounddiv").addClass("container_background1");}
  // derde background
  if(aantal==2){$("#backgrounddiv").removeClass("container_background1");$("#backgrounddiv").addClass("container_background2");}
  // vermeerden met 1    
  aantal++;   
}    
//******************<function>*****************     
function LaunghTimer() 
{
     // timer lanceren
     timer = setInterval(ChangeSrc, 3000);
}
//******************<function>***************** 
function Delete000WebhostPopUp()
{
   // popup laten verdwijnen door de display property op none te zetten----> zorgt ervoor om geen reclame te hebben zonder te moeten betalen    
   $("a[title*='Hosted']").css("display", "none");
}
