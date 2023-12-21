import React from "react";
import { View, Text, Button } from 'react-native';

const Profile = ({ navigation }) => {
    return (
        <View>
            <Text>Profile</Text>
            <Button
                title="Go Back"
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    );
};

export default Profile;