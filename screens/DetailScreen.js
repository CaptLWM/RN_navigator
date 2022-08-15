import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

const DetailScreen = ({route, navigation}) => {
  console.log(route);
  // key : 화면 고유 id
  // name : 화면 이름
  // param : route parameter
  return (
    <View style={styles.block}>
      <Text style={styles.text}>id:{route.params.id}</Text>
      <Button
        title="다음"
        onPress={() => navigation.navigate('Detail', {id: route.params.id + 1})}
      />
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
});

export default DetailScreen;
