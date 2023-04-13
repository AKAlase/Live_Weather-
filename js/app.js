let input = document.getElementById("input");
console.log(input);

input.addEventListener("keyup", e => {
  let a = e.key;
  if (a === "Enter") {
    let key1 = input.value;
    getwether(key1);
  }
});

async function getwether(NameOfCity) {
  let data = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${NameOfCity}&APPID=1b14b8427a57a566db2936d294b180f9`
  );
  let citydata = await data.json();
  console.log(citydata);
  let rightcontent = document.getElementById("info");
  rightcontent.innerHTML = `<section><div class="wether-info"><h1>Country : ${
    citydata.sys.country
  }</h1>
  <h1>Name of city : ${citydata.name}</h1>
  <h1>Temprature : ${Math.round(
    citydata.main.temp - 273.15
  )} &#xb0;</h1><h1>Humidity : ${
    citydata.main.humidity
  }</h1></div><figure class="icon"><img src="http://openweathermap.org/img/wn/10d@2x.png" alt="" /></figure></section>`;
}
//http://openweathermap.org/img/wn/10d@2x.png
