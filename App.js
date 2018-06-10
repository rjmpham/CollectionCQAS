// In App.js in a new project

import React, { Component } from 'react';
import {Alert, AppRegistry, Button, StyleSheet, Text, View, Image} from 'react-native';
import { createStackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
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
          height: 95,
          width: '100%'
        }}/>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => this.props.navigation.navigate('Browse')}
            title="Browse"
            color="#008B8B"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => this.props.navigation.navigate('About')}
            title="About"
            color="#FF5500"
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
            color="#C02E4C"
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

class AboutScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
}

class BrowseScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    About: AboutScreen,
    Browse: BrowseScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

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

export default createStackNavigator({
  render() {
    return <RootStack />;
  }
});
