import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';

export type ParamList = {
  Login: undefined;
  Home: undefined;
};

export type LoginScreenProps = {
  navigation: LoginNavigationProps;
};

export type HomeScreenProps = {
  navigation: HomeNavigationProps;
};

export type LoginNavigationProps = NativeStackNavigationProp<ParamList, 'Login'>;
export type HomeNavigationProps = NativeStackNavigationProp<ParamList, 'Home'>;