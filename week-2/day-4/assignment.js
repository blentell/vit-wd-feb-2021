var counter = 0
function leftImage() {
   
    if (counter > 0) {
        counter--;
        document.getElementById("imgSlider").style.transform = 'translateX(-'+600*counter+'px)';
    console.log(counter);
    }
}
    
  
function rightImage() {
    
    if (counter < 7) {
        counter++;
        document.getElementById("imgSlider").style.transform = 'translateX(-'+600*counter+'px)';
    console.log(counter);
    }
}