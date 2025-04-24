import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import HomeScreen from '../components/screens/home/homeScreen';
import ProfileScreen from '../components/screens/profile/profileScreen';
import SettingScreen from '../components/screens/settings/settings';

const tabConfig=[
    {
        name:'Home',
        component:HomeScreen,
        focusedIcon:'home',
        unfocusedIcon:'home-outline',
        iconComponent:Ionicons,
    },
    {
        name:'Profile',
        component:ProfileScreen,
        focusedIcon:'user',
        unfocusedIcon:'user-o',
        iconComponent:FontAwesome,
    },
    {
        name:'Settings',
        component:SettingScreen,
        focusedIcon:'settings',
        unfocusedIcon:'settings-outline',
        iconComponent:Ionicons,
    },
]

export default tabConfig;