import React from 'react';
import { StyleSheet, Text, View ,TextInput,
    TouchableOpacity, Alert,Modal,KeyboardAvoidingView,
ScrollView,FlatList} from 'react-native';
import db from '../config';
import firebase from 'firebase';
import MyHeader from '../component/MyHeader';

export default class HomeScreen extends React.Component{
    render(){
        return(
            <View>
                <Text>
                student app 
                </Text>
            </View>
        )
    }
}