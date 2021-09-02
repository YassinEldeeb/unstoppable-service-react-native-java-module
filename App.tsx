import React from 'react';
import { Button } from 'react-native';
import BackgroundUpload from './src/BackgroundUploadModule';

const App = () => {
  const javaMethodHandler = async () => {
    const msg = await BackgroundUpload.sayHello('Yassin');
    console.log(msg);
  };

  return <Button title="Click Me" onPress={javaMethodHandler} />;
};

export default App;
