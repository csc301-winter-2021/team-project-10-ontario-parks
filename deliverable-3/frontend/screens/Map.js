import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import * as Location from 'expo-location';

const URL = "http://192.168.8.153:3000"

const Map = props => {

  const [location, setLocation] = useState({ lat: 43.663, lng: -79.395 });
  const [error, setError] = useState(null);
  const [ready, setReady] = useState(false);
  const [buildings, setBuildings] = useState([]);
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
        lat: coords.latitude,
        lng: coords.longitude
      }
      setLocation(location_);
      console.log(location);

      /**
       * get array of object with building info
       * object has attributes lat, lng, name, info
       */
      let url_attractions = URL.concat("/attractions")
      let res = await fetch(url_attractions, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(location)
      });
      let buildings_ = await res.json()
      setBuildings(buildings_)
      console.log(buildings)

      setReady(true);
    })();
  }, []);


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
          {buildings.map((obj, index)=> <Marker
            key={index}
            coordinate={{
              latitude: parseFloat(obj.lat),
              longitude: parseFloat(obj.lng)
            }}
            >
              <Callout>
                <Text>{obj.name}</Text>
              </Callout>
            </Marker>
          )}
          <Marker   
            title={"current position"}         
            coordinate={{
              latitude: parseFloat(location.lat),
              longitude: parseFloat(location.lng)
            }}
            pinColor={'#00ffff'}
            />
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

