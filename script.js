const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'Your Key',    // Write your key hear
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};



const getweather = (city) => {
	cityname.innerHTML = city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	.then(response => response.json())
	.then(response => {
		console.log(response)
		
		temp.innerHTML = response.temp
		min_temp.innerHTML = response.min_temp
		max_temp.innerHTML = response.max_temp
		
		cloud_pct.innerHTML = response.cloud_pct
		feels_like.innerHTML = response.feels_like
		humidity.innerHTML = response.humidity

		wind_speed.innerHTML = response.wind_speed
		//wind_degrees.innerHTML = response.wind_degrees
		sunrise.innerHTML = response.sunrise
		sunset.innerHTML = response.sunset

	})
	.catch(err => console.error(err));
}
getweather("delhi")
submit.addEventListener("click",(e)=>{
	e.preventDefault()
	getweather(city.value)
} )
