import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, {useState} from 'react';

export default function App() {
  const [number, setNumber] = useState(0)
  return (
    <View style={styles.container}>
      <View style={styles.cityCon}>
        <Text style={styles.city}>Busan</Text>
      </View>
      <View style={styles.weatherCon}>
        <View style={styles.day}>
          <Text style={styles.regDate}>3월 13일, 일, 15:05</Text>
          <Text style={styles.desc}>맑음</Text>
        </View> 
        <View style={styles.tempCon}>
          <Text style={styles.temp}>24</Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe01a',
  },
  cityCon: {
    flex: 1,
  },
  city: {
    flex: 1,
    marginTop : 50,
    fontSize : 40,
    textAlign: "center",
    fontWeight : "bold",
    paddingTop : 20,
  },
  weatherCon : {
    flex : 3,
  },
  day:{
    flex : 0.2,
    alignItems : "center",
    justifyContent : "center"
  },
  regDate : {
    paddingTop : 10,
    paddingLeft : 20,
    paddingRight : 20,
    paddingBottom : 15,
    backgroundColor : "black",
    color : "white",
    borderRadius : 20,
    fontWeight : "bold"
  },
  desc : {
    marginTop : 20,
    fontSize : 20,
    fontWeight : "bold",


  },
  tempCon : {
    flex : 0.3,
    alignItems : "center",
    justifyContent : "center",
    

  },
  temp: {
    fontSize : 120,
  }

});
