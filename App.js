import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './app/navigation/AppNavigator';
import { StatusBar} from 'react-native';
import Asd from './app/components/Asd';

const App = () => {

  const MyTheme = {
    dark: false,
    colors: {
      primary: '19191b',
      background: '#19191b',
      card: '#000000',
      text: 'white',
      border: '#19191b',
      notification: '19191b',
    },
  };

  return (
    <NavigationContainer theme={MyTheme}>
      <StatusBar />
      <AppNavigator/>
    </NavigationContainer>
    // <Asd />
  );
};

export default App;
