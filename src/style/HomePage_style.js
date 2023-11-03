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
    },
    searchBox:{
        borderWidth:1,
        flexDirection:'row',
        width:334,
        height:44,
        borderRadius:4,
        marginHorizontal:30,
        alignItems:'center',
        marginVertical:10
    },
    searchImg:{
        width:26,
        height:26,
        marginHorizontal:20
    }
})
export default styles;