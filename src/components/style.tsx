import React from "react";
import { StyleSheet, Text, View } from "react-native";

const LotsOfStyle = () =>{
    return(
        <View style={styles.container}>
            <Text style={styles.bigBlue}> just BigBlue </Text>
            <Text style={styles.red}> just red</Text>
            <Text style={[styles.bigBlue, styles.red]}>bigBlue, then red</Text>
            <Text style={[styles.red, styles.bigBlue]}>red, then bigBlue</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        marginTop:50,
    },
    bigBlue: {
        color: 'blue',
        fontWeight:'bold',
        fontSize:30
    },
    red:{
        color:'red'
    }
})