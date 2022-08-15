import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {useRoute} from '@react-navigation/native';

const IDText = () => {
  const route = useRoute();
  // 컴포넌트에서 route 객체 사용할 수 있도록
  return <Text style={styles.text}>id:{route.params.id}</Text>;
};
const DetailScreen = ({route, navigation}) => {
  console.log(route);
  // key : 화면 고유 id
  // name : 화면 이름
  // param : route parameter
  React.useEffect(() => {
    navigation.setOptions({
      title: `상세정보 - ${route.params.id}`,
    });
  }, [navigation, route.params.id]);
  return (
    <View style={styles.block}>
      <IDText />
      <View style={styles.buttons}>
        <Button
          title="다음"
          onPress={() => navigation.push('Detail', {id: route.params.id + 1})}
        />
        <Button title="뒤로가기" onPress={() => navigation.pop()} />
        <Button title="처음으로" onPress={() => navigation.popToTop()} />
      </View>
    </View>
  );
};
//navigate는 push와 달리 새로 이동할 화면이 현재 화면과 같으면 새로운 화면을 쌓지 않고 파라미터만
// push는 네이티브 스택 내비게이터에서만 사용 가능
const styles = StyleSheet.create({
  block: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 48,
  },
  buttons: {
    flexDirection: 'row',
  },
});

export default DetailScreen;
