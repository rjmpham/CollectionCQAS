import React from 'react';
import {Alert, ActivityIndicator, Button, FlatList, Linking, StyleSheet, ScrollView, Text, TouchableOpacity, View, Image} from 'react-native';
import {createStackNavigator} from 'react-navigation';
import {FontAwesome, Ionicons} from '@expo/vector-icons';
import HeaderButtons from 'react-navigation-header-buttons';


class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
    headerRight: (
      <HeaderButtons IconComponent={Ionicons} OverflowIcon={<Ionicons name="ios-more" size={23} color="blue" />} iconSize={23} color="blue">
        <HeaderButtons.Item title="add" iconName="ios-cart" onPress={() => console.warn('add')} />
        <HeaderButtons.Item title="search" iconName="ios-search" onPress={() => console.warn('add')} />
        <HeaderButtons.Item title="select" onPress={() => console.warn('edit')} />
      </HeaderButtons>
    )

  };

  _onPressButton() {
    Alert.alert('You tapped the button!');
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={{
          height:'35%',
          width: '100%'
        }}
        >
          <Image source={require('./logoSMargins.png')} style={{
            flex:1,
            alignSelf: 'center',
            resizeMode: 'contain'
          }}/>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => this.props.navigation.navigate('Browse')}
            title='Browse'
            color= '#D9272E'
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => this.props.navigation.navigate('About')}
            title='About'
            color='#AA198D'
          />
        </View>
        <View style= {{
          marginLeft: 20,
          marginRight: 20,
        }}>
          <View style={styles.alternativeLayoutButtonContainer}>
            <FontAwesome name="twitter-square"
              size={50}
              color='#1DA1F2'
              onPress={() => {Linking.openURL('https://twitter.com/FairyTalesYYC')}}
            />
            <FontAwesome name="facebook-square"
              size={50}
              color='#3B5998'
              onPress={() => {Linking.openURL('https://www.facebook.com/fairyfilmfestyyc')}}
            />
            <FontAwesome name="instagram"
              size={50}
              onPress={() => {Linking.openURL('https://www.instagram.com/fairytalesfilmfest/')}}
            />
            <FontAwesome name="vimeo-square"
              size={50}
              color='#1ab7ea'
              onPress={() => {Linking.openURL('https://vimeo.com/fairytalesqueerfilmfest')}}
            />

          </View>
        </View>
      </View>
    );
  }
}

class AboutScreen extends React.Component {
  static navigationOptions = {
    title: 'About',
    headerRight: (
      <HeaderButtons IconComponent={Ionicons} OverflowIcon={<Ionicons name="ios-more" size={23} color="blue" />} iconSize={23} color="blue">
        <HeaderButtons.Item title="add" iconName="ios-cart" onPress={() => console.warn('add')} />
        <HeaderButtons.Item title="search" iconName="ios-search" onPress={() => console.warn('add')} />
        <HeaderButtons.Item title="select" onPress={() => console.warn('edit')} />
      </HeaderButtons>
    )
  };

  render() {
    return (
      <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 30,
        marginRight: 30
      }}>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>
          Who We Are
        </Text>
        <Text style={{textAlign: 'center', fontSize: 15}}>
          Calgary Queer Arts Society, formerly known as Fairy Tales Presentation Society, is a nonprofit organization located in Calgary, Alberta that exists to give voice to queer people and their stories. Historically, LGBTQ2A+ individuals have been suppressed, deprived of power, misrepresented and often overlooked by institutional support systems. We are committed to transforming this reality, and will continue to work passionately towards an inclusive future for all people.

          The arts are an integral part of who we are. Storytelling connects us all, dissolves our differences and breaks down barriers, so that we can find aspects of ourselves in others, and of others in ourselves. Our stories are important to Calgary, which is why we are committed to creating and sharing the narratives that shape us. We use storytelling mediums and artistic endeavours to inspire thoughtful conversations that educate and strengthen communities and institutions. {'\n'}
        </Text>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>
          Vision
        </Text>
        <Text style={{textAlign: 'center', fontSize: 15}}>
          A world where diverse queer stories are integrated, celebrated, and expected in our communities and institutions. {'\n'}
        </Text>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>
          Mission
        </Text>
        <Text style={{textAlign: 'center', fontSize: 15}}>
          We use storytelling mediums to humanize social justice issues through a queer lens and provide opportunities for learning, community, and celebration in Calgary and Alberta.
        </Text>
      </View>
    );
  }
}

class MovieButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let pic;

    if (this.props.datum.movie.posterexists) {
      pic = {
        uri:this.props.imguri + this.props.datum.movie.posterthumb
      };
    } else {
      pic = {
        uri:'https://static1.squarespace.com/static/5a79eedcdc2b4ab4d004c90a/t/5ab9487003ce648281505148/1522092181933/FAIRY+TALES+CALGARY%27S+QUEER+FILM+FEST.png?format=500w'
      };
    }
    
    return (
      <View
        style={{
          flexDirection: 'row',
          height: 200,
          padding: 10,
        }}>
        <Image source={pic} style={{
          height: '100%',
          width: 125
        }}>
        </Image>
        <View style={{
          flex: 1,
          marginLeft: 10,
          height: '100%',
          flexDirection: 'column'
        }}>
          <Text style={{
            marginBottom: 10,
            fontWeight: 'bold',
            fontSize: 14,
            width: '100%',
          }}>
            {this.props.movie.Title}
          </Text>
          <Text style={{
            flex:1
          }}>
            {this.props.movie.Plot}
          </Text>
        </View>
      </View>
    );
  }
}

class BrowseScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      isLoading: true,
      isLoadingMore: false,
      data: [],
      imguri: 'https://s3-us-west-1.amazonaws.com/cqasimagehost',
      nextpage: 0

      // movies: var movies = [{title:'one', id:1}, {title:'two', id:2}, {title:'three', id:3}];
    };
  }

  static navigationOptions = {
    title: 'Browse',
    headerRight: (
      <HeaderButtons IconComponent={Ionicons} OverflowIcon={<Ionicons name="ios-more" size={23} color="blue" />} iconSize={23} color="blue">
        <HeaderButtons.Item title="cart" iconName="ios-cart" onPress={() => console.warn('add')} />
        <HeaderButtons.Item title="search" iconName="ios-search" onPress={() => console.warn('add')} />
        <HeaderButtons.Item title="select" onPress={() => console.warn('edit')} />
      </HeaderButtons>
    )
  };

  componentDidMount() {
    return fetch('http://cqascollection.us-west-1.elasticbeanstalk.com/movies')
      .then((res) => res.json())
      .then((json) => {
        // console.log(JSON.parse(json));
        if (json.response === true) {
          // console.log(json.data);
          // json.data.map(d => console.log(d.movie.id));

          this.setState({
            isLoading: false,
            data: json.data,
            imguri: json.img,
            nextpage: json.nextpage
          }, () => {});
        } else {
          console.error('failed to query api');
        }
        //FIXME: Else show error and ask to retry.
      })
      .catch(console.error);
  }

  _onPressButton() {
    Alert.alert('You tapped the button!');
  }

  renderMovieButton(datum) {
    return (
      <TouchableOpacity
        onPress={
          () =>  this.props.navigation.navigate(
            'Movie',
            {
              datum: datum,
              movietitle: datum.movie.title,
              imguri: this.state.imguri
            }
          )
        } >
        <MovieButton datum={datum} imguri={this.state.imguri} />
      </TouchableOpacity>
    );
  }

  getMoreData() {
    // this.state.data.nextpage
    return fetch('http://cqascollection.us-west-1.elasticbeanstalk.com/movies?page=' + this.state.nextpage)
      .then((res) => res.json())
      .then((json) => {
        const newdata = this.state.data.concat(json.data);

        this.setState({
          isLoadingMore: false,
          data: newdata,
          imguri: json.img,
          nextpage: json.nextpage
        }, () => {});
      }).catch(console.error);
  }


  render() {
    if (this.state.isLoading) {
      return(
        <View style={[styles.container, styles.horizontal]}>
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
      );
    }

    return (
      <FlatList
        data = {this.state.data}
        keyExtractor = {(item) => item.movie.id}
        renderItem = {({item}) => this.renderMovieButton(item)}
        onEndReached = {() =>
          this.setState({isLoadingMore: true}, () => this.getMoreData())
        }
        onEndThreshold = {0}
      />
    );
  }
}
class MovieScreen extends React.Component{
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('movietitle', 'Movie'),
      headerRight: (
        <HeaderButtons IconComponent={Ionicons} OverflowIcon={<Ionicons name="ios-more" size={23} color="blue" />} iconSize={23} color="blue">
          <HeaderButtons.Item title="add" iconName="ios-cart" onPress={() => console.warn('add')} />
        </HeaderButtons>
      )
    };
  };
  render() {
    const datum = this.props.navigation.getParam('datum');
    const imguri = this.props.navigation.getParam('imguri');
    let pic;
    if (datum.movie.posterexists) {
      pic = {
        uri: imguri + datum.movie.poster
      };
    } else {
      pic = {
        uri:'https://static1.squarespace.com/static/5a79eedcdc2b4ab4d004c90a/t/5ab9487003ce648281505148/1522092181933/FAIRY+TALES+CALGARY%27S+QUEER+FILM+FEST.png?format=500w'
      };
    }

    return (
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            height: 300,
            padding: 20,
          }}>
          <Image source={pic} resizeMode='center' style={{
            flex: 1,
            alignSelf: 'stretch',
            height: undefined,
            width: undefined

          }}>
          </Image>
          <Text style={{
            marginLeft: 10,
            height: '100%',
            width: '50%'
          }}>
            <Text>Year: {datum.movie.year} {'\n'}</Text>
            <Text>Rating: {datum.movie.rated} {'\n'}</Text>
            <Text>Awards: {datum.movie.awards} {'\n'}</Text>
            <Text>Directors: {JSON.parse(datum.movie.directorobj).map(d => d.text).join(', ')} {'\n'}</Text>
            <Text>Writers: {JSON.parse(datum.movie.writerobj).map(d => d.text).join(', ')} {'\n'}</Text>
            <Text>Genres: {JSON.parse(datum.movie.genreobj).map(d => d.text).join(', ')} {'\n'}</Text>
          </Text>
        </View>
        <View style={{
          padding: 20
        }}>
          <Text>
            {datum.movie.plotfull}
          </Text>
        </View>
        <View style={{
          height: 200,
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 20
        }}>
          <Image source={require('./backgroundLogo.png')} style={{
            height: '100%',
            width: '32%',
          }}>
          </Image>
          <Image source={require('./backgroundLogo.png')} style={{
            height: '100%',
            width: '32%',
          }}>
          </Image>
          <Image source={require('./backgroundLogo.png')} style={{
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
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  }
},);

export default createStackNavigator({
  render() {
    return <RootStack />;
  }},
{ headerMode: 'none' }
);
