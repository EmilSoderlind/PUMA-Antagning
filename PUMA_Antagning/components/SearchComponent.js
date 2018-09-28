import React, {Component} from 'react';
import { StyleSheet , TextInput, Button, View, Text} from 'react-native';

export default class SearchComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = { text: 'Sök utbildning här' };
      }

    render(){
        return(
            <View style={styles.container}>
                <TextInput onChangeText={(text) => this.setState({text})} value={this.state.text} style={styles.input}/>
                <View style = {styles.button}>
                    <Button onPress={() => {Alert.alert('You tapped the button!');}} title="Sök" color="#fff">
                        <Text style={styles.text}>
                        Sök
                        </Text>
                    </Button>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create(
    {
        input:{
            flexDirection: 'row',
            flex: 8,
            backgroundColor: '#ECECEC', 
            padding: 5,
            borderTopLeftRadius :6,
            borderBottomLeftRadius :6,
        },
        container: {
            flexDirection: 'row',
            padding: 5,
            backgroundColor: '#2274A5',
            borderRadius:6,
            margin: 5,
        },
        button: {
            flexDirection: 'row',
            backgroundColor: '#009AD6',
            borderTopRightRadius :6,
            borderBottomRightRadius :6,
            padding: 5,
            flex: 2,
        },
        text: {
            fontSize: 18,
            color: 'white',
        }
    }
);