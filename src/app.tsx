import { StatusBar, useColorScheme, View } from "react-native";
import { colors } from "src/shared/styles";

export default function App(): React.JSX.Element {

    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
      backgroundColor: isDarkMode ? colors.darker : colors.lighter,
    };

    return (
      <View style={backgroundStyle}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />

      </View>
    );
  }