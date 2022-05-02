// write js code here corresponding to favourites.html
var favouritesArr=JSON.parse(localStorage.getItem("favourites"));

 displaydata(favouritesArr)

 function displaydata(data)
   {
     data.forEach(function (elem,index){

        var tr=document.createElement("tr");

        var td1=document.createElement("td");

          td1.innerText=elem.personno;
          var td2=document.createElement("td");

          td2.innerText=elem.personteama;
  
          var td3=document.createElement("td");
  
          td3.innerText=elem.personteamb;
  
          var td4=document.createElement("td");
  
          td4.innerText=elem.persondate;
  
  
          var td5=document.createElement("td");
  
          td5.innerText=elem.personvenue;
  
          var td6=document.createElement("td");
          td6.innerText="Delete";

         
  
     tr.append(td1,td2,td3,td4,td5,td6)
  
   document.querySelector("tbody").append(tr)
       });
    }
    
  
      localStorage.setItem("favourites",JSON.stringify(favouritesArr))
  
      window.location.reload();
    