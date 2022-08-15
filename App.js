import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import DetailScreen from './screens/DetailScreen';
import HomeScreen from './screens/HomeScreen';
import HeaderlessScreen from './screens/HeaderlessScreen';

const Stack = createNativeStackNavigator();
// 스택 네비게이터 생성
// Stack.Navigator : initialRouteName(기본으로 보여줄 화면)
// Stack.Screen : 각 화면 설정, name은 화면 이름 설정(화면조회용)

const App = () => {
  return (
    <NavigationContainer>
      {/* React-navigation/naive 적용 */}
      <Stack.Navigator initialRoutename="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: '홈',
            headerStyle: {
              backgroundColor: '#29b6f6',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 20,
            },
          }}
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{
            headerBackVisible: false, // 안드로이드 뒤로가기 화살표 제거
            headerLeft: ({onPress}) => (
              <TouchableOpacity onPress={onPress}>
                <Text>Left</Text>
              </TouchableOpacity>
            ),
            headerTitle: ({children}) => (
              <View>
                <Text>{children}</Text>
              </View>
            ),
            headerRight: () => (
              <View>
                <Text>Right</Text>
              </View>
            ),
          }}
          // options={({route}) => ({
          //   title: `상세정보 - ${route.params.id}`,
          // })}
        />
        <Stack.Screen
          name="Headerless"
          component={HeaderlessScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
