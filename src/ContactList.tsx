import React from 'react';
import {Button, ScrollView, Text, TextStyle, View} from "react-native";
// @ts-ignore
import contacts from './contacts.json';
import {ContactListItem} from "./ContactListItem";

interface State {
    contacts: any[];
    orderBy: string;
}

export class ContactList extends React.Component<{}, State> {

    constructor(props) {
        super(props);
        this.state = {
            contacts: [],
            orderBy: 'firstName',
        };
    }

    componentWillMount() {
        this.setState({contacts: contacts});
    }

    render() {
        return (
            <View style={{height: '100%'}}>
                <Text style={headerStyle}>Contact list</Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                    <Button
                        title={"sort by first name"}
                        onPress={() => this.setState({orderBy: 'firstName'})}
                    />
                    <Button
                        title={"sort by last name"}
                        onPress={() => this.setState({orderBy: 'lastName'})}
                    />
                </View>
                <ScrollView>
                    {this.state.contacts
                        .sort((a, b) => this.sortBy(a, b))
                        .map((contact, i) => <ContactListItem key={i} {...contact} />)}
                </ScrollView>
            </View>
        )
    }

    sortBy = (a, b): number => {
        const A = a[this.state.orderBy].toLowerCase();
        const B = b[this.state.orderBy].toLowerCase();
        if (A < B) {
            return -1;
        } else if (A > B) {
            return 1;
        } else {
            return 0;
        }
    }
}

const headerStyle = {
    position: 'relative',
    top: 10,
    padding: 15,
    fontSize: 24,
    textAlign: 'center',
} as TextStyle;
