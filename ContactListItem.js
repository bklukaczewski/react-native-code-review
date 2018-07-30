import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';

export const ContactListItem = ({firstName, lastName, phone}) => (
    <View style={styles.container}>
        <Text>{firstName}</Text>
        <Text>{lastName}</Text>
        <Text>{phone}</Text>
        <Icon name="phone"/>
    </View>
);

const styles = StyleSheet.create({
    // place your styles here
    container: {
        padding: 10,
        borderColor: '#888',
        borderWidth: StyleSheet.hairlineWidth,
        marginBottom: 5,
    }
});
