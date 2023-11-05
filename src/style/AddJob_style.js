import React from "react";
import { Dimensions, StyleSheet } from "react-native";
const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
      },
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
    jobBox:{
        width:335,
        height:48,
        borderRadius:5,
        marginHorizontal:20,
        flexDirection:'row',
        alignItems:'center',
        marginVertical:50,
        paddingLeft:20,
        borderWidth:1,
        borderColor:'#9095A0'
    },
    jobIcon:{
        width:24,
        height:24,

    },
    button:{
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        width:190,
        height:44,
        backgroundColor:'#00BDD6',
        borderRadius:15
    }
})
export default styles;