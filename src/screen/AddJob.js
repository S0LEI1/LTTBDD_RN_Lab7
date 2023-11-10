import { View, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "../style/AddJob_style";
import { ArrowLeft, ArrowRight } from "iconsax-react-native";
import { TextInput } from "react-native";
import { Pressable } from "react-native";

const AddJob = ({ navigation, route }) => {
  const user = [route.params.user];
  console.log("user", user);

    const handleSave =() =>{
      fetch("https://6544af2b5a0b4b04436cbd01.mockapi.io/user/1/job", {
      method: "POST",
      headers: { "content-type": "application/json" },
      // Send your data in the request body as JSON
      body: JSON.stringify(
        {
          "name": job
        }
      ),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        // handle error
      })
      .then((task) => {
        // do something with the new task
      })
      .catch((error) => {
        console.log(error);
      });
  
    }

  return (
    <View style={styles.container}>
      {
        <View style={styles.header}>
          <View>
            {user.map((item, index) => {
              return (
                <View key={index} style={{ flexDirection: "row" }}>
                  <Image source={item.avatar} style={styles.img} />
                  <View>
                    <Text>Hello {item.name}</Text>
                    <Text>Have agrate day a head</Text>
                  </View>
                </View>
              );
            })}
          </View>
          <ArrowLeft color="black" />
        </View>
      }
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 32, fontWeight: "700", marginBottom: 15 }}>
          ADD YOUR JOB
        </Text>
        <View style={styles.jobBox}>
          <Image resizeMode="stretch" style={styles.jobIcon} />
          <TextInput
            placeholder="Input your job"
            onChangeText={(text)=>{
              setJob(text);
            }}
          />
        </View>
        <Pressable
          style={styles.button}
          onPress={() =>
          {
            handleSave()
            navigation.navigate("Home", {
              name: data.name,
            })
          }
          }
        >
          <Text style={{ color: "white" }}>Finish</Text>
          <ArrowRight style={{ color: "white" }} />
        </Pressable>
        <Image
          source={require("../../assets/jobImg.png")}
          resizeMode="stretch"
          style={{ width: 190, height: 170, marginTop: 50 }}
        />
      </View>
    </View>
  );
};

export default AddJob;
