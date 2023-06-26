import React from 'react';
import {Text} from 'react-native';
import {
  App as CreateApp,
  Pressable,
  Screen,
  View,
  Debugger as CreateDebugger,
} from '@flexn/create';

function Content() {
  return (
    <Screen>
      <View>
        <Pressable
          onFocus={() => {
            console.log('focus...');
          }}>
          <Text>Hello from button</Text>
        </Pressable>
        <Pressable>
          <Text>Hello from button</Text>
        </Pressable>
        <Pressable>
          <Text>Hello from button</Text>
        </Pressable>
      </View>
    </Screen>
  );
}

function App(): JSX.Element {
  return (
    <CreateApp style={{flex: 1}}>
      <Content />
      <CreateDebugger />
    </CreateApp>
  );
}
export default App;
