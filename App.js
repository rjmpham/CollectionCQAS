import React, { Component } from 'react';
import {Alert, AppRegistry, Button, StyleSheet, Text, View, Image} from 'react-native';

export default class Front extends Component {
  _onPressButton() {
    Alert.alert('You tapped the button!')
  }

  render() {
    let pic = {
      uri:'https://static1.squarespace.com/static/5a79eedcdc2b4ab4d004c90a/t/5a7c58ed71c10b9941fae93b/1527527283463/?format=1500w'
    };
    return (
      <View style={styles.container}>

        <Image source={pic} style={{
          margin: 10,
          height: '15%',
          width: '100%'
        }}/>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Browse"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="About"
            color="#FF0000"
          />
        </View>
        <View style={styles.alternativeLayoutButtonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Twitter"
            color="#2ABBB2"
          />
          <Button
            onPress={this._onPressButton}
            title="Facebook"
          />
          <Button
            onPress={this._onPressButton}
            title="Instagram"
            color="#841584"
          />
          <Button
            onPress={this._onPressButton}
            title="Vimeo"
            color="#2ABBB2"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
