import { NativeModules } from 'react-native';

type OsVersionType = {
  multiply(a: number, b: number): Promise<number>;
};

const { OsVersion } = NativeModules;

export default OsVersion as OsVersionType;
