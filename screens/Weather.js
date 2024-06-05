import { StyleSheet, Text, View, ImageBackground,Image} from "react-native";
import { useEffect, useState } from "react";

import { db, ref, onValue } from "../firebase";

import background from "../assets/background3.png";
import cloudy from "../assets/cloudy.png";
import wind from "../assets/winds.png";
import hum from "../assets/humidity.png";

const Weather = () => {
  const [temp, setTemp] = useState(80);
  const [humidity, setHumidity] = useState(64);
  const [pressure, setPressure] = useState(22);

  useEffect(() => {
    const data = ref(db);

    onValue(data, (snapshot) => {
      setTemp(Math.round(snapshot.val().temp));
      setHumidity(Math.round(snapshot.val().humid));
      setPressure(Math.round(snapshot.val().pressure));
    });
  }, [db]);
  return (
    <ImageBackground source={background} style={styles.container}>
      <View style={styles.tempWrapper}>
      <Text style={{fontSize:50,color:"rgba(255, 255, 255, 0.8)"}}>Current Weather</Text>
      <Image source={cloudy} style={{width:100,height:100}}></Image>
        <Text style={styles.text}>{Math.round((temp - 32) / 1.8)} °C</Text>
      </View>
      <View style={styles.data}>
        <View style={styles.spacer}></View>
        <View style={styles.dataWrapper}>
          <View style={styles.humid}>
          <Image source={hum} style={{width:40,height:40,marginBottom:10}}></Image>
            <Text style={styles.dataText}>{humidity} %</Text>
            <Text style={styles.title}>Humidity</Text>
          </View>
          <View style={styles.pressure}>
          <Image source={wind} style={{width:40,height:40,marginBottom:10}}></Image>
            <Text style={styles.dataText}>{pressure} Km/h</Text>
            <Text style={styles.title}>Wind Speed</Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Weather;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    width:'auto',
    height:'auto',
  },
  tempWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems:'center',
    backgroundColor:"rgba(255, 255, 255, 0.01)",
    borderRadius:50,
  },
  text: {
    fontSize: 100,
    fontWeight: "100",
    textAlign: "right",
    color: "white",
    paddingRight: 35,
  },
  data: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  spacer: {
    height: "30%",
  },
  dataWrapper: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    flexDirection: "row",
    height: "30%",
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "white",
  },

  humid: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  pressure: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  dataText: {
    fontSize: 20,
    fontWeight: "200",
    color: "white",
    textAlign: "center",
    fontFamily: "Helvetica",
  },
  title: {
    fontSize: 12,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    fontFamily: "Helvetica",
  },
});
