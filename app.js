function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function getInfo() {
  fetch( "https://api.openweathermap.org/data/2.5/forecast?q=Bailey&appid=c8b260397fd294145748ea4206128b3f")
  .then(response => response.json())
  .then(data => {
    for(i=0; i<1; i++){
      document.getElementById('minToday').innerHTML+=Number((data.list[i].main.temp - 273.15)+33.8).toFixed(5)+"°C";
    }
    for(i=0; i<1; i++){
      document.getElementById('maxToday').innerHTML+=Number((data.list[i].main.temp_max - 273.15)+33.8).toFixed(5)+"°C";
    }
    
    for(i=0; i<1; i++){
      let icon= data.list[i].weather[i].icon;
      document.getElementById("icon").src ="https://openweathermap.org/img/wn/"+ icon + "@2x.png";
    }
    console.log(data);
  })
  .catch(err => alert("something went wrong: Please check your internet connection"))

}
function displayDate() {
  const todayDate = document.getElementById('dateToday');

  const date = new Date();

  let currentDay= String(date.getDate()).padStart(2, '0');

  let currentMonth = String(date.getMonth()+1).padStart(2,"0");

  let currentYear = date.getFullYear();

  //display the date as DD-MM-YYYY 
  let currentDate = currentMonth + '-' + currentDay + '-' + currentYear;

  todayDate.textContent = currentDate;

  const min = document.getElementById('minToday')
  min.textContent +=  Math.round(data.list.main.temp_min - 273.15, -2);
}