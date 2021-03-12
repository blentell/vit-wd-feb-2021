function onTabClick(event) {
  let activeTabs = document.querySelectorAll(".active");

  // deactivate existing active tab and panel
  activeTabs.forEach(function (tab) {
    tab.className = tab.className.replace("active", "");
  });

  // activate new tab and panel
  event.target.parentElement.className += " active";
  document.getElementById(event.target.href.split("#")[1]).className +=
    " active";
}

const element = document.getElementById("nav-tab");

element.addEventListener("click", onTabClick, false);

function calculateTip() {
  var billAmountValue = document.getElementById("billAmount").Value;
  var tipAmount = billAmountValue * 0.15;
  var outputElement = document.getElementById("output");
  outputElement.innerText = tipAmount;
}

function calculateSplitTip() {
  var allBillAmounts = document.getElementsByClassName("eachAmount");
  for (var counter = 0; counter < allBillAmounts.length; counter++) {
    var individualVal = allBillAmounts[counter].value;
var individualTipAmount = individualVal * .15;
var newlyCreatedOutput = document.createElement('h1');
newlyCreatedOutput.innerText = individualTipAmount;
document.getElementsByClassName("each")
[counter].appendChild(newlyCreatedOutput);
  }
}
