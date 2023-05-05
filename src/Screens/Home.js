import React, { useState } from 'react'
import { View, Text, ImageBackground, StyleSheet, SafeAreaView, TextInput, Image } from 'react-native'
//import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';
import img1 from '../../assets/1.jpg';
import img2 from '../../assets/2.jpg';
import img3 from '../../assets/3.jpg';
import img4 from '../../assets/4.jpg';
import img5 from '../../assets/5.jpg';
import img6 from '../../assets/6.jpg';
import img7 from '../../assets/7.jpg';

const images = [img1, img2, img3, img4, img5, img6, img7];

const Home = () => {

    const [city, setCity] = useState("");
    const [weather, setWeather] = useState({});
    const [randomImage, setRandomImage] = useState(images[1]);

    const API = '000ef1ff4e001b5564aad4bb9cb77a63';
    const getWeather = async () => {
        if (!city.trim()) {return}

        try {
            const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}`)
            setWeather(res.data);
            //Random background in view
            const n = Math.floor(Math.random() * images.length);
            console.log(n)
            setRandomImage(images[n]);
        } catch (error) {
            alert("Verify the name of your city!");
        }
    }

    return (
        <ImageBackground source={randomImage} style={styles.image}>
            <SafeAreaView style={{flex: 1}}>
                <View style={styles.textInputContainer}>
                    <TextInput 
                        style={styles.textInput}
                        value={city}
                        placeholder="Choose your city"
                        onChangeText={(text) => setCity(text)}
                        
                    />
                    <Ionicons 
                        onPress={() => getWeather()}
                        name="search" size={24} color="black" 
                    />
                </View>

                {Object.keys(weather).length > 0 ? 
                <>
                    <View style={styles.locationContainer}>
                        <Text style={styles.location}>
                            {weather?.name}, {weather?.sys?.country}
                        </Text>
                    </View>

                    <View style={styles.weatherContainer}>
                        <Text style={styles.temp}>
                            {Math.round(weather.main.temp)} °C
                        </Text>
                    </View>
                    <View style={styles.iconContainer}>
                        <Text style={styles.weather}>
                            {weather.weather[0].main}
                        </Text>
                        <Image
                            style={styles.icon}
                            source={{
                            uri: `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`,
                            }}
                        />
                    </View>
                </>
                : null}


            </SafeAreaView>
        
        </ImageBackground>
    )
}

export default Home

const styles = StyleSheet.create({
    image: {
        flex: 1,
    },
    textInputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: "rgba(255, 255, 255, 0.7)",
        alignItems: 'center',
        alignContent: "center",
        alignSelf: "center",
        borderRadius: 10,
        paddingHorizontal: 10,
        marginTop: 10,
        width: "50%",

    },
    textInput: {
        height: 40,
        width: "80%",
        fontWeight: '600',
    },
    locationContainer: {
        marginVertical: 15,
    },
    location: {
        color: "#ffffff",
        fontSize: 35,
        fontWeight: '500',
        textAlign: "center",
        textShadowColor: "rgba(0, 0, 0, 0.55)",
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 5,
    },
    weatherContainer: {
        alignItems: "center",
    },
    temp: {
        textAlign: "center",
        color: "#ffffff",
        fontSize: 100,
        fontWeight: "800",
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        paddingVertical: 20,
        paddingHorizontal: 30,
        borderRadius: 30,
        overflow: "hidden",
        marginTop: 10,
        marginStart: 20,
        marginEnd: 20,
        textShadowColor: "rgba(0, 0, 0, 0.75)",
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10,
    },

    iconContainer: {
        alignItems: 'center',
        alignContent: "center",
        alignSelf: "center",
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    weather: {
        color: "#ffffff",
        fontSize: 48,
        fontWeight: "800",
        textShadowColor: "#000000",
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 0.7,
        marginTop: 10,
    },
    icon: {
      width: 80,
      height: 80,
      marginTop: 15,
    },
  });