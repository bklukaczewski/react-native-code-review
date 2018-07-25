import React from 'react';
import {Text, TextStyle, View, ViewStyle} from 'react-native';

interface Props {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
}

export class ContactListItem extends React.Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.name}>{this.props.firstName} {this.props.lastName}</Text>
                <Text>{this.props.email}</Text>
                <Text>{this.props.phone}</Text>
            </View>
        )
    }
}

const styles = {
    container: {
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 10,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#888',
        borderStyle: 'solid'
    } as ViewStyle,
    name: {
        fontSize: 16,
        marginBottom: 5,
        fontWeight: 'bold',
    } as TextStyle
};
