import tabConfig from './tabConfig';

const ScreenOption = ({ route }: any) => {
  const routeConfig = tabConfig.find(config => config.name === route.name);
  console.log('routeName',route.name)
  console.log('routeConfigg',routeConfig)

  return {
    tabBarIcon: ({ focused, color, size }:any) => {
      if (!routeConfig) return null;

      const iconName = focused ? routeConfig.focusedIcon : routeConfig.unfocusedIcon;
      const IconComponent = routeConfig.iconComponent;

      return <IconComponent name={iconName} size={size} color={color} />;
    },
    tabBarActiveTintColor: '#0163d2',
    tabBarInactiveTintColor: 'red',
    tabBarLabelStyle: {
      fontSize: 14,
      paddingBottom: 5,
      fontWeight: '600',
    },
    tabBarStyle: {
      height: 60,
      padding: 0,
    },
  };
};

export default ScreenOption;