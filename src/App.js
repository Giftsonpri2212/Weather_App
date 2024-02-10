import axios from "axios"
import { useState } from "react"
import backgroundImage from './backgroundimg.jpg';

export default App



function App() {

const [deg,setdeg] = useState("0°")
const [city,setcity] = useState("Unknown")
const [des,setdes] = useState("unknown")
const [enterval,setenterval] = useState("")

    function getData()
    {
        var weather = axios(`https://api.openweathermap.org/data/2.5/weather?q=${enterval}&appid=e2fc4231fcc07ac6c04c21d150303257`)

        weather.then(function(dalta)
        {
            const incel = (dalta.data.main.temp-273.15)

            setdeg(incel.toFixed(1)+'°C')
            setcity(dalta.data.name)
            setdes(dalta.data.weather[0].main)
            
        })
    }

    function handleInput(event)
    {
        console.log(event.target.value)
        setenterval(event.target.value);
        
    }

    return (
        <div className="flex flex-row justify-center h-[100vh] items-center " style={{backgroundImage: `url(${backgroundImage})`, backgroundRepeat: 'no-repeat', backgroundSize:'cover'}} >
            <div style={{ backgroundImage: "linear-gradient(to top, #a8edea 0%, #fed6e3 100%)" }} className="p-2 rounded-md shadow">
                <h1 className="font-medium">Hey! ⛅</h1>
                <p className="text-xs">Do you want to know the current weather report 😎</p>
                <input onChange={handleInput} type="text" className="rounded-md h-6 text-sm mt-2 p-2 outline-none" placeholder="City Name?"></input>
                <br />
                <button onClick={getData} className="bg-black text-white rounded-lg mt-1 text-xs p-1 h-6">Get Report⚡</button>

                <p className="text-xs font-medium">Degree: {deg} | City: {city} | Weather: {des}</p>
            </div>
        </div>
    )
}

