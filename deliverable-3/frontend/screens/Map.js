import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';

const Map = props => {

  const [location, setLocation] = useState({ lat: 43.663, lng: -79.395 });
  const [error, setError] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    (async () => {
      // request permissions
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
        setError('Permission to access location was denied')
        return;
      }

      // get location
      let { coords } = await Location.getCurrentPositionAsync({});
      let location_ = {
        lng: coords.latitude,
        lat: coords.longitude
      }
      // setLocation(location_);
      console.log(location_);

      /**
       * get array of object with building info
       * object has attributes lat, lng, name, info
       */
      let res = await fetch('http://10.0.236.10:3000/attractions', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(location)
      });
      let buildings = await res.json()
      console.log(buildings)

      setReady(true);
    })();
  }, []);


  return (

    <View style={styles.container}>
      {ready && (
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={{
            latitude: location.lng,
            longitude: location.lat,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
        </MapView>
      )}

      {
        error != null && (
          <Text>
            {error}
          </Text>
        )
      }
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