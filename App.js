import React from 'react';
import {
  View,
  ScrollView
} from 'react-native';
import matebook from './images/matebook.png';
import SampleComponent from './SampleComponent';
import StylingReactNativeComponent from './StylingReactNativeComponent';

const App = () => {
  return (
    <View>
      <ScrollView>
        <SampleComponent />
        <StylingReactNativeComponent />
      </ScrollView>
    </View>
  )
};

export default App;
