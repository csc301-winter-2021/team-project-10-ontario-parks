import React from 'react';
import {View, Button, StyleSheet} from 'react-native';
import Header from '../components/Header';

const MainPage = (props) => {
    const tytle = "Explore Ontario";

    //function allow user to switch the pages when call
    const pressHandler = (page) =>{
        props.navigation.navigate(page);
    }

    return(
        <View>
            <Header title={tytle}></Header>
            <Button title="Setting Preference" onPress={()=>{pressHandler('SettingPreference')}}/>
            <Button title="Map" onPress={()=>{pressHandler('Map')}}/>
            <Button title="Login" onPress={()=>{pressHandler('Login')}}/>
            <Button title="Start" />
        </View>
    );
};

const styles = StyleSheet.create({});

export default MainPage;