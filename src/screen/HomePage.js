import { View, Text, Image, TextInput, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { ArrowLeft } from "iconsax-react-native";
import styles from "../style/HomePage_style";

const HomePage = ({ route }) => {
  const { name } = route.params;
  console.log("name:", name);
  var [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://6544af2b5a0b4b04436cbd01.mockapi.io/user")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json);
      });
  }, []);
  console.log("data", data);
  return (
    <View>
      <View style={styles.header}>
        <ArrowLeft color="black" />
        <View>
          {data.map((item) => {
            return (
              <View key={item.id} style={{ flexDirection: "row" }}>
                <Image source={item.avatar} style={styles.img} />
                <View>
                  <Text>Hello {item.name}</Text>
                  <Text>Have agrate day a head</Text>
                  
                </View>
              </View>
            );
          })}
        </View>
      </View>
      <View style={styles.searchBox}>
        <Image
          style={styles.searchImg}
          source={require("../../assets/search.png")}
          resizeMode="stretch"
        />
        <TextInput placeholder="Search" />
      </View>
      <View>
        {
          data.map((item)=>{
            item.map((i)=>(
              <View>
                <Text>{i.name}</Text>
              </View>
            ))
          })
        }
      </View>
    </View>
  );
};

export default HomePage;
