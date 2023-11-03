import React from "react";
import { Dimensions, StyleSheet } from "react-native";
const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;
const styles = StyleSheet.create({
    header:{
        flexDirection: "row", 
        justifyContent:'space-between',
        margin:20
    },
    img:{
        width:50,
        height:50,
        borderRadius:25,
        marginRight:10
    }
})
export default styles;