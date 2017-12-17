import React from 'react'
import {TextInput, StyleSheet, Button, View} from 'react-native'
import {StackNavigator} from 'react-navigation'
import Resultat from './Resultat'

class Home extends React.Component {

  static navigationOptions = {
    title : 'Rechercher une ville',
  };

  constructor(props) {
    super(props);
    this.state = {
      text: 'Fourqueux'
    }
  }

  submit() {
    this.props.navigation.navigate('Result', {text: this.state.text})
  }

  render() {
    return (
      <View style={style.view}>
        <TextInput
          underlineColorAndroid='transparent'
          style={style.textinput}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <Button onPress={() => this.submit()} title="Go"/>
      </View>
    );
  }
}

export default StackNavigator({

  Search:{
    screen: Home,
  },
  Result:{
    screen: Resultat,
  },
})

const style = StyleSheet.create({
  textinput: {
    marginTop: 10,
    marginBottom: 20,
    fontSize: 42,
    borderColor: 'grey',
    borderWidth: 1,
    color: 'grey',
    paddingHorizontal:15,
  },
    view:{
      margin: 20,
      flex: 1
    },

  header:{
    color:'blue',
  }
});
