import React from "react";
import { Dimensions, StyleSheet } from "react-native";
const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-around',
      },
      wrapper:{
        borderWidth:1,
        marginHorizontal:20,
        width:screenWidth-40,
        height:43,
        borderRadius:12,
        alignItems:'center',
        flexDirection:'row'
      },
      img:{
        width:40,
        height:40,
        marginHorizontal:20
      },
      button:{
        width:190,
        height:45,
        backgroundColor:'#00BDD6',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:12
      },
      text1:{
        marginHorizontal:100,
         textAlign:'center',
         fontWeight:'700',
         fontSize:24,
         color:'#8353E2'
      },
      text2:{
        fontSize:16,
        fontWeight:400,
        color:'white',
        marginRight:10
      }
})
export default styles;