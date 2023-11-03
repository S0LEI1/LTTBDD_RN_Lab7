import { View, Text, Image, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import styles from "../style/LandingPage_style";
import { ArrowRight } from "iconsax-react-native";


const LandingPage = ({navigation, route}) => {
  const [name, setName] = useState('');
  return (
    <View style={styles.container}>
        <View></View>
      <Text style={styles.text1}>MANAGE YOUR TASK</Text>
      <View style={styles.wrapper} >
        <Image style={styles.img} source={require('../../assets/Frame.png')} resizeMode="stretch" />
        <TextInput placeholder="Enter your name" value={name} onChangeText={setName} />
      </View>
      <Pressable 
        onPress={()=>{
            navigation.navigate('Home',{
              name: name
            })
        }}
      style={[styles.button]}>
        <Text style={styles.text2}>Get started</Text>
        <ArrowRight color="white" />
      </Pressable>
    </View>
  );
};

export default LandingPage;
