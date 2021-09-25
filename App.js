import { StatusBar } from 'expo-status-bar';
import React ,{Fragment}from 'react';
import { StyleSheet,  } from 'react-native';
import { mapping, light as lightTheme } from '@eva-design/eva'
import { ApplicationProvider, IconRegistry } from 'react-native-ui-kitten'
import TabNavigator from './src/Navigator/TabNavigator'
import { EvaIconsPack } from '@ui-kitten/eva-icons'


export default function App() {
  return (
    <Fragment>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider mapping={mapping} theme={lightTheme}>
    <TabNavigator />
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
