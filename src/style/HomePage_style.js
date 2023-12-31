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
    },
    jobBox:{
        width:335,
        height:48,
        backgroundColor:'#D3D5D8',
        borderRadius:24,
        marginHorizontal:20,
        flexDirection:'row',
        alignItems:'center',
        marginVertical:10,
        paddingLeft:20,
    },
    jobIcon:{
        width:24,
        height:24,

    },
    button:{
        width:70,
        height:70,
        borderRadius:35,
        backgroundColor:'#00BDD6',
        justifyContent:'center',
        alignItems:'center'
    }

})
export default styles;