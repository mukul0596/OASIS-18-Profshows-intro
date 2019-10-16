var nextButton = document.getElementById("next");       // Stores the (next) button
var prevButton = document.getElementById("previous");   // Stores the previous button
var left = document.getElementById("left");             // Stores the left holder
var right = document.getElementById("right");           // Stores the right holder
var center = document.getElementById("center");         // Stores the active/central holder
var float = document.getElementById("float");           // Stores the hidden floating holder
var script = document.getElementById("script");
var closeButton = document.getElementById("close");
var container=document.getElementsByClassName("container")[0];
var textDetails=document.getElementById("textDetails");
var logo=document.getElementsByTagName("img")[0];
var contact=document.getElementsByClassName("contactButton")[0];
var header=document.getElementsByClassName("header")[0];
const numEvents = 5;
var currentEvent = 0;
var width= window.screen.height;
var height= window.screen.width;
var profShows=
{
    name_Of_Event:["Hindi ProfShow","English ProfShow","EDM Night","N2O","Classical ProfShow"],
    details: {
    	name_Of_Artist:["Shankar-Ehsaan-Loy", "Dan Deacon", "Nucleya", "Biswa Kalyan Rath", "Abhishek Raghuram"],
    	date:["21st October","20th October","22nd October","23rd October","21st October"],
    	time:["8:30 PM","8:30 PM","10:30 PM","7:00 PM"," 6:30 PM"],
    	venue:["SR Grounds","Main Audi","SR  Grounds","Main Audi","Main Audi"]
    },
    description:[
    "This year, experience the enthralling act of the most energetic show-woman in business. Witness an unparalleled stage performance breathe life into the most iconic Bollywood tracks, brought together in a uniquely crafted harmony of vibrance and melody, as the Oasis '19 proudly presents to you <b>Sunidhi Chauhan</b>, live at SR Lawns, on the 21st of October! Don't miss out on the most spirited show of BITS' history! Shout-out to @spectal.management for making this happen! We thank @cisco and @realmeindia for their support!"
	,"For the first time in India, Oasis presents to you, the celebrated producer of electronic indie music- <b>Dan Deacon</b> coming all the way from USA! Known for his unique eccentricities like joining the dance floor himself, this Adult Swim artist has been touring the world over the last year. Catch him live this Oasis, as his fusion of indie and electronic music in a magical mix of old player piano and electronic avant-garde, brings forth the true flavour of Neon Noir!"
    ,"Amidst the roaring speakers, radiant lighting and songs straight from the Raja’s gems, Get ready for India’s undisputed King of Bass, who is on his way to Oasis 2019 to make some shorr and destroy BITS Pilani! BITS Pilani in collaboration with Spectal Management presents to you, the czar of Indian EDM Scene, the one and only <b>Nucleya</b>, all set to take over the night and trip you like no molly could ever! Shout out to all the Bhayank aatmas out there to assemble at SR Grounds on 22nd October 10:30 PM."
    ,"Adding to the grandeur, we bring to you the much-awaited Comedy Prof Show of Oasis 2019 - 'N2O NIGHT' - Featuring <b>Biswa Kalyan Rath</b> with quickest wits and dankest content on the stand-up scene. He is one of the few IITians that BITSians keep close to the heart. So gear up for this comic ride as we refuse to spare you even a moment of boredom on 23rd October 2019. Shout out to @spectal.management for their support!"
    ,"Bringing to you, this Oasis, a flavour of the classical arts: <b>Abhishek Raghuram</b>, accompanied by <b>Patri Satish Kumar</b> on the mridangam and <b>B.U. Ganesh Prasad</b> on the violin. Get ready for an ensemble of enchanting melodies and enthralling percussion, as these maestros of Carnatic music take the stage on 21st October."
  	]
}
var centerTop;
var othersTop;
var centerLeft;
var leftLeft;
var rightLeft;
var float1Left;
var float2Left;
var centerSize;
var othersSize;
var insideHeight1 = "150vw";
var insideWidth1 = "150vw";
var insideTop1 = -30;
var insideLeft1 = -25;
var insideHeight2 = "30vw";
var insideWidth2 = "30vw";
var insideTop2 = "20vh";
var insideLeft2 = 5;
var insideDetailsLeft = 40;
var insideDetailsTop = -100;
 
// Swipe Up / Down / Left / Right
var initialX = null;
var initialY = null;
 
