//*******************************<vars>********************************
var lengte = 0;
var klokID;
var bool = true;
var bool2 = true;
var bool3 = true;
var aantal = 1;
var px = 32;
//*******************************<function>*****************************
function Move()
{
    // lengte verhogen of verlagen
    if(bool2){ lengte = lengte + 2.5;} else {lengte = lengte - 2.5;}
    // property aanpassen
    document.getElementById("switchMainButton").style.left = lengte +"px";
    // zien of men de timer moet stoppen
    if(bool2 && lengte==70) { StopTimer();bool = true; bool2=false;}
    // zien of men de timer moet stoppen
    if(!bool2 && lengte==0)  { StopTimer();bool = true; bool2=true;}
    // opacity van div aanpassen
    // width aanpassen
    document.getElementById("switchMainButton").style.width = px +"px";
    // heigth aanpassen
    document.getElementById("switchMainButton").style.height = px +"px";
    // aantal verhogen of verlagen
    if(bool3){aantal++; px = px +2;} else {aantal--; px = px -2;}
    // aantal en bool aanpassen
    if(aantal==15) {bool3 = false; px = 56;}
    // aantal en bool aanpassen
    if(aantal==1) {bool3 = true; px = 32;}
}
//*******************************<function>*****************************
function Timer()
{
    // timer laten starten, mag maar één keer op gedrukt worden
    if(bool) { klokID = setInterval(Move,5); bool = false;}   
}
//*******************************<function>*****************************
function StopTimer()
{
    // interval stoppen
    clearInterval(klokID);
}
