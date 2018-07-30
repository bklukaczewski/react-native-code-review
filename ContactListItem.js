import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';

export const ContactListItem = ({firstName, lastName, phone}) => (
    <View style={styles.container}>
        <View style={styles.row}>
            <View>
                <Text>{firstName} {lastName}</Text>
                <Text>{phone}</Text>
            </View>
            <Icon name="phone"/>
        </View>
    </View>
);

const styles = StyleSheet.create({
    // place your styles here
    container: {
        borderColor: '#888',
        borderWidth: StyleSheet.hairlineWidth,
        flex: 0.5,
    },
    row: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});
