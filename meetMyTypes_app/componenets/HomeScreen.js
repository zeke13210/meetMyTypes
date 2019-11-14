import React from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-elements'




class HomeScreen extends React.Component {



  render() {

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text> Home screen </Text>
        <Button
          title="Log out"
          onPress={this.logOut} />
      </View>
    );
  }
}


export default HomeScreen