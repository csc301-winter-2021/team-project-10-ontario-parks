import React, { useState } from 'react';
import {View, StyleSheet, Text, ScrollView, Button, CheckBox, TouchableOpacity} from 'react-native';

const SettingPreference = ({ navigation }) =>{
    const [isNatural, setNatural] = useState(false);
    const [isCultural, setCultural] = useState(false);
    const [isGeneral, setGeneral] = useState(false);
    const [isHistorical, setHistorical] = useState(false);
    const [isPopular, setPopular] = useState(false);

    return (
        <View style={styles.container}>
            {/* setup header */}
            <View style={styles.header}>
                {/* Here is  the return button */}
                <View style={styles.backView}>
                    <TouchableOpacity activeOpacity={0.3} onPress={() => {navigation.navigate('MainPage')}}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>return</Text>
                    </View>
                </TouchableOpacity>
                </View>
                
                {/* Here is the title */}
                <Text style={styles.TitleView}>Setting Preference</Text>
            </View>

            {/* for checkboxes */}
            <View style={styles.checkboxContainer}>
                <CheckBox
                    value={isNatural}
                    onValueChange={setNatural}
                    style={styles.checkbox}
                />
                <Text style={styles.label}>Natural</Text>
            </View>
            
            <View style={styles.checkboxContainer}>
                <CheckBox
                    value={isCultural}
                    onValueChange={setCultural}
                    style={styles.checkbox}
                />
                <Text style={styles.label}>Cultural</Text>
            </View>

            <View style={styles.checkboxContainer}>
                <CheckBox
                    value={isGeneral}
                    onValueChange={setGeneral}
                    style={styles.checkbox}
                />
                <Text style={styles.label}>General</Text>
            </View>

            <View style={styles.checkboxContainer}>
                <CheckBox
                    value={isHistorical}
                    onValueChange={setHistorical}
                    style={styles.checkbox}
                />
                <Text style={styles.label}>Historical</Text>
            </View>

            <View style={styles.checkboxContainer}>
                <CheckBox
                    value={isPopular}
                    onValueChange={setPopular}
                    style={styles.checkbox}
                />
                <Text style={styles.label}>Popular</Text>
            </View>
            {/* Here is used to record the selected text */}
            <Text>Selected Preference: {isNatural ? "Natural " : ""} {isCultural ? "Cultural " : ""} {isGeneral ? "General " : ""} {isHistorical ? "Historical " : ""} {isPopular ? "Popular " : ""}</Text> 
        </View>
  );
            
};

const styles = StyleSheet.create({
    backView:{
        flexGrow: 1,
        flexDirection: "row",
        justifyContent: "flex-start",
        paddingLeft: 10,
    },

    button: {
        paddingVertical: 10,
        paddingHorizontal: 10,
    },

    buttonText: {
        color: "#25A5D3",
        fontFamily: 'open-sans-bold',
        fontSize: 16
    },

    TitleView: {
        paddingLeft: 10,
        flexGrow: 2,
        flexDirection: "row",
        justifyContent: "flex-start"
    },

    header: {
        width: "100%",
        flexDirection: "row",
        height: 90,
        paddingTop: 36,
        alignItems: "center",
        backgroundColor: "#D7E8F3"
    },

    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#fff',
    },
    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
    },
    checkbox: {
        alignSelf: "center",
    },
    label: {
        margin: 8,
    },
});

export default SettingPreference;