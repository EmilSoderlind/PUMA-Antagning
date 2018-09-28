import { View , Text } from 'react-native';
import React from 'react';

export default class TopMenuSearch extends React.Component{
    render(){
        return(
            <View style={{
                flexDirection: 'row',
                height: 40,
                backgroundColor: '#333',
              }}>>
                <Text>Menu</Text>
            </View>
        );
    }
}