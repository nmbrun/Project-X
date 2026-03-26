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
});

onEvent("radioBtn", "click", function(){
  grayBtns();
  setProperty("radioBtn", "background-color", "#1D840E");
  hideAll();
});

onEvent("helpBtn", "click", function(){
  grayBtns();
  setProperty("helpBtn", "background-color", "#1D840E");
  hideAll();
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
}

//turn all nav buttons gray
function grayBtns(){
  setProperty("mapBtn", "background-color", "#A3A6A3");
  setProperty("gpsBtn", "background-color", "#A3A6A3");
  setProperty("radioBtn", "background-color", "#A3A6A3");
  setProperty("helpBtn", "background-color", "#A3A6A3");
}

main();