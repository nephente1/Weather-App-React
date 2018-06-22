import React from 'react';

import styled from 'styled-components';

const Bodybg = styled.div`
background:url('https://stmed.net/sites/default/files/river-wallpapers-28027-7511542.jpg');
background-size:cover; 
display:flex; 
justify-content: center;
align-items:center; 
height:100vh;
`

const Maindiv = styled.div`
  text-align: center;
  width:480px;
  height: auto;
  background: rgba(255,255,255,0.8);
  border-radius: 3%;
  padding: 20px 10px;
  box-shadow: 0px 0px 25px 0px rgb(90, 90, 90s);
`

const api_key = '9b3e9ef86b83139a0b56bdd80c253f46';

class Weather extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            city: '',
            description : '',
            temp: '',
            icon: 'http://icons-for-free.com/free-icons/png/128/2415338.png',
            pressure: '',
            humidity: '',
            wind: ''
        }
    }
    componentDidMount(){

    this.grabWeather = () => {
        let city = this.state.city;
        this.refs.name.value = '';

        fetch(`https://api.openweathermap.org/data/2.5/weather?APPID=${api_key}&q=${city}&units=metric`)
        .then(response => response.json())
        .then(json => {
            this.setState({
                description: 'Conditions: '+json.weather[0].description,
                temp: 'Temperature: '+json.main.temp+' °C',
                pressure:'Pressure: ' +json.main.pressure+' hpa',
                icon: 'http://openweathermap.org/img/w/'+json.weather[0].icon+'.png',
                humidity: 'Humidity: '+json.main.humidity+' %',
                wind: 'Wind: '+json.wind.speed+' m/s'
            })
        });
    }
}

    handleClick = () => {
        const val = this.refs.name.value;
        if(val !== ''){
        this.setState({
            city : val
        }, () => this.grabWeather() )
    } else {
        alert('type city!')
        }
    }
    
    render(){
        return (
         <Bodybg>     
        <Maindiv>
            <h1>Weather App</h1>
            <input ref="name" type="text" placeholder="Type city" />
            <button onClick={this.handleClick}>Get weather</button>
            <h1>{this.state.city}</h1>
            <p><img src={this.state.icon} alt="icon"/></p>
            <h2>{this.state.description}</h2>
            <h2>{this.state.temp}</h2>
            <h2>{this.state.pressure}</h2>
            <h2>{this.state.humidity}</h2>
            <h2>{this.state.wind}</h2>
        </Maindiv>
        </Bodybg>
        )
    }
}

export default Weather;
