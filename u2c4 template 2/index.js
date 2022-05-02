// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("masaiForm").addEventListener("submit",dataSubmit)
var home=JSON.parse(localStorage.getItem("schedule"))||[];
console.log(home)
function dataSubmit(event){
    event.preventDefault();


    
   var matchData={
       personno:masaiForm.MatchNumber.value,
       personteama:masaiForm.TeamA.value,
       personteamb:masaiForm.TeamB.value,
       persondate:masaiForm.Date.value,
       personvenue:masaiForm.Venue.value,
   }
   home.push(matchData);

   localStorage.setItem("schedule",JSOn.stringify(home));
   window.location.href="matches.html";
}
