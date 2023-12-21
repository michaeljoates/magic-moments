import React from "react";
import { View, Text, Button } from 'react-native';
import { styles } from '../data/styles';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home Screen</Text>
            <Button
                title="Go to Profile"
                onPress={() => navigation.navigate('Profile')}
            />
        </View>
    );
};

export default HomeScreen;