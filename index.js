/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from './src/routes';

if (__DEV__) {
  require('./Reactotron');
}

AppRegistry.registerComponent(appName, () => App);
