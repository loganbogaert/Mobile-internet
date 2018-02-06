//*******************************<vars>********************************
var lengte = 0;
var opacity = 0;
var klokID;
var bool = true;
var bool2 = true;
var bool3 = true;
var aantal = 1;
var nummers = ["0","0,0666666666666667","0,1333333333333333","0.2","0,2666666666666667","0,3333333333333333","0.4",
"0,4666666666666667","0,5333333333333333","0.6","0,6666666666666667","0,7333333333333333","0.8","0,8666666666666667","0,9333333333333333","1"]
//*******************************<function>*****************************
function Move()
{
    // lengte verhogen of verlagen
    if(bool2){ lengte = lengte + 2.5;} else {lengte = lengte - 2.5;}
    // property aanpassen
    document.getElementById("switchMainButton").style.left = lengte +"%";
    // zien of men de timer moet stoppen
    if(bool2 && lengte==75) { StopTimer();bool = true; bool2=false;}
    // zien of men de timer moet stoppen
    if(!bool2 && lengte==0)  { StopTimer();bool = true; bool2=true;}
    // opacity aanpassen
    opacity = nummers[aantal];
    // opacity van div aanpassen
    document.getElementById("switchMainButton").style.backgroundColor = "rgba(115,115,115," +opacity +")";
    // aantal verhogen of verlagen
    if(bool3){aantal++;} else {aantal--;}
    // aantal en bool aanpassen
    if(aantal==16) {bool3 = false; aantal=14;}
    // aantal en bool aanpassen
    if(aantal==-1) {bool3 = true; aantal=1;}
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
    clearInterval(klokID);
}