function startTouch(e) {
  initialX = e.touches[0].clientX;
  initialY = e.touches[0].clientY;
};
 
function moveTouch(e) {
  if (initialX === null) {
    return;
  }
 
  if (initialY === null) {
    return;
  }
 
  var currentX = e.touches[0].clientX;
  var currentY = e.touches[0].clientY;
 
  var diffX = initialX - currentX;
  var diffY = initialY - currentY;
 
  if (Math.abs(diffX) > Math.abs(diffY)) {
    // sliding horizontally
    if (diffX > 0) {
      // swiped left
      triggerNext();
    } else {
      // swiped right
      triggerPrev();
    }  
  } 
  initialX = null;
  initialY = null;
   
  e.preventDefault();
  
};



//use of @media queries to chnage style with window width and make website responsive
var w=window.matchMedia("(max-width: 500px)")
responsiveChange(w);
w.addListener(responsiveChange);
function responsiveChange(w)
{
    if(w.matches & window.innerWidth<=500)
    {   
        centerTop = 20;
        othersTop = 33;
        centerLeft = 24;
        leftLeft = -25;
        rightLeft = 85;
        float1Left = -60;
        float2Left = 120;
        centerSize = 53;
        othersSize = 40;
        center.style.top=centerTop+"vh";
        center.style.left=centerLeft+"vw"
        center.style.width=centerSize+"vw";
        center.style.height=centerSize+"vw";
        right.style.top=othersTop+"vh";
        right.style.left=rightLeft+"vw"
        right.style.width=othersSize+"vw";
        right.style.height=othersSize+"vw";
        left.style.top=othersTop+"vh";
        left.style.left=leftLeft+"vw";
        left.style.width=othersSize+"vw";
        left.style.height=othersSize+"vw";
        float.style.top=othersTop+"vh";
        float.style.left=float2Left+"vw"
        float.style.width=othersSize+"vw";
        float.style.height=othersSize+"vw";
        center.removeEventListener("click", open);
        addDetails(currentEvent);
        document.getElementById("close").style.display="none";
        document.getElementById("next").className="fa fa-arrow-right navButton cursorChange";
        document.getElementById("previous").className="fa fa-arrow-left navButton cursorChange";
        center.className+=" noSelect";
    }
    else
    {
        centerTop = 12;
        othersTop = 37;
        centerLeft = 35;
        leftLeft = 1;
        rightLeft = 76;
        float1Left = -30;
        float2Left = 115;
        centerSize = 30;
        othersSize = 23;
        center.style.top=centerTop+"vh";
        center.style.left=centerLeft+"vw"
        center.style.width=centerSize+"vw";
        center.style.height=centerSize+"vw";
        right.style.top=othersTop+"vh";
        right.style.left=rightLeft+"vw"
        right.style.width=othersSize+"vw";
        right.style.height=othersSize+"vw";
        left.style.top=othersTop+"vh";
        left.style.left=leftLeft+"vw";
        left.style.width=othersSize+"vw";
        left.style.height=othersSize+"vw";
        float.style.top=othersTop+"vh";
        float.style.left=float2Left+"vw";
        float.style.width=othersSize+"vw";
        float.style.height=othersSize+"vw";
        document.getElementById("detailsBackground").style.display="none";
        document.getElementById("close").style.display="none";
        breifDescription();
        center.addEventListener("click",open);
        document.getElementById("next").className="fa fa-angle-right navButton cursorChange";
        document.getElementById("previous").className="fa fa-angle-left navButton cursorChange";
    }
}
script.addEventListener("load", function(){
    enable();
   
    
    setPointers();
    if(window.innerWidth>=500)
    {breifDescription();
    }
    window.addEventListener("keydown", enterCheck);
});

function keyMove(){
    if (window.event.key == "s" || window.event.key == "a" || window.event.key == "ArrowDown" || window.event.key == "ArrowLeft"){
       triggerPrev();
    } else if(window.event.key == " " || window.event.key == "w" || window.event.key == "d" || window.event.key == "ArrowUp" || window.event.key == "ArrowRight"){
        triggerNext();
    }
}
function resize(){
    if(window.innerWidth <= 500)
{
    document.getElementById("breifDescription").innerHTML="<center><h3 class=\"noSelect\"><br></h3></center>";
    if(typeof document.getElementsByTagName("h3") !== "undefined" && document.getElementsByTagName("h3") != null)
     setTimeout(function() {document.getElementsByTagName("h3")[0].style.opacity=1;}, 5);  

     document.getElementById("breifDescription").innerHTML+="<center><h4><br><br></center>";
     if(typeof document.getElementsByTagName("h4") !== "undefined" && document.getElementsByTagName("h4") != null)
     setTimeout(function() {document.getElementsByTagName("h4")[0].style.opacity=1;}, 5); 
    
}
else
{
    nextButton.addEventListener("click", triggerNext);
    prevButton.addEventListener("click", triggerPrev);
    center.addEventListener("click", open);
}
}
window.onresize = resize;


