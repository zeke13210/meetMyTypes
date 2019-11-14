import React from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-elements'




class SignInScreen extends React.Component {

    signInUser = () => {
        /*Taken in user email and password and run firebase func to
        authenticate. Store email in state to pass as props to AppTabNavigator */
        console.log("Signing user in")

    }

    registerHandle = () => {
        this.props.navigation.navigate('Register')
    }

    render() {

        return (
            <View>

                <Button
                    title="Sign In"
                    onPress={this.signInUser} />

                <Button
                    title="Sign Up"
                    onPress={this.registerHandle} />
            </View>
        );
    }
}


export default SignInScreen