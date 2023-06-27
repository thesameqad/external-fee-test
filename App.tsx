import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import Feed from './app/components/organisms/Feed';

function App(): JSX.Element {

  return (
    <SafeAreaView>
      <Feed />
    </SafeAreaView>
  );
}

export default App;
