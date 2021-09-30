import { StatusBar } from 'expo-status-bar';
import React ,{Fragment,useState}from 'react';
import { StyleSheet,  } from 'react-native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from 'react-native-ui-kitten'
import TabNavigator from './src/Navigator/TabNavigator'
import { EvaIconsPack } from '@ui-kitten/eva-icons'
import AppLoading from 'expo-app-loading';
import useFonts from './hooks/useFonts';
import { default as mapping } from './mapping.json';
import Firebase, { FirebaseProvider } from './src/utils'

export default function App() {
  const [IsReady, SetIsReady] = useState(false);

  const LoadFontsAndRestoreToken = async () => {
    await useFonts();
  };

  if (!IsReady) {
    return (
      <AppLoading
        startAsync={LoadFontsAndRestoreToken}
        onFinish={() => SetIsReady(true)}
        onError={() => {console.log('gweew')}}
      />
    );
  }

  console.disableYellowBox = true;
  return (
    <Fragment>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider 
    {...eva}
    theme={{ ...eva.dark, ... eva.light }}
    customMapping={mapping}>
    <FirebaseProvider value={Firebase}>
        <TabNavigator />
      </FirebaseProvider>
  </ApplicationProvider>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
