import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './app/navigation/AppNavigator';
import { StatusBar} from 'react-native';
import Asd from './app/components/Asd';
import Glas from './app/components/glas';

const App = () => {

  const MyTheme = {
    dark: false,
    colors: {
      primary: 'white',
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
    // <Glas />
  );
};

export default App;
