import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text} from 'react-native';
import {
  getFocusedRouteNameFromRoute,
  NavigationContainer,
} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from './screens/MainScreen';
import DetailScreen from './screens/DetailScreen';

const Stack = createNativeStackNavigator();

const getHeaderTitle = route => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';
  const nameMap = {
    Home: '홈',
    Search: '검색',
    Notification: '알림',
    Message: '메세지',
  };
  // route 객체로 현재 포커스된 화면의 이름을 조회
  console.log(routeName);
  return nameMap[routeName];
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={({route}) => ({
            title: getHeaderTitle(route),
          })}
          // options={{headerShown: false}}
          // 두개의 헤더가 나타나게됨 (Tab.screen title, stack.screen title)
          // 상단 탭 내비게이터를 사용할 경우 헤더를 보여주지 않기 때문에 headershown true로 변경
        />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         initialRouteName="Home"
//         tabBarOptions={{
//           activeTintColor: '#fb8c00',
//           showLabel: false,
//         }}>
//         <Tab.Screen
//           name="Home"
//           component={HomeScreen}
//           options={{
//             title: '홈',
//             tabBarIcon: ({color, size}) => (
//               <Icon name="home" color={color} size={size} />
//             ),
//           }}
//         />
//         <Tab.Screen
//           name="Search"
//           component={SearchScreen}
//           options={{
//             title: '검색',
//             tabBarIcon: ({color, size}) => (
//               <Icon name="search" color={color} size={size} />
//             ),
//           }}
//         />
//         <Tab.Screen
//           name="Notification"
//           component={NotificationScreen}
//           options={{
//             title: '알림',
//             tabBarIcon: ({color, size}) => (
//               <Icon name="notifications" color={color} size={size} />
//             ),
//           }}
//         />
//         <Tab.Screen
//           name="Message"
//           component={MessageScreen}
//           options={{
//             title: '메시지',
//             tabBarIcon: ({color, size}) => (
//               <Icon name="message" color={color} size={size} />
//             ),
//           }}
//         />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// };

export default App;

// import {NavigationContainer, StackActions} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import React from 'react';
// import {Text, TouchableOpacity, View, Button} from 'react-native';
// // import DetailScreen from './screens/DetailScreen';
// // import HomeScreen from './screens/HomeScreen';
// // import HeaderlessScreen from './screens/HeaderlessScreen';
// import {createDrawerNavigator} from '@react-navigation/drawer';
// import {SafeAreaView} from 'react-native-safe-area-context';

// // const Stack = createNativeStackNavigator();
// // 스택 네비게이터 생성
// // Stack.Navigator : initialRouteName(기본으로 보여줄 화면)
// // Stack.Screen : 각 화면 설정, name은 화면 이름 설정(화면조회용)

// const Drawer = createDrawerNavigator();

// const HomeScreen = ({navigation}) => {
//   return (
//     <View>
//       <Text>Home</Text>
//       <Button title="Drawer 열기" onPress={() => navigation.openDrawer()} />
//       <Button
//         title="Setting 열기"
//         onPress={() => navigation.navigate('Setting')}
//       />
//     </View>
//   );
// };

// const SettingScreen = ({navigation}) => {
//   return (
//     <View>
//       <Text>Setting</Text>
//       <Button title="뒤로가기" onPress={() => navigation.goBack()} />
//     </View>
//   );
// };

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator
//         initialRouteName="Home"
//         drawerPosition="left"
//         backBehavior="history"
//         // initialROute : 가장 첫 번째 화면을 보여줌
//         // order : drawer.screen 컴포넌트를 사용한 순서에 따라 현재 화면의 이전 화면을 보여줌
//         // history : 현재화면을 열기 직전에 봤던 화면
//         // none : 뒤로가기 안함
//         // screenOptions={{
//         //   drawerActiveBackgroundColor: '#fb8c00',
//         //   drawerActiveTintColor: 'white',
//         // }}
//         drawerContent={({navigation}) => (
//           <SafeAreaView>
//             <Text>A custom Drawer</Text>
//             <Button
//               onPress={() => navigation.closeDrawer()}
//               title="Drawer 닫기"
//             />
//           </SafeAreaView>
//         )}>
//         <Drawer.Screen
//           name="Home"
//           component={HomeScreen}
//           options={{title: '홈', headerLeft: () => <Text>Left</Text>}}
//         />
//         <Drawer.Screen
//           name="Setting"
//           component={SettingScreen}
//           options={{title: '설정'}}
//         />
//       </Drawer.Navigator>
//       {/* React-navigation/naive 적용 */}
//       {/* <Stack.Navigator initialRoutename="Home">
//         <Stack.Screen
//           name="Home"
//           component={HomeScreen}
//           options={{
//             title: '홈',
//             headerStyle: {
//               backgroundColor: '#29b6f6',
//             },
//             headerTitleStyle: {
//               fontWeight: 'bold',
//               fontSize: 20,
//             },
//           }}
//         />
//         <Stack.Screen
//           name="Detail"
//           component={DetailScreen}
//           options={{
//             headerBackVisible: false, // 안드로이드 뒤로가기 화살표 제거
//             headerLeft: ({onPress}) => (
//               <TouchableOpacity onPress={onPress}>
//                 <Text>Left</Text>
//               </TouchableOpacity>
//             ),
//             headerTitle: ({children}) => (
//               <View>
//                 <Text>{children}</Text>
//               </View>
//             ),
//             headerRight: () => (
//               <View>
//                 <Text>Right</Text>
//               </View>
//             ),
//           }}
//           // options={({route}) => ({
//           //   title: `상세정보 - ${route.params.id}`,
//           // })}
//         />
//         <Stack.Screen
//           name="Headerless"
//           component={HeaderlessScreen}
//           options={{
//             headerShown: false,
//           }}
//         />
//       </Stack.Navigator> */}
//     </NavigationContainer>
//   );
// };

// export default App;