function setPointers(){
    center.style.cursor = "pointer";
    float.style.cursor = "";
    right.style.cursor = "";
    left.style.cursor = "";
}

function escapeCheck(){
    if (window.event.key == "Escape"){
        close();
    }
}

function enterCheck(){
    if (window.event.key == "Enter" && window.innerWidth >= 500){
                open();
    }
}

function mod(a, b){
    if (a < 0){
        a %= b;
        return (b + a);
    } else {
        return (a % b);
    }
}

function imageChange(change){

    var floatEvent = 0;

    if (change == 1){
        floatEvent = currentEvent + 2;
        floatEvent = mod(floatEvent, numEvents);
    } else {
        floatEvent = currentEvent - 2;
        floatEvent = mod(floatEvent, numEvents);
    }

    currentEvent += change;
    currentEvent = mod(currentEvent, numEvents);

    float.style.backgroundImage = "url(\"" + floatEvent.toString() + ".jpg\")";
}

function enable(){
    nextButton.addEventListener("click", triggerNext);
    prevButton.addEventListener("click", triggerPrev);
    document.addEventListener("wheel", scroll);
    window.addEventListener("keydown", keyMove);
    window.addEventListener("keydown", enterCheck);
    document.getElementsByClassName("container")[0].addEventListener("touchstart", startTouch, false);
	document.getElementsByClassName("container")[0].addEventListener("touchmove", moveTouch, false);
}

function disable(){
    nextButton.removeEventListener("click", triggerNext);
    prevButton.removeEventListener("click", triggerPrev);
    document.removeEventListener("wheel", scroll);
    window.removeEventListener("keydown", keyMove);
    window.removeEventListener("keydown", enterCheck);
    document.getElementsByClassName("container")[0].removeEventListener("touchstart", startTouch, false);
	document.getElementsByClassName("container")[0].removeEventListener("touchmove", moveTouch, false);
}

function scroll(){
    if(window.innerWidth>=500)
    {
        if(window.event.deltaY > 0){
            triggerNext();
        } else {
            triggerPrev();
        }
    }
    
}

// For reassignment of the variables
function assign(){
    left = document.getElementById("left");
    right = document.getElementById("right");
    center = document.getElementById("center");
    float = document.getElementById("float");
}

function triggerNext(){
    disable();
    next_reposition();
    removeBreifDescription();
    setTimeout(next, 40);
}

function triggerPrev(){
    disable();
    previous_reposition();
    removeBreifDescription();
    setTimeout(previous, 40);
}

function next()
{
    assign();
    center.removeEventListener("click", open);
    window.removeEventListener("keydown", enterCheck);

    imageChange(1);
    float.style.visibility = "visible";
    //moving left to left side out of window
    left.style.left=float1Left+"vw";
    left.style.top=othersTop+"vh";
    left.style.transition="1s";
    left.style.zIndex = 0;

    //moving right to center of window and increasing its size(center position)
    right.style.position="absolute";
    right.style.transition="1s";
    right.style.left=centerLeft+"vw";
    right.style.top=centerTop+"vh";
    right.style.height=centerSize+"vw";
    right.style.width=centerSize+"vw";
    right.style.zIndex = 10;
    //moving center to left edge of window and decreasing its size(left position)
    center.style.position="absolute";
    center.style.transition="1s";
    center.style.left=leftLeft+"vw";
    center.style.top=othersTop+"vh";
    center.style.height=othersSize+"vw";
    center.style.width=othersSize+"vw";
    center.style.zIndex = 0;
    //moving float from outside to inside right edge of window from right(right position)
    float.style.transitionDuration="1s";float.style.transitionProperty="top, left, width, height";        //to set the transition time back to 1s after changing above
    float.style.position="absolute";
    float.style.left=rightLeft+"vw";
    float.style.top=othersTop+"vh";
    float.style.zIndex = 0;

    //changing ids of div with respect to their position
    left.id="float";
    right.id="center";
    center.id="left";
    float.id="right";

    assign();
    if(window.innerWidth>=500)
    {
    breifDescription();
    center.addEventListener("click", open);
   }
   else{
    addDetails(currentEvent);
   }
    
    setPointers();
    window.addEventListener("keydown", enterCheck);
    

    setTimeout(enable, 400);
}

function next_reposition()
{
    //moving back left to float position at right outside window(float position)
    assign();
    document.getElementById("float").style.visibility = "hidden";
    document.getElementById("float").style.transition="0s";
    document.getElementById("float").style.position="absolute";
    document.getElementById("float").style.left=float2Left+"vw";
    document.getElementById("float").style.top=othersTop+"vh";
}
function previous()
{   assign();
    center.removeEventListener("click", open);
    window.removeEventListener("keydown", enterCheck);
    
    imageChange(-1);
    //moving right to right side out of window
    right.style.position="absolute";
    right.style.transition="1s";
    right.style.left=float2Left+"vw";
    right.style.top=othersTop+"vh";
    right.style.zIndex = 0;
    //moving left to center of window and increasing its size(center position)
    left.style.position="absolute";
    left.style.transition="1s";
    left.style.left=centerLeft+"vw";
    left.style.top=centerTop+"vh";
    left.style.height=centerSize+"vw";
    left.style.width=centerSize+"vw";
    left.style.zIndex = 10;
    //moving center to right edge of window and decreasing its size(right position)
    center.style.position="absolute";
    center.style.transition="1s";
    center.style.left=rightLeft+"vw";
    center.style.top=othersTop+"vh";
    center.style.height=othersSize+"vw";
    center.style.width=othersSize+"vw";
    center.style.zIndex = 0;
    //moving float from outside to inside left edge of window from left(left position)
    float.style.transitionDuration="1s";
    float.style.transitionProperty="top, left, width, height";        //to set the transition time back to 1s after changing above
    float.style.position="absolute";
    float.style.left=leftLeft+"vw";
    float.style.top=othersTop+"vh";
    float.style.zIndex = 0;

    //changing ids of div with respect to their position

    left.id="center";
    right.id="float";
    center.id="right";
    float.id="left";

    assign();
    if(window.innerWidth>=500)
    {
    breifDescription();
    center.addEventListener("click", open);
    }
    else{
    addDetails(currentEvent);
    }
    setPointers();
    window.addEventListener("keydown", enterCheck);
    

    setTimeout(enable, 400);
}
function previous_reposition()
{
    //moving back right to float position at left outside window(float position)
    assign();
    float.style.transition="0s";
    float.style.position="absolute";
    float.style.left=float1Left+"vw";
    float.style.top=othersTop+"vh";
}
function addDetails(x)
{
    
    document.getElementById("detailsBackground").style.display="block";
    setTimeout(function(){
    document.getElementById("detailsBackground").style.opacity=1;
    },5);  
    textDetails.innerHTML="<div id='description'><div>"+profShows.name_Of_Event[x]+"</div><div>"+ profShows.details.name_Of_Artist[x]+"<br>"+ 
    profShows.details.date[x]+", "+profShows.details.venue[x]+", "+profShows.details.time[x]+"</div><div>"+profShows.description[x]+"</div></div>";
    setTimeout(function(){document.getElementById("description").style.opacity=1;},5);   

}

//opening a particular profshow on click
var c=0; //counter to prevent the function from running again and again if after opening a profshow user is clicking on i
function open(){   
    disable();
    center.style.cursor = "";
    center.removeEventListener("click", open);
    window.removeEventListener("keydown", enterCheck);
    c++;
    if(c==1)
    {   

    if(window.innerWidth>=500)
    {
        if(typeof document.getElementsByTagName("h3") !== "undefined" && document.getElementsByTagName("h3") != null)
        document.getElementsByTagName("h3")[0].style.display="none";
        if(typeof document.getElementsByTagName("h4") !== "undefined" && document.getElementsByTagName("h3") != null)
        document.getElementsByTagName("h4")[0].style.display="none";
	}
        center.style.transition="0.5s";
        center.style.zIndex = 10;
        document.getElementById("detailsBackground").style.display="block";
        setTimeout(function()
            {
                document.getElementById("detailsBackground").style.opacity=1;
            },6);
        var t=setTimeout(function()
        {     
            center.style.transition="0.5s";
            center.style.borderRadius="50%";
            center.style.width=insideWidth2;
            center.style.height=insideHeight2;
            center.style.position="absolute";
            center.style.top=insideTop2;
            center.style.left=insideLeft2+"vw";
        },0);
        var t=setTimeout(function()
        {     
            addDetails(currentEvent);
            // if(typeof document.getElementsByTagName("h4") !== "undefined" && document.getElementsByTagName("h4") != null)
            // setTimeout(function() {document.getElementsByTagName("h4")[0].style.opacity=
            document.getElementById("close").style.display="inline";
            closeButton.addEventListener("click", close);
            window.addEventListener("keydown", escapeCheck);
        },500);
        x=0;
    }
}

//to close the open profshow div
function close()
{   
    c--;
    center.style.transition="0.5s";
    document.getElementById("description").style.opacity=0;
    center.style.transition="0.5s";
    center.style.borderRadius="50%";
    center.style.width=centerSize+"vw";
    center.style.height=centerSize+"vw";
    center.style.position="absolute";
    center.style.top=centerTop+"vh";
    center.style.left=centerLeft+"vw";
    var t=setTimeout(function()
    {

        document.getElementById("detailsBackground").style.opacity=0;
        setTimeout(function(){document.getElementById("detailsBackground").style.display="none";},5);
        // details.style.display="none";
        // details.style.transition="0.5s";
        // description.style.display="none";
        // description.style.transition="0.5s";

        document.getElementsByTagName("h3")[0].style.display="inline";
        document.getElementsByTagName("h4")[0].style.display="inline";
        document.getElementById("close").style.display="none";
        enable();
        breifDescription();
        closeButton.removeEventListener("click", close);
        center.addEventListener("click", open);
        window.addEventListener("keydown", enterCheck);
        window.removeEventListener("keydown", escapeCheck);
        setPointers();
    },500);
}


//to open contact details
function openContactDetails()
{
    disable();
    var details=document.getElementById("contactDetails");
    var close=document.getElementById("closeContactDetails");
    details.style.display="block";
    close.style.display="block";
    var x=setTimeout(function() {
        var details=document.getElementById("contactDetails");
        details.style.opacity=1;
        var close=document.getElementById("closeContactDetails");
        close.style.opacity=1;
    }, 5);
    window.removeEventListener("keydown", escapeCheck);
}
//to close contact details
function closeContactDetails()
{
    if(document.getElementById("detailsBackground").style.display==="none")
    enable();
    var details=document.getElementById("contactDetails");
    var close=document.getElementById("closeContactDetails");
    details.style.opacity=0;
    close.style.opacity=0;
    var x=setTimeout(function() {
        var details=document.getElementById("contactDetails");
        var close=document.getElementById("closeContactDetails");
        details.style.display="none";
        close.style.display="none";
    }, 500);
    if(window.innerWidth>=500)
    {
    	if(document.getElementById("detailsBackground").style.display==="none")
    		enable();
    }
    else
    	enable();

    window.addEventListener("keydown", escapeCheck);
}

//to show the name of profshow and its breif description
function breifDescription()
{  
    document.getElementById("breifDescription").innerHTML="<center><h3 class=\"noSelect\"><br>"+profShows.name_Of_Event[currentEvent]+"</h3></center>";
    if(typeof document.getElementsByTagName("h3") !== "undefined" && document.getElementsByTagName("h3") != null)
     setTimeout(function() {document.getElementsByTagName("h3")[0].style.opacity=1;}, 5);  

     document.getElementById("breifDescription").innerHTML+="<center><h4>"+"<br>"+ profShows.details.name_Of_Artist[currentEvent]+"<br>"+ profShows.details.date[currentEvent]+", "+" "+profShows.details.venue[currentEvent]+", "+" "+profShows.details.time[currentEvent]+"</h4></center>";
     if(typeof document.getElementsByTagName("h4") !== "undefined" && document.getElementsByTagName("h4") != null)
     setTimeout(function() {document.getElementsByTagName("h4")[0].style.opacity=1;}, 5); 
}


function removeBreifDescription()
{
    left.innerHTML="";
    right.innerHTML="";
    float.innerHTML="";
    center.innerHTML="";
}


