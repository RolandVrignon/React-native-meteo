import React from 'react'
import {Text, View,ActivityIndicator, ListView, Button, Image, StyleSheet} from 'react-native'
import axios from 'axios'


export default class Resultat extends React.Component {

  fetchWeather() {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&units=metric&appid=50e6f5f018dc678e46dafddd26447c9c`)
    // axios.get(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${this.state.city}'&mode=json&units=metric&cnt=10&APPID=94c6cf0868fa5cb930a5e2d71baf0dbf`)
      .then((response) => {
        console.log(response.data);
        this.setState({
          report: response.data,
          name: response.data.name,
          temp: response.data.main.temp,
          clouds: response.data.clouds.all,
          weather: response. data.weather[0].main
        })
      })
  }
  static navigationOptions = ({navigation}) => {

    /*    if (navigation.state.params.favoris == null){
         return {
            title: `${navigation.state.params.text}`
          }
        } else {
          console.log(this.state.name);
          return {
            title: `${navigation.state.params.favoris}`
          }
        }*/
      return {
        title : navigation.state.params.text
      }
}
constructor(props) {
    super(props)
    this.state = {
      city: this.props.navigation.state.params.text,
      // favoris: this.state.favoris,
      report: null
    }
    this.fetchWeather()

  }

weathericon() {
  const weather = this.state.weather
  let image
  switch (weather) {
    case 'Clouds':
      image = require('./img/cloud.png')
      break;
    case 'Rain':
      image = require('./img/rain.png')
      break;
    default:
      image = require('./img/sun.png')
      break;
  }
  return <Image source={image} style={style.image}/>
}

  favoris(){
    this.props.navigation.navigate('About')
  }

  render(){
    if (this.state.report == null){
      return(
        <View style={{flex:1, justifyContent:'center', margin: 20}}>
          <ActivityIndicator size={"large"}/>
          <Text>Oops! il semberait que votre ville n'existe pas ou n'est pas disponible :(</Text>
        </View>
      )
    } else {
      let name= this.state.name;
      let temperature = this.state.temp;
      let nuages = this.state.clouds;


      return(
        <View style={{flex:1, justifyContent:'center', alignItems:'center', margin: 20}}>
          <Text style={style.name}>{name}</Text>
          <Text>Température : {temperature}°</Text>
          <Text>Nuages : {nuages}%</Text>
          {this.weathericon()}
          <Button onPress={()=> this.favoris()} title="Ajouter comme favoris"/>
        </View>
      )
    }
  }
}


const style = StyleSheet.create({
  name:{
    fontSize: 40,
  },
  image:{
    margin: 20,
    height:250,
  }
});
