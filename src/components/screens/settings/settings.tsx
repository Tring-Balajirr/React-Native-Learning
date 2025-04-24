import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from 'src/navigations/screenNavigation';

type SettingScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Settings'>;

interface SettingScreenProps {
    navigation: SettingScreenNavigationProp;
  }

const SettingScreen: React.FC<SettingScreenProps> = ({ navigation }) => {
    return(
        <View style = {styles.container}>
            <Text>Settings Screen</Text>
            <Button
                title='Go to Profile Page'
                onPress={()=>navigation.navigate('Profile')}/>
            <Button
                title='Go Back to Home'
                onPress={()=>navigation.goBack()}/>
        </View>
    );
};
export default SettingScreen;
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
