import React from 'react';
import {Alert, Button, StyleSheet, ScrollView, Text, TouchableOpacity, View, Image} from 'react-native';
import {createStackNavigator} from 'react-navigation';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  _onPressButton() {
    Alert.alert('You tapped the button!');
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

          The arts are an integral part of who we are. Storytelling connects us all, dissolves our differences and breaks down barriers, so that we can find aspects of ourselves in others, and of others in ourselves. Our stories are important to Calgary, which is why we are committed to creating and sharing the narratives that shape us. We use storytelling mediums and artistic endeavours to inspire thoughtful conversations that educate and strengthen communities and institutions. {'\n'}
        </Text>
        <Text style ={{fontWeight: 'bold'}}>
          Vision
        </Text>
        <Text>
          A world where diverse queer stories are integrated, celebrated, and expected in our communities and institutions. {'\n'}
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
    Alert.alert('You tapped the button!');
  }
  render() {
    return (
      <ScrollView>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Movie')}>
          <View
            style={{
              flexDirection: 'row',
              height: 154,
              padding: 10,
            }}>
            <Image source={require('./logo.png')} style={{
              height: '100%',
              width: '30%'
            }}>
            </Image>
            <Text style={{
              height: '100%',
              width: '70%'}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>

          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Movie')}>
          <View
            style={{
              flexDirection: 'row',
              height: 154,
              padding: 10,
            }}>
            <Image source={require('./logo.png')} style={{
              height: '100%',
              width: '30%'
            }}>
            </Image>
            <Text style={{
              height: '100%',
              width: '70%'}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>

          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Movie')}>
          <View
            style={{
              flexDirection: 'row',
              height: 154,
              padding: 10,
            }}>
            <Image source={require('./logo.png')} style={{
              height: '100%',
              width: '30%'
            }}>
            </Image>
            <Text style={{
              height: '100%',
              width: '70%'}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>

          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Movie')}>
          <View
            style={{
              flexDirection: 'row',
              height: 154,
              padding: 10,
            }}>
            <Image source={require('./logo.png')} style={{
              height: '100%',
              width: '30%'
            }}>
            </Image>
            <Text style={{
              height: '100%',
              width: '70%'}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>

          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Movie')}>
          <View
            style={{
              flexDirection: 'row',
              height: 154,
              padding: 10,
            }}>
            <Image source={require('./logo.png')} style={{
              height: '100%',
              width: '30%'
            }}>
            </Image>
            <Text style={{
              height: '100%',
              width: '70%'}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>

          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Movie')}>
          <View
            style={{
              flexDirection: 'row',
              height: 154,
              padding: 10,
            }}>
            <Image source={require('./logo.png')} style={{
              height: '100%',
              width: '30%'
            }}>
            </Image>
            <Text style={{
              height: '100%',
              width: '70%'}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>

          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Movie')}>
          <View
            style={{
              flexDirection: 'row',
              height: 154,
              padding: 10,
            }}>
            <Image source={require('./logo.png')} style={{
              height: '100%',
              width: '30%'
            }}>
            </Image>
            <Text style={{
              height: '100%',
              width: '70%'}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>

          </View>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}
class MovieScreen extends React.Component{
  static navigationOptions = {
    title: 'MovieNameShouldBeHere',
  };
  render() {
    return (
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            height: 154,
            padding: 20,
          }}>
          <Image source={require('./logo.png')} style={{
            height: '100%',
            width: '30%',
            padding: 20
          }}>
          </Image>
          <Text style={{
            height: '100%',
            width: '70%'
          }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </View>
        <View style={{
          padding: 20
        }}>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </View>
        <View style={{
          height: 200,
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 20
        }}>
          <Image source={require('./logo.png')} style={{
            height: '100%',
            width: '32%',
          }}>
          </Image>
          <Image source={require('./logo.png')} style={{
            height: '100%',
            width: '32%',
          }}>
          </Image>
          <Image source={require('./logo.png')} style={{
            height: '100%',
            width: '32%',
          }}>
          </Image>
        </View>
        <View style={{
          padding: 20
        }}>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </View>
      </ScrollView>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    About: AboutScreen,
    Browse: BrowseScreen,
    Movie: MovieScreen,
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
},);

export default createStackNavigator({
  render() {
    return <RootStack />;
  }},
{ headerMode: 'none' }
);
