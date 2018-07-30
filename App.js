import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';

import contacts from './contacts.json';
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
*/

export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <FlatList
            data={contacts}
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
    alignItems: 'center',
    justifyContent: 'center',
  },
});
