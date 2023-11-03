import { View, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { ArrowLeft } from "iconsax-react-native";

const HomePage = () => {
    const item = undefined;
  var [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://6544af2b5a0b4b04436cbd01.mockapi.io/user")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json);
        item = json[0];
      });
  }, []);
  console.log("data", data);
        console.log("item", item);
  return (
    
    <View>
      <View>
        
        <ArrowLeft color="black" />
        <View>
            {/* <Image source={item.avatar} style={{width:100, height:100}}/> */}
        </View>
      </View>
      <View>
        {
            data.map((item) =>(
                <View key={item.id}>
                    <Image source={item.avatar} style={{width:100, height:100}} resizeMode="stretch" />
                </View>
            ))
        }
      </View>
    </View>
  );
};

export default HomePage;
