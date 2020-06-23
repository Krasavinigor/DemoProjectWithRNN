/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Navigation } from 'react-native-navigation';

const App = (props) => {
  return (
    <>
      <View style={styles.root}>
        <Text>Hello React Native Navigation 👋</Text>
        <Button
          title='Push Settings Screen'
          color='#710ce3'
          onPress={() => Navigation.push(props.componentId, {
            component: {
              name: 'Settings',
              options: {
                topBar: {
                  title: {
                    text: 'Settings'
                  }
                }
              }
            }
          })} />
      </View>
    </>
  );
};

App.options = {
  topBar: {
    title: {
      text: 'App',
      color: 'white'
    },
    background: {
      color: '#4d089a'
    }
  }
};


const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke'
  }
});

export default App;
