import React from 'react'
import {StackNavigator} from 'react-navigation'
import {Text, View, Button, StyleSheet} from 'react-native'


export default class About extends React.Component{

  static navigationOptions = {
    title: 'About',
  };


  constructor(props) {
    super(props);
    this.state = {
      favoris: 'Paris'
    }
  }

  search(){
    this.props.navigation.navigate('Search', {text: 'Fourqueux'})
  }


  favorite(){
    this.props.navigation.navigate('Result', {text:`${this.state.favoris}`})
  }


  HandleClick () {

  }


  render(){
    return(
      <View style={style.view}>
        <Text style={style.title}>
          Bienvenue sur la page à propos
        </Text>
        <Text style={{marginTop:30}}>
          Application dévelopée par Roland Vrignon dans le cadre d'un cours sur React Native. Le but étant de créer une application permettant de consulter la météo de n'importe quelle ville et d'en ajouter une en tant que favoris. www.rolandvrignon.com
        </Text>
        <Button style={{marginTop:30}} color="#841584" onPress={()=>this.search()} title="Rechercher"/>
        <Button style={{marginTop:30}} onPress={()=>this.favorite()} title={this.state.favoris} />
      </View>  );
  }

}


const style = StyleSheet.create({
  view:{
    flex:1,
    marginTop: 80,
    margin: 20
  },

  button1:{
    flex: 1,
    paddingTop: 60,
  },

  button2:{
    flex: 1,
    paddingTop: 60,
  },

  title:{
    fontSize: 30,
  }
})

