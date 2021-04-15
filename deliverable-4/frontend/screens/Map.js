import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import * as Location from 'expo-location';
import * as Speech from 'expo-speech';

//backend server will run at localhost:3000
//To run the app correctly you have to:
//1. Make sure your mobile device and computer(device that run the server) are connected to a same wifi
//2. Change The URL below such that the IP address of the URL is your computer's IP address
// Make sure you run the server before run the app
const URL = "http://192.168.1.70:3000"

var buildings_test = {};  // recording all the buliding list for finding the nearest
var location_test = {};  // recording the current user's location
var nearest_test = {};  // recording the nearest place from the user
var nearest_dis = -1;  // recording the nearest place's distance from the user
var ifStarted = false; // recording if start button is pressed

const Map = ({navigation}) => {

  // used in OnStart for finding the nearest
  function checkDistance(item) {
    const res = getDistanceFromLatLonInKm(location_test.lat, location_test.lng, item.lat, item.lng);
    if (nearest_dis == -1) {
      nearest_dis = res;
      nearest_test = item;
    } else if (res < nearest_dis) {
      nearest_dis = res;
      nearest_test = item;
    }
    return res;
  }

  // used in OnStart for finding the nearest
  function deleteItem(item) {
    return item.name != nearest_test.name;
  }

  // handle "test_start" button
  const onStart = (text) => {

    ifStarted = true;

    // for loop to find nearest building
    const nearest = buildings_test.filter(checkDistance);

    const dis = getDistanceFromLatLonInKm(location_test.lat, location_test.lng, nearest.lat, nearest.lng);

    text = "There is a place called " + nearest_test.name;
    text = text + " which is " + Math.round(nearest_dis).toString() + "kilometers from you";

    // delete current nearest from buildings_test (doing this for next button)
    buildings_test = buildings_test.filter(deleteItem);

    //Speech.speak('text', options);
    Speech.speak(text,{
      language: 'en',
      pitch: 1,
      rate: 1
    })
  }

  function checkDistance(item) {
    const res = getDistanceFromLatLonInKm(location_test.lat, location_test.lng, item.lat, item.lng);
    if (nearest_dis == -1) {
      nearest_dis = res;
      nearest_test = item;
    } else if (res < nearest_dis) {
      nearest_dis = res;
      nearest_test = item;
    }
    return res;
  }

  // handle "test_next" button
  const onNext = (text) => {

    if (ifStarted == false) {
      Speech.speak("please press start button first",{
        language: 'en',
        pitch: 1,
        rate: 1
      })
      return;
    } else if (buildings_test.length == 0) {
      Speech.speak("no more places can be found, please try start button again",{
        language: 'en',
        pitch: 1,
        rate: 1
      })
      ifStarted = false;
      return;
    }

    nearest_dis = -1

    // for loop to find nearest building
    const nearest = buildings_test.filter(checkDistance);

    const dis = getDistanceFromLatLonInKm(location_test.lat, location_test.lng, nearest.lat, nearest.lng);

    text = "There is another place called " + nearest_test.name;
    text = text + " which is " + Math.round(nearest_dis).toString() + "kilometers from you";

    buildings_test = buildings_test.filter(deleteItem);

    //Speech.speak('text', options);
    Speech.speak(text,{
      language: 'en',
      pitch: 1,
      rate: 1
    })
  }

  // ################################################################
  // helper function for calculating distance
  function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2-lat1);  // deg2rad below
    var dLon = deg2rad(lon2-lon1); 
    var a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2)
      ; 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c; // Distance in km
    return d;
  }

  function deg2rad(deg) {
    return deg * (Math.PI/180)
  }
  // ################################################################


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

      let info_ = {
        lat: location.lat,
        lng: location.lng
      }
      if (navigation.state.params){
        info_ = {
          lat: location.lat,
          lng: location.lng,
          email: navigation.state.params.email
        }
      }


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
        body: JSON.stringify(info_)
      });
      let buildings_ = await res.json()
      setBuildings(buildings_)
      // console.log(buildings)
      // console.log(info_)
      console.log("ready!")

      buildings_test = buildings_;
      location_test = location_;

      setReady(true);
    })();
  }, []);

  const goToDetail = (attraction) => {
    console.log(attraction)
    if (attraction) {
        navigation.navigate('AttractionDetail', {
            attraction: attraction
        })
    }
}

  return(

    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => { onStart() }}>
        <Text style={styles.loginText}>Test start</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => { onNext() }}>
        <Text style={styles.loginText}>Test next</Text>
      </TouchableOpacity>
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
                <Callout onPress={() => goToDetail(obj)}>
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
    // ...StyleSheet.absoluteFillObject,
  },
  button: {
        width: "40%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "aliceblue",
      }
});

export default Map;