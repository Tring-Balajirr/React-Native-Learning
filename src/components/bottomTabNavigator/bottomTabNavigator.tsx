import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import { colors } from 'src/shared/styles';


const CustomBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.tabBar}>
        <TouchableOpacity>
          <View style={styles.tabItem}>
            <Ionicons name="rocket-outline" size={24} color='white' />
            <Text style={styles.textStyle}>Socialz</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity >
          <View style={styles.tabItem}>
            <Ionicons name="book-outline" size={24} color='white' />
            <Text style={styles.textStyle}>Education</Text>
          </View>
        </TouchableOpacity>

        {/* <TouchableOpacity >
          <View style={styles.addButton}>
            <Entypo name="plus" size={32} color="white" />
          </View>
        </TouchableOpacity> */}

        <TouchableOpacity >
          <View style={styles.tabItem}>
            <FontAwesome5 name="store" size={22} color='white' />
            <Text style={styles.textStyle}>Marketplace</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity >
          <View style={styles.tabItem}>
            <Ionicons name="briefcase-outline" size={24} color='white' />
            <Text style={styles.textStyle}>Classify</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomBar;

const styles = StyleSheet.create({
    container:{
        position: 'absolute',
        maxHeight: 80,
        bottom: 0,
        left: 0,
        right: 0,
    },
    tabBar:{
        width: '100%',
        flexDirection: 'row',
        // backgroundColor:'black',
    },
    tabItem:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: 'green',
        flex: 1,
        height:50,
    },
    addButton:{
        backgroundColor:'green',
        borderRadius: 40,
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 70
    },
    textStyle: {
        color: colors.darker,
        fontSize: 14,
        fontWeight: 700,
    }
})
