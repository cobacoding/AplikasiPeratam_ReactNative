import React, {useState, useEffect} from 'react';
import {
  View,
  ScrollView
} from 'react-native';
import FlexBox from './pages/FlexBox';
import Position from './pages/Position';
import PropsDinamis from './pages/PropsDinamis';
import SampleComponent from './pages/SampleComponent';
import StateDinamis from './pages/StateDinamis';
import StylingComponent from './pages/StylingComponent';

const App = () => {
  // const [isShow, SetIsShow] = useState(true);
  // useEffect(() => {
  //   setTimeout(() => {
  //     SetIsShow(false);
  //   }, 6000);
  // }, []);
  return (
    <View>
      <ScrollView>
        {/* <SampleComponent />
        <StylingComponent /> */}
        {/* <FlexBox /> */}
        {/* <Position /> */}
        {/* <PropsDinamis /> */}
        <StateDinamis />
      </ScrollView>
    </View>
  )
};

export default App;
