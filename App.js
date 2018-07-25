import React from 'react';

import {ContactList} from "./src/ContactList";
import {SafeAreaView} from "react-native";

export default class App extends React.Component {
    render() {
        return (
            <SafeAreaView>
                <ContactList/>
            </SafeAreaView>
        );
    }
}
