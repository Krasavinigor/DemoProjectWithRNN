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
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import CodePush from "react-native-code-push";

const Settings = () => {
  return (
    <>
      <View style={styles.root}>
        <Text>Update isn't installed by CodePush</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke'
  }
});


let codePushOptions = { checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME, installMode: CodePush.InstallMode.IMMEDIATE };


export default CodePush(codePushOptions)(Settings);