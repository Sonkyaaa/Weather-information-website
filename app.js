const weather = {
    apiKey: "c64b3c94ec6692eaf45af1a81e410439",
    fetchWeather: function (city) {
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}&units=metric`
        )
         .then((response) => response.json())  
         .then((data) => this.displayWeather(data) )
    },
    displayWeather : function(data){
            const  {name}= data;
            const {icon , description}= data.weather[0];
            const {temp, humidity}= data.main;
            const {speed} = data.wind;
            console.log(name,icon,description,temp,humidity,speed);
            document.querySelector(".city").innerText = `weather in ${name}`;
            document.querySelector(".temperature").innerText = temp+"°C";
            document.querySelector(".icon").src=`http://openweathermap.org/img/wn/${icon}@2x.png`;
            document.querySelector(".description").innerText = description;
            document.querySelector(".humidity").innerText =`humidity: ${humidity}%`;
            document.querySelector(".wind").innerText ="wind speed :"+speed+"km/h";
            document.querySelector(".weather").classList.remove("loading");
            document.body.style.backgroundImage="url('https://source.unsplash.com/1600x900/?" +name+ "')"
            

            


    },
    search : function (){
        this.fetchWeather(document.querySelector(".search-bar").value)
    }


};
document.querySelector(".search button").addEventListener("click",()=>{
 weather.search();
});
document.querySelector(".search-bar").addEventListener("keyup",(event)=>{
if(event.key=="Enter"){
    weather.search();
}
})


