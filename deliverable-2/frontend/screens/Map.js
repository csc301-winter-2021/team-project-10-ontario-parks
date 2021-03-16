import React, {useState, useEffectt} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
// import * as Location from 'expo-location';

const Map = props =>{

    const[location, setLocation] = useState({lat: 43.663, lng:-79.395});
    // const[error, setError] = useState(null);
    const[ready, setReady] = useState(true);

    // getLocation = async ()=>{

    //     const location = await Location.getCurrentPositionAsync();
    //     setLocation(location);
    //     setReady(true);
    //     console.log(location, error, ready)

    // }


    // useEffect(()=>{
    //     getLocation();
    //     console.log("useEffect end")
    // });
    

    return(

        <View style={styles.container}>
            {ready && (
            <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            region={{
                latitude: location.lat,
                longitude: location.lng,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
              }}
            >
            </MapView>

            )}
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: '100%',
        width: '100%',
      },
      map: {
        ...StyleSheet.absoluteFillObject,
      },
});

export default Map;