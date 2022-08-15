import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import DetailScreen from './screens/DetailScreen';
import HomeScreen from './screens/HomeScreen';

const Stack = createNativeStackNavigator();
// 스택 네비게이터 생성
// Stack.Navigator : initialRouteName(기본으로 보여줄 화면)
// Stack.Screen : 각 화면 설정, name은 화면 이름 설정(화면조회용)

const App = () => {
  return (
    <NavigationContainer>
      {/* React-navigation/naive 적용 */}
      <Stack.Navigator initialRoutename="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
