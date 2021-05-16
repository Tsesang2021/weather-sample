function formateDate (date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let dayTime = date.getDay();
  let days = [ "Sun",
      "Mon",
      "Tue",
      "Wed",
      "Thur",
      "Fri",
      "Sat" ];

  let day = days[ dayTime ];
  return `${ day } ${ hours }:${ minutes }`;
}

function search ( event )
{
event.preventDefault();
let city= document.querySelector( "#city" );
let cityInput = document.querySelector( "#city-input" );
city.innerHTML = cityInput.value;
}

