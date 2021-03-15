import React from 'react';
import { 
    View, 
    Text, 
    Button, 
    TouchableOpacity, 
    TextInput,
    Platform,
    StyleSheet,
    ScrollView,
    StatusBar
} from 'react-native';

const SignInScreen = ({navigation}) => {

    const [data, setData] = React.useState({
        username: '',
        password: '',
        confirm_password: '',
        email: ',',
        check_textEmailChange: false,
        check_textInputChange: false,
        secureTextEntry: true,
        confirm_secureTextEntry: true,
    });

    const textInputChange = (val) => {
        if( val.length !== 0 ) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true
            });
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false
            });
        }
    }

    const textEmailChange = (val) => {
        if( val.length !== 0 ) {
            setData({
                ...data,
                email: val,
                check_textEmailChange: true
            });
        } else {
            setData({
                ...data,
                email: val,
                check_textEmailChange: false
            });
        }
    }

    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val
        });
    }

    const handleConfirmPasswordChange = (val) => {
        setData({
            ...data,
            confirm_password: val
        });
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const updateConfirmSecureTextEntry = () => {
        setData({
            ...data,
            confirm_secureTextEntry: !data.confirm_secureTextEntry
        });
    }

    const back = (page) =>{
        props.navigation.navigate(page);
    }

    return (
      <View style={styles.container}>
        <StatusBar backgroundColor='#009387' barStyle="light-content"/>
        <View style={styles.header}>
            <Text style={styles.text_header}>Register Now!</Text>
        </View>

        <ScrollView>
        <Text style={styles.text_footer}>Username</Text>
        <View style={styles.action}>
            <TextInput 
                placeholder="Your Username"
                style={styles.textInput}
                autoCapitalize="none"
                onChangeText={(val) => textInputChange(val)}
            />
        </View>

        <Text style={[styles.text_footer, {
            marginTop: 35
        }]}>Password</Text>
        <View style={styles.action}>
            <TextInput 
                placeholder="Your Password"
                secureTextEntry={data.secureTextEntry ? true : false}
                style={styles.textInput}
                autoCapitalize="none"
                onChangeText={(val) => handlePasswordChange(val)}
            />
            
            <Button title="Show password" onPress={updateSecureTextEntry}/>

        </View>

        <Text style={[styles.text_footer, {
            marginTop: 35
        }]}>Confirm Password</Text>
        <View style={styles.action}>
            <TextInput 
                placeholder="Confirm Your Password"
                secureTextEntry={data.confirm_secureTextEntry ? true : false}
                style={styles.textInput}
                autoCapitalize="none"
                onChangeText={(val) => handleConfirmPasswordChange(val)}
            />
            
            <Button title="Show password" onPress={updateConfirmSecureTextEntry}/>
        </View>

        <Text style={[styles.text_footer, {
            marginTop: 35
        }]}>Email</Text>
        <View style={styles.action}>
            <TextInput 
                placeholder="Your Email"
                style={styles.textInput}
                autoCapitalize="none"
                onChangeText={(val) => textEmailChange(val)}
            />
        </View>



        <View style={styles.button}>
            <TouchableOpacity
                style={styles.signIn}
                onPress={() => navigation.goBack()}
            >

            <Text style={[styles.textSign, {
                color:'#fff'
            }]}>Sign Up</Text>

            </TouchableOpacity>
        </View>
        </ScrollView>
      </View>



    );
};

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: Platform.OS === 'ios' ? 3 : 5,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20
    },
    color_textPrivate: {
        color: 'grey'
    }
  });