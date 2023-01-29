const API_KEY ="ddcda79f0a73879662d3a507d855e22a"

function onGeoOk(position)
{
  const lat=position.coords.latitude;
  const lng=position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
  fetch(url)
  .then((response) => response.json())
    .then((data) => {
    const weather = document.querySelector("#weather span:first-child");
    const city = document.querySelector("#weather span:last-child");
    city.innerText= data.name;
    weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
  });
}

function onGeoError()
{
  alert("위치를 불러오는데 실패하였습니다.");
}
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);