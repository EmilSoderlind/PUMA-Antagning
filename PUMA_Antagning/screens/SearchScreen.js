import React, {Component} from 'react';
import { ScrollView, StyleSheet, View, ImageBackground } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import SearchComponent from '../components/SearchComponent.js';
import TopMenuSearch from '../components/TopMenuSearch.js';

export default class SearchScreen extends React.Component {
  /*static navigationOptions = {
    title: 'Links',
  };*/

  render() {
    return (
      <View style={styles.page}>
        <ImageBackground style = {styles.background} source={{uri: 'https://www.studeravidare.se/uploads/umu-main.jpg'}} 
        imageStyle={{resizeMode: 'cover'}} blurRadius={2}>
          <SearchComponent/>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create(
  {
      page:{
          flexDirection: 'column',
          height: '100%',
      },

      background: {
        height: '100%',
        flexDirection: "column",
      },
  }
);
