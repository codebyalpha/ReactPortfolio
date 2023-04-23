import React, { useEffect, useState } from "react";
import "./Weather.css";
import { Col, Container, Row } from "react-bootstrap";
import { Icon } from "@iconify/react";
import { transform } from "typescript";

function Weather() {
  const [inputVal, setinputVal] = useState("");
  const [cities, setCities] = useState([]);
  const [data, setData] = useState([]);
  const [finalData, setFinalData] = useState([]);
  const [displayLi, setDisplayLi] = useState(false);
  const [visible, setvisible] = useState(true);

  useEffect(() => {
    // search cities
    fetch(`https://countriesnow.space/api/v0.1/countries/population/cities`)
      .then((res) => res.json())
      .then((json) => {
        const cityArr: any = [];
        json.data.map((item: any) => {
          cityArr.push({ city: item.city, country: item.country });
        });
        setCities(cityArr);
      });

    // auto fetch location when someone come and set weather
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(successFunction);
    } else {
      alert(
        "It seems like Geolocation, which is required for this page, is not enabled in your browser. Please use a browser which supports it."
      );
    }
    async function successFunction(position: any) {
      let lat = position.coords.latitude;
      let long = position.coords.longitude;
      let apikey = "a96d8e353b2b1a81a3bb7b1f8ba875de";

      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apikey}`
      )
        .then((res) => res.json())
        .then((json) => {
          console.log(json);
        });
    }
  }, []);

  const searchByCity = async (val: any) => {
    setDisplayLi(true);
    setinputVal(val);
    let data = cities.filter((item: any) => {
      if (item.city.toLowerCase().startsWith(inputVal)) return item.city;
    });
    setData(data);
  };

  const setByLiTag = (val: any) => {
    setinputVal(val);
    setDisplayLi(false);
    searchWeather(val);
  };

  const searchWeather = async (val: string) => {
    setvisible(false);
    let apikey = "a96d8e353b2b1a81a3bb7b1f8ba875de";
    let arr: any = [];
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${val}&appid=${apikey}`
    );
    const jsonData = await response.json();
    arr.push(jsonData);
    setFinalData(arr);
    setvisible(true);
  };
  return (
    <>
      <Container className="wcontainer">
        <Row className="weather">
          <h1>Weather</h1>
          <Row className="wsearch">
            <Col>
              <input
                type="text"
                value={inputVal}
                placeholder="Search City..."
                onChange={(e) => searchByCity(e.target.value)}
              />

              <ul
                className="managecities"
                style={displayLi ? { display: "block" } : { display: "none" }}
              >
                {data.map((item: any) => {
                  return (
                    <li key={item.city} onClick={() => setByLiTag(item.city)}>
                      {item.city}
                    </li>
                  );
                })}
              </ul>
              {/* <button onClick={() => searchWeather(inputVal)}>Search</button> */}
            </Col>
          </Row>
        </Row>

        <Col className="wintro">
          {finalData.map((item: any) => {
            let icon = item.weather[0].icon;
            var iconurl = "http://openweathermap.org/img/w/" + icon + ".png";
            return visible ? (
              <Container>
                <div className="wintrosimple">
                  <Row>
                    <Col>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <h2 style={{ alignSelf: "start" }}>Now</h2>
                        <h1 style={{ alignSelf: "start" }}>
                          {Math.floor(item.main.temp - 273.15)} ℃
                        </h1>
                        <h3 style={{ alignSelf: "start" }}>
                          {item.weather[0].description}
                        </h3>
                        <br />
                        <h3 style={{ alignSelf: "start" }}>
                          Feels like:{" "}
                          {Math.floor(item.main.feels_like - 273.15)} ℃
                        </h3>
                        <h3 style={{ alignSelf: "start" }}>
                          Forecast: {Math.floor(item.main.temp_min - 273.15)}℃ /{" "}
                          {Math.floor(item.main.temp_max - 268.15)}℃
                        </h3>
                        <h3 style={{ alignSelf: "start" }}>
                          Wind: {item.wind.speed} km/hr{" "}
                        </h3>
                      </div>
                    </Col>
                    <Col
                      style={{
                        fontSize: "70px",
                        display: "flex",
                        justifyContent: "flex-end",
                      }}
                    >
                      <img src={iconurl} alt="" width={"100px"} />
                    </Col>
                  </Row>
                </div>
                <div key={item.id}>
                  <div>
                    <h4>Current Weather </h4>
                    <h4>{new Date().toLocaleTimeString()}</h4>
                    {/* <img
                      src={iconurl}
                      alt=""
                      width={"20%"}
                      style={{ marginLeft: "0", display: "block" }}
                    /> */}
                  </div>
                  <div>
                    <h4>Location</h4>
                    <h4>{item.name}</h4>
                  </div>
                  <div>
                    <h4>Humidity</h4>
                    <h4>{item.main.humidity}%</h4>
                  </div>
                  <div>
                    <h4>Visibility</h4>
                    <h4>{item.visibility / 1000} Km</h4>
                  </div>
                  <div>
                    <h4>Pressure</h4>
                    <h4>{item.main.pressure} mbar</h4>
                  </div>
                  <div>
                    <h4>Wind Direction</h4>
                    <h4>
                      <Icon
                        icon="mdi:arrow-up-thin"
                        fontSize={"40px"}
                        style={{
                          transform: `rotate(${item.wind.deg}deg)`,
                          justifySelf: "center",
                        }}
                      />
                      {item.wind.deg > 11.25 && item.wind.deg < 33.75
                        ? "NNE"
                        : item.wind.deg > 33.75 && item.wind.deg < 56.25
                        ? "NE"
                        : item.wind.deg > 56.25 && item.wind.deg < 78.75
                        ? "ENE"
                        : item.wind.deg > 78.75 && item.wind.deg < 101.25
                        ? "E"
                        : item.wind.deg > 101.25 && item.wind.deg < 123.75
                        ? "ESE"
                        : item.wind.deg > 123.75 && item.wind.deg < 146.25
                        ? "SSE"
                        : item.wind.deg > 146.25 && item.wind.deg < 168.75
                        ? "S"
                        : item.wind.deg > 168.75 && item.wind.deg < 191.25
                        ? "SSW"
                        : item.wind.deg > 191.25 && item.wind.deg < 213.75
                        ? "SW"
                        : item.wind.deg > 213.75 && item.wind.deg < 236.25
                        ? "WSW"
                        : item.wind.deg > 236.25 && item.wind.deg < 258.75
                        ? "W"
                        : item.wind.deg > 258.75 && item.wind.deg < 281.25
                        ? "WNW"
                        : item.wind.deg > 281.25 && item.wind.deg < 326.25
                        ? "NW"
                        : item.wind.deg > 326.25 && item.wind.deg < 348.75
                        ? "NNW"
                        : item.wind.deg > 348.75 || item.wind.deg < 11.75
                        ? "N"
                        : ""}
                    </h4>
                  </div>
                </div>
              </Container>
            ) : (
              <div
                style={{
                  height: "40vh",
                  display: "grid",
                  placeItems: "center",
                }}
              >
                <Icon
                  icon="eos-icons:bubble-loading"
                  fontSize={"50px"}
                  color="skyblue"
                />
              </div>
            );
          })}
        </Col>
      </Container>
    </>
  );
}

export default Weather;
