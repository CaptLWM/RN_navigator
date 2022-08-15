import React from 'react';

import {useNavigation, useFocusEffect} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {Text, View, Button} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

// const Tab = createBottomTabNavigator();
// const Tab = createMaterialTopTabNavigator();
const Tab = createMaterialBottomTabNavigator();

const OpenDetailButton = () => {
  const navigation = useNavigation();
  // navigation을 상위 컴포넌트에서 props로 넣어주지 않아도 사용 가능
  return (
    <Button
      title="Detail 1 열기"
      onPress={() => navigation.push('Detail', {id: 1})}
    />
  );
};

const HomeScreen = ({navigation}) => {
  //다른 화면 열었다가 돌아왔을때 특정작업 해야할 경우
  useFocusEffect(
    React.useCallback(() => {
      console.log('이화면 보는중');
      return () => {
        console.log('다른화면 넘어감');
      };
    }, []),
  );
  return (
    <View>
      <Text>Home</Text>
      <OpenDetailButton />
    </View>
  );
};

const SearchScreen = ({navigation}) => {
  return (
    <View>
      <Text>Search</Text>
    </View>
  );
};

const MessageScreen = ({navigation}) => {
  return (
    <View>
      <Text>Message</Text>
    </View>
  );
};

const NotificationScreen = ({navigation}) => {
  return (
    <View>
      <Text>Notification</Text>
    </View>
  );
};

const MainScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        showIcon: true,
        //   activeTintColor: '#fb8c00',
        //   showLabel: false,
      }}
      //   screenOptions={{
      //     tabBarIndicatorStyle: {
      //       backgroundColor: '#009688',
      //     },
      //     tabBarActiveTintColor: '#009688',
      //   }}>
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: '홈',
          tabBarIcon: ({color}) => <Icon name="home" color={color} size={24} />,
          tabBarColor: 'black',
          tabBarBadge: 'new',
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarLabel: '검색',
          tabBarIcon: ({color}) => (
            <Icon name="search" color={color} size={24} />
          ),
          tabBarColor: 'gray',
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          tabBarLabel: '알림',
          tabBarIcon: ({color}) => (
            <Icon name="notifications" color={color} size={24} />
          ),
          tabBarColor: 'green',
          tabBarBadge: '30',
        }}
      />
      <Tab.Screen
        name="Message"
        component={MessageScreen}
        options={{
          tabBarLabel: '메시지',
          tabBarIcon: ({color}) => (
            <Icon name="message" color={color} size={24} />
          ),
          tabBarColor: 'blue',
          tabBarBadge: true,
        }}
      />
    </Tab.Navigator>
  );
};

export default MainScreen;

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

// const SettingScreen = ({navigation}) => {
//   return (
//     <View>
//       <Text>Setting</Text>
//       <Button title="뒤로가기" onPress={() => navigation.goBack()} />
//     </View>
//   );
// };

// const MainScreen = () => {
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

// export default MainScreen;
