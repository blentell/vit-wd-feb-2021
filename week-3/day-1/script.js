function closeSplash() {
  document.querySelector("button").style.visibility = "hidden";
  document.querySelector("#splashPage").style.visibility = "hidden";
  document.querySelector("#tableOfContent").style.visibility = "visible";
}


var newArray = ['Heaven', 265];
var allAboutMe = {
  FirstName: 'Brion',
  LastName: 'Lentell',
  favoriteColor: 'Black'
}
allAboutMe.favoriteColor = 'Blue'
console.log(newArray[1]+allAboutMe.favoriteColor)