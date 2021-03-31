import React, { useState, useEffect } from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { Checkbox } from 'react-native-paper';

const SettingPreference = ({ navigation }) =>{
    const [isNatural, setNatural] = useState(false);
    const [isCultural, setCultural] = useState(false);
    const [isGeneral, setGeneral] = useState(false);
    const [isHistorical, setHistorical] = useState(false);
    const [isPopular, setPopular] = useState(false);
    const lstPrefer = [];
    

    return (
        <View style={styles.container}>
            {/* for checkboxes */}
            <View style={styles.checkboxContainer}>
                <Checkbox
                    status={isNatural ? 'checked' : 'unchecked'}
                    onPress={() => {
                        setNatural(!isNatural);
                    }}
                />
                <Text style={styles.checkText}>Natural</Text>
            </View>
            
            <View style={styles.checkboxContainer}>
                <Checkbox
                    status={isCultural ? 'checked' : 'unchecked'}
                    onPress={() => {
                        setCultural(!isCultural);
                    }}
                />
                <Text style={styles.checkText}>Cultural</Text>
            </View>

            <View style={styles.checkboxContainer}>
                <Checkbox
                    status={isGeneral ? 'checked' : 'unchecked'}
                    onPress={() => {
                        setGeneral(!isGeneral);
                    }}
                />
                <Text style={styles.checkText}>General</Text>
            </View>

            <View style={styles.checkboxContainer}>
                <Checkbox
                    status={isHistorical ? 'checked' : 'unchecked'}
                    onPress={() => {
                        setHistorical(!isHistorical);
                    }}
                />
                <Text style={styles.checkText}>Historical</Text>
            </View>

            <View style={styles.checkboxContainer}>
                <Checkbox
                    status={isPopular ? 'checked' : 'unchecked'}
                    onPress={() => {
                        setPopular(!isPopular);
                    }}
                />
                <Text style={styles.checkText}>Popular</Text>
            </View>
            {/* Here is used to record the selected text */}
            <Text style={styles.label}>Selected Preference: {isNatural ? "Natural " : ""} {isCultural ? "Cultural " : ""} {isGeneral ? "General " : ""} {isHistorical ? "Historical " : ""} {isPopular ? "Popular " : ""}</Text> 
        </View>
  );
            
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#fff',
    },
    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 50,
        width: "40%",
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "aliceblue",
    },
    checkText: {
        fontSize: 18,
        margin: 8,
    },
    label: {
        fontSize: 15,
        margin: 8,
    },
});

export default SettingPreference;