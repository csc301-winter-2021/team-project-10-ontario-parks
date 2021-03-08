import React from 'react';
import {View, Button, StyleSheet} from 'react-native';
import Header from '../components/Header';

const MainPage = props =>{
    const tytle = "Explore Ontario";

    return(
        <View>
            <Header title={tytle}></Header>
            <Button title="Setting Preference" />
            <Button title="Map" />
            <Button title="Start" />
        </View>
    );
};

const styles = StyleSheet.create({});

export default MainPage;