import React from 'react';
import { Button } from 'react-native';
import { NativeModules } from 'react-native';

const { BackgroundUpload } = NativeModules;

const App = () => {
  return (
    <Button
      title="Click Me"
      onPress={() => {
        BackgroundUpload.sayHello('Yassin', (err: Error, name: string) => {
          console.log(name);
        });
      }}
    />
  );
};

export default App;
