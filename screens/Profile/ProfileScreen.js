import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ProfileScreen = () => {
    return (
        <View style={styles.profile}>
            <Text>Profile!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    profile: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default ProfileScreen

