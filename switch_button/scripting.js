
// vars maken
var lengte = 0;
var klokID;
var bool = true;
var bool2 = true;
//*******************************<function>*****************************
function Move(teken)
{
    // lengte verhogen of verlagen
    if(bool2){ lengte = lengte + 2;} else {lengte = lengte - 2;}
    // property aanpassen
    document.getElementById("switchButton").style.left = lengte +"%";
    // zien of men de timer moet stoppen
    if(bool2 && lengte==100) { StopTimer();bool = true; bool2=false;}
    // zien of men de timer moet stoppen
    if(!bool2 && lengte==0)  { StopTimer();bool = true; bool2=true;}
}
//*******************************<function>*****************************
function Timer()
{
   // timer laten starten, mag maar één keer op gedrukt worden
   if(bool) { klokID = setInterval(Move,1); bool = false;}   
}
//*******************************<function>*****************************
function StopTimer()
{
    clearInterval(klokID);
}