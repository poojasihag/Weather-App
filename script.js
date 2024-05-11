const apiKey="536043a84ca058d2cf27ade70df24ad8";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=hisar";
async function checkweather(){
    const response = await fetch(apiUrl +`&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);
}
checkweather();