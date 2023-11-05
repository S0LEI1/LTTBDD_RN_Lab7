import {
  View,
  Text,
  Image,
  TextInput,
  FlatList,
  Pressable,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { ArrowLeft } from "iconsax-react-native";
import styles from "../style/HomePage_style";
import { useIsFocused } from "@react-navigation/native";

const HomePage = ({ navigation, route }) => {
  const { name } = route.params;
  const [user, setUser] = useState([]);
  var [job, setJob] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    getUser();
  }, []);
  useEffect(() => {
    getJobs();
  }, [isFocused]);
  const getUser = () => {
    const url = new URL("https://6544af2b5a0b4b04436cbd01.mockapi.io/user");
    url.searchParams.append("name", name);

    fetch(url, {
      method: "GET",
      headers: { "content-type": "application/json" },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        // handle error
      })
      .then((user) => {
        setUser(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const getJobs = () => {
    fetch("https://6544af2b5a0b4b04436cbd01.mockapi.io/user/1/job", {
      method: "GET",
      headers: { "content-type": "application/json" },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        // handle error
      })
      .then((job) => {
        setJob(job);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log(name);
  console.log("user:", user);
  console.log("job:", job);
  return (
    <View>
      <View style={styles.header}>
        <ArrowLeft color="black" />
        <View>
          {user.map((item) => {
            if (item.name == name)
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
        {job.map((item) => (
          <View key={item.id} style={styles.jobBox}>
            <View style={{ flexDirection: "row" }}>
              <Image
                style={styles.jobIcon}
                source={require("../../assets/check.png")}
                resizeMode="stretch"
              />
              <TextInput value={item.name} selectTextOnFocus={false} />
            </View>
            <Pressable style={{ right: 20, position: "absolute" }}>
              <Image
                style={[styles.jobIcon]}
                source={require("../../assets/edit.png")}
                resizeMode="stretch"
              />
            </Pressable>
          </View>
        ))}
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 30,
        }}
      >
        <Pressable
          onPress={() =>
            navigation.navigate("AddJob", {
              user,
            })
          }
          style={styles.button}
        >
          <Image
            source={require("../../assets/plus.png")}
            resizeMode="stretch"
            style={{ width: 32, height: 32 }}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default HomePage;
