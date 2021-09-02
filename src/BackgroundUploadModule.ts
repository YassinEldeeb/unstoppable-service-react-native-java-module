import { NativeModules } from 'react-native';

interface BackgroundUploadInterface {
  sayHello: (name: string) => Promise<string>;
}

const { BackgroundUpload } = NativeModules;
export default BackgroundUpload as BackgroundUploadInterface;
