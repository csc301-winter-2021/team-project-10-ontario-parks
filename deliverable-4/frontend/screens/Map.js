import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import * as Location from 'expo-location';
import * as Speech from 'expo-speech';
import Voice from 'react-native-voice';

//backend server will run at localhost:3000
//To run the app correctly you have to:
//1. Make sure your mobile device and computer(device that run the server) are connected to a same wifi
//2. Change The URL below such that the IP address of the URL is your computer's IP address
// Make sure you run the server before run the app
const URL = "http://192.168.8.153:3000"

const Map = ({navigation}) => {
  const GOOD_DISTANCE = 900; // km, 900 is for testing the correctness of the code. should be 3
  const [isStart, setIsStart] = useState(false);
  const [location, setLocation] = useState({ lat: 43.663, lng: -79.395 });//default value Uoft
  const [error, setError] = useState(null);
  const [ready, setReady] = useState(false);
  const [buildings, setBuildings] = useState([]);
  const [nearestBuilding, setNearestBuilding] = useState(null);
  const [seenBuildings, setSeenBuildings] = useState([]);
  const [startStopBtn, setStartStopBtn] = useState("START");


  // const startVoice=()=>{
  //   // voice recognizing
  //   var speechResults = Voice.onSpeechResults();
  //   var userVoice = JSON.stringify(speechResults).toLocaleLowerCase;
  //   console.log(userVoice)
  //   if (userVoice === 'yes') {
  //     // text-to-speech
  //     Speech.speak(findNearestBuilding(),{
  //       language: 'en',
  //       pitch: 1,
  //       rate: 1
  //     })
  //   } else if (userVoice === 'no') {
  //     // provide next hook
  //     Speech.speak(findNearestBuilding(),{
  //       language: 'en',
  //       pitch: 1,
  //       rate: 1
  //     })
  //   } else if (userVoice === 'stop') {
  //     // stop listening user audio
  //     Voice.stop();
  //     Voice.removeAllListeners();
  //     // delete current nearest from buildings_test (doing this for next button)
  //     buildings_test = buildings_test.filter(deleteItem);
  //   } else if (userVoice === 'continue') {
  //     // start listening user audio
  //     Voice.start('en-US');
  //   }
  // }
  

  // handle "test_next" button
  const onNext = async () => {
    Speech.stop()
    let text = ""

    if (buildings.length === 0) {
      Speech.speak("no more places can be found",{
        language: 'en',
        pitch: 1,
        rate: 1
      })
      setIsStart(false);
      return;
    }

    let result = await findNearestBuildingNotSeen();
    console.log(result)
    console.log("========================")
    console.log(nearestBuilding)

      //if theres no Building that not seen
      if(result.attraction === null){
        text = "You have seen all the attractions information"
      
      }
      // nearestBuilding is GOOD_DISTANCE away from user
      else if(result.distance > GOOD_DISTANCE){
        text = "There is no attraction in this area"
      
      }
      else{
        text = "There is another place called " + result.attraction.name;
        text = text + " which is " + Math.round(result.distance).toString() + "kilometers from hear";
      }
      //Speech.speak('text', options);
      Speech.speak(text,{
        language: 'en',
        pitch: 1,
        rate: 1
      })
  }

  const stopSpeech = () =>{
    Speech.stop()
  }
  // ###################
  // pause and resume not available on Android
  const pauseSpeech = () =>{
    Speech.pause()
  }
  const resumeSpeech = () =>{
    Speech.resume()
  }
    // ###################
  const onDetail = () =>{
    if (nearestBuilding){
      let text = nearestBuilding.attraction.description
      Speech.speak(text,{
        language: 'en',
        pitch: 1,
        rate: 1
      })
    }
  }
  async function updateUserLocation(){
      // update user current location
      let { coords } = await Location.getCurrentPositionAsync({});
      let location_ = {
        lat: coords.latitude,
        lng: coords.longitude
      }
      setLocation(location_);
  }
  async function findNearestBuildingNotSeen() {

      await updateUserLocation();

      let notSeen = buildings.filter(attraction => !seenBuildings.includes(attraction) )
      console.log("NOTSEEN")
      console.log(notSeen)
      let nearest = null
      let nearest_distance = -1
      notSeen.forEach((attraction) =>{
        let d = getDistanceFromLatLonInKm(location.lat, location.lng, attraction.lat, attraction.lng)
        if (nearest_distance === -1){
          nearest_distance = d
          nearest = attraction
        }
        else if(d<nearest_distance){
          nearest_distance = d
          nearest = attraction
        }
      })
      if(nearest !== null){
        //set the Nearest attraction
        setNearestBuilding({
          attraction: nearest,
          distance: nearest_distance
        })
        //update the seen buildings
        const new_seen = seenBuildings
        new_seen.push(nearest)
        setSeenBuildings(new_seen)
      }
      else{
        setNearestBuilding(null)
      }
      return {attraction: nearest, distance: nearest_distance}
    
  }


  // // ################################################################
  // // helper function for calculating distance
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
  // // ################################################################


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
      setBuildings(await res.json())
      setIsStart(false);
      setSeenBuildings([]);
      setReady(true);
      setNearestBuilding(null);
      setIsStart(false)
      setStartStopBtn("START")
      console.log("ready!")
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

  const startAndStop = ()=>{
    if(isStart){
      stopSpeech()
      setIsStart(false)
      setStartStopBtn("START")
    }
    else{
      setIsStart(true)
      onNext()
      setStartStopBtn("STOP")
    }
  }
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

        <TouchableOpacity disabled={!isStart} style={styles.nextbutton} onPress={() => { onNext() }}>
            <Text style={styles.loginText}>Next</Text>
          </TouchableOpacity>
          <TouchableOpacity disabled={!isStart} style={styles.detailbutton} onPress={() => { onDetail() }}>
              <Text style={styles.loginText}>Detail</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ssbutton} onPress={() => { startAndStop() }}>
            <Text style={styles.loginText}>{startStopBtn}</Text>
        </TouchableOpacity>
  </View>);
}

const styles = StyleSheet.create({
  container: {
      ...StyleSheet.absoluteFillObject,
      height: '100%',
      width: '100%',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
    button: {
          width: "40%",
          borderRadius: 25,
          height: 50,
          alignItems: "center",
          justifyContent: "center",
          marginTop: 40,
          backgroundColor: "aliceblue",
    },
    ssbutton: {
      width: "25%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginLeft: 'auto',
      marginRight: 10,
      marginBottom: 10,
      backgroundColor: "aliceblue",
    },
    nextbutton: {
      width: "25%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 'auto',
      marginLeft: 'auto',
      marginRight: 10,
      marginBottom: 10,
      backgroundColor: "aliceblue",
    },
    detailbutton: {
      width: "25%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginLeft: 'auto',
      marginRight: 10,
      marginBottom: 10,
      backgroundColor: "aliceblue",
    }
})

export default Map;
