let allGames = document.getElementsByClassName("game");
let openworldFilter = document.getElementById("checkbox-soulslike");
let rpgFilter = document.getElementById("checkbox-rpg");
let actionFilter = document.getElementById("checkbox-action")
let filters = document.getElementsByClassName("filter");

window.scrollTo(0,0);
setInterval(function(){
  document.getElementsByTagName("body")[0].style.overflow = "auto";
}, 1500);

for(let i = 0; i < filters.length; i++){
  filters[i].checked = true;
}

openworldFilter.onchange = function(){
  if(openworldFilter.checked === true){
    for (let i = 0; i < allGames.length; i++) {
      if(allGames[i].dataset.category === "soulslike"){
        console.log("hello")
        allGames[i].style.display = "block";
      }
    }
  }
  else{
    for (let i = 0; i < allGames.length; i++) {
      if(allGames[i].dataset.category === "soulslike"){
        allGames[i].style.display = "none";
      }
    }
  }
}

rpgFilter.onchange = function(){
  if(rpgFilter.checked === true){
    for (let i = 0; i < allGames.length; i++) {
      if(allGames[i].dataset.category === "rpg"){
        allGames[i].style.display = "block";
      }
    }
  }
  else{
    for (let i = 0; i < allGames.length; i++) {
      if(allGames[i].dataset.category === "rpg"){
        allGames[i].style.display = "none";
      }
    }
  }
}

actionFilter.onchange = function(){
  if(actionFilter.checked === true){
    for (let i = 0; i < allGames.length; i++) {
      if(allGames[i].dataset.category === "action"){
        allGames[i].style.display = "block";
      }
    }
  }
  else{
    for (let i = 0; i < allGames.length; i++) {
      if(allGames[i].dataset.category === "action"){
        allGames[i].style.display = "none";
      }
    }
  }
}