var secondCard=document.getElementById("secondCard");
var thirdCard=document.getElementById("secondCard");


function myFunction(x) {
    if (x.matches) { // If media query matches
      secondCard.style.display = "none";
    
      thirdCard.style.display = "block";
    
  }
  
  var x = window.matchMedia("(max-width: 900px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes
  