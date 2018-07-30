import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

import {ContactListItem} from './ContactListItem';

/*
* Task no 1 - styling with Yoga layout
* Render all contacts in a list. Render them as tiles, two contacts in a row.
* /----------------------\ /------------------------\
* | name last name       | | name last name         |
* |            call icon | |              call icon |
* | phone number         | | phone mumber           |
* \----------------------/ \------------------------/
* /----------------------\ /------------------------\
* | name last name       | | name last name         |
* |            call icon | |              call icon |
* | phone number         | | phone mumber           |
* \----------------------/ \------------------------/
*
* PRO tip: https://facebook.github.io/react-native/docs/flatlist#numcolumns
*/

export default class App extends React.Component {

    state = {
        contacts: [],
    };

    async componentWillMount() {
        try {
            const response = await fetch('https://api.myjson.com/bins/c2o36');
            const contacts = await response.json();
            this.setState({contacts})
        } catch (e) { }
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>Contacts</Text>
                <FlatList
                    data={this.state.contacts}
                    contentContainerStyle={styles.content}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => <ContactListItem {...item} />}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        paddingTop: 20,
        fontSize: 18,
        textAlign: 'center',
        paddingBottom: 10,
    },
    content: {
        paddingHorizontal: 10,
    }
});
