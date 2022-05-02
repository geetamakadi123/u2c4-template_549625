// write js code here corresponding to matches.html
var addArr = JSON.parse(localStorage.getItem("schedule"));



var favouritesArr=JSON.parse(localStorage.getItem("favourites"))||[];

displayData(home);


function displayData(data){

  data.forEach(function (elem){

  var tr=document.createElement("tr");

    var td1=document.createElement("td");

      td1.innerText=elem.personno;

    var td2=document.createElement("td");

    td2.innerText=elem.personteama;
    
    var td3=document.createElement("td");

    td3.innerText=elem.personteamb;

    var td4=document.createElement("td")
    
    td5.innerText=elem.persondate
    var td5=document.createElement("td");

    td3.innerText=elem.personvenue;

    var td6=document.createElement("td")
    
    td6.innerText="favourites"

    

    tr.append(td1,td2,td3,td4,td5,td6);

    document.querySelector("tbody").append(tr);
    
  });

}
function favourites(elem){
  
   
    favouritesArr.push(elem)
  
  localStorage.setItem("favourites",JSON.stringify(favouritesArr))
    
  }