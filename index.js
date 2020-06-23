/**
 * @format
 */

import { Navigation } from 'react-native-navigation';
// import {AppRegistry} from 'react-native';
import App from './App';
import Settings from './Settings'
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);

Navigation.registerComponent('App', () => App);
Navigation.registerComponent('Settings', () => Settings);

Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'App'
            }
          }
        ]
      }
    }
  });
});