// In App.js in a new project

import React, {Component} from 'react';
import {Alert, AppRegistry, Button, StyleSheet, ScrollView, Text, View, Image} from 'react-native';
import {createStackNavigator} from 'react-navigation';

class HomeScreen extends React.Component {
  static navigationOptions = {
   title: 'Home',
  };

  _onPressButton() {
    Alert.alert('You tapped the button!')
  }
  render() {
    {/*
    let pic = {
      uri:'https://static1.squarespace.com/static/5a79eedcdc2b4ab4d004c90a/t/5a7c58ed71c10b9941fae93b/1527527283463/?format=1500w'
    };*/}
    return (
      <View style={styles.container}>

        <Image source={require('./logo.png')} style={{
          alignSelf: 'center',
          height: '40%',
          width: '100%'
        }}/>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => this.props.navigation.navigate('Browse')}
            title='Browse'
            color='#008B8B'
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => this.props.navigation.navigate('About')}
            title='About'
            color='#FF5500'
          />
        </View>
        <View style={styles.alternativeLayoutButtonContainer}>
          <Button
            onPress={this._onPressButton}
            title='Twitter'
            color='#2ABBB2'
          />
          <Button
            onPress={this._onPressButton}
            title='Facebook'
          />
          <Button
            onPress={this._onPressButton}
            title='Instagram'
            color='#C02E4C'
          />
          <Button
            onPress={this._onPressButton}
            title='Vimeo'
            color='#2ABBB2'
          />
        </View>
      </View>
    );
  }
}

class AboutScreen extends React.Component {
  static navigationOptions = {
    title: 'About',
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style ={{fontWeight: 'bold'}}>
          Who We Are
        </Text>
        <Text>
          Calgary Queer Arts Society, formerly known as Fairy Tales Presentation Society, is a nonprofit organization located in Calgary, Alberta that exists to give voice to queer people and their stories. Historically, LGBTQ2A+ individuals have been suppressed, deprived of power, misrepresented and often overlooked by institutional support systems. We are committed to transforming this reality, and will continue to work passionately towards an inclusive future for all people.

          The arts are an integral part of who we are. Storytelling connects us all, dissolves our differences and breaks down barriers, so that we can find aspects of ourselves in others, and of others in ourselves. Our stories are important to Calgary, which is why we are committed to creating and sharing the narratives that shape us. We use storytelling mediums and artistic endeavours to inspire thoughtful conversations that educate and strengthen communities and institutions. {"\n"}
        </Text>
        <Text style ={{fontWeight: 'bold'}}>
          Vision
        </Text>
        <Text>
          A world where diverse queer stories are integrated, celebrated, and expected in our communities and institutions. {"\n"}
        </Text>
        <Text style ={{fontWeight: 'bold'}}>
          Mission
        </Text>
        <Text>
          We use storytelling mediums to humanize social justice issues through a queer lens and provide opportunities for learning, community, and celebration in Calgary and Alberta.
        </Text>
      </View>
    );
  }
}

class BrowseScreen extends React.Component {
  static navigationOptions = {
    title: 'Browse',
  };
  _onPressButton() {
    Alert.alert('You tapped the button!')
  }
  render() {
    return (
      <ScrollView>
        <View style={styles.mockMovieButtonContainer}>
          <Button
            title='Browse1'
            onPress={this._onPressButton}
          />
        </View>
        <View style={styles.mockMovieButtonContainer}>
          <Button
            title='Browse2'
            onPress={this._onPressButton}
          />
        </View>
        <View style={styles.mockMovieButtonContainer}>
          <Button
            title='Browse3'
            onPress={this._onPressButton}
          />
        </View>
        <View style={styles.mockMovieButtonContainer}>
          <Button
            title='Browse4'
            onPress={this._onPressButton}
          />
        </View>
        <View style={styles.mockMovieButtonContainer}>
          <Button
            title='Browse5'
            onPress={this._onPressButton}
          />
        </View>
      <Text style={{fontSize:96}}>Scroll me plz</Text>
      <Text style={{fontSize:96}}>If you like</Text>
      <Text style={{fontSize:96}}>Scrolling down</Text>
      <Text style={{fontSize:96}}>Whats the best</Text>
      <Text style={{fontSize:96}}>Framework around?</Text>
      <Text style={{fontSize:80}}>React Native</Text>
      </ScrollView>
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
  },
  mockMovieButtonContainer:{
    margin: 40
  }
})

export default createStackNavigator({
    render() {
      return <RootStack />;
    }
  },
  { headerMode: 'none' }
);
