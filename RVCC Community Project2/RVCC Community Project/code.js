function main(){

onEvent("searchBtn", "click", function( ) {
  if (getText("searchBox") == "W212"){
  hideElement("rvMap");
  showElement("westBldg");
  showElement("pin");
  setText("searchBox", "");
  } 
  else if (getText("searchBox") == "S128"){
    showElement("dirTxt");
    showElement("rgtArrow");
    showElement("gpsImg");
  }
  else {
    hideAll();
    showElement("noSim");
  }
});

onEvent("mapBtn", "click", function(){
  grayBtns();
  setProperty("mapBtn", "background-color", "#1D840E");
  hideAll();
  showElement("rvMap");
  showElement("searchBtn");
  showElement("searchBox");
});

onEvent("gpsBtn", "click", function(){
  grayBtns();
  setProperty("gpsBtn", "background-color", "#1D840E");
  hideAll();
  showElement("gpsImg");
  showElement("rgtArrow");
  showElement("searchBox");
  showElement("searchBtn");
  showElement("dirTxt");
});

onEvent("radioBtn", "click", function(){
  grayBtns();
  setProperty("radioBtn", "background-color", "#1D840E");
  hideAll();
  showElement("pause");
  showElement("play");
  showElement("volImg");
  showElement("wavImg");
  showElement("radioTxt");
});

onEvent("helpBtn", "click", function(){
  grayBtns();
  setProperty("helpBtn", "background-color", "#1D840E");
  hideAll();
  showElement("helpLabel");
  showElement("helpTxt");
  showElement("helpSearch");
  showElement("searchBtn");
});

} //end main

//hide all screen-specific elements
function hideAll(){
  hideElement("rvMap");
  hideElement("westBldg");
  hideElement("pin");
  hideElement("searchBox");
  hideElement("searchBtn");
  hideElement("noSim");
  hideElement("dirTxt");
  hideElement("rgtArrow");
  hideElement("gpsImg");
  hideElement("helpLabel");
  hideElement("helpTxt");
  hideElement("helpSearch");
  hideElement("pause");
  hideElement("play");
  hideElement("volImg");
  hideElement("wavImg");
  hideElement("welcomeLabel");
  hideElement("radioTxt");
}

//turn all nav buttons gray
function grayBtns(){
  setProperty("mapBtn", "background-color", "#A3A6A3");
  setProperty("gpsBtn", "background-color", "#A3A6A3");
  setProperty("radioBtn", "background-color", "#A3A6A3");
  setProperty("helpBtn", "background-color", "#A3A6A3");
}

main();