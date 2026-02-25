import './WeerPagina.css'
import { Header } from '../components/Header'
import React, { useState } from "react";

const WeatherApp = () => {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const API_KEY = "91c29ba65d92e497bc7331dc348865fe";

    const fetchWeather = async () => {
        if (!city) return;

        setLoading(true);
        setError("");
        setWeather(null);

        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
            );

            if (!response.ok) {
                throw new Error("Stad niet gevonden");
            }

            const data = await response.json();
            setWeather(data);
        } catch (err) {
            setError(err.message);
        }

        setLoading(false);
    };

    return (
        <>
            <Header />
            <div className="weather-container">
                <h1 className='weer-titel'>Weer App 🌤️</h1>

                <div className="search-box">
                    <input
                        type="text"
                        placeholder="Voer een stad in..."
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                    <button onClick={fetchWeather}>Zoek</button>
                </div>

                {loading && <p>Loading...</p>}
                {error && <p className="error">{error}</p>}

                {weather && (
                    <div className="weather-card">
                        <h2>{weather.name}</h2>
                        <p>{weather.weather[0].description}</p>
                        <h3>{Math.round(weather.main.temp)}°C</h3>
                        <img
                            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                            alt="weer icoon"
                        />
                    </div>
                )}
            </div>
        </>
    );

};


export default WeatherApp;
