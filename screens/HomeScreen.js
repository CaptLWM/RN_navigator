import React from 'react';
import {Button, View} from 'react-native';
const HomeScreen = ({navigation}) => {
  React.useEffect(() => {
    navigation.setOptions({title: '홈'});
  }, [navigation]);
  return (
    <View>
      <Button
        title="Detail 1 열기"
        onPress={() => navigation.navigate('Detail', {id: 1})}
      />
      <Button
        title="Detail 2 열기"
        onPress={() => navigation.navigate('Detail', {id: 2})}
      />
      <Button
        title="Detail 3 열기"
        onPress={() => navigation.navigate('Detail', {id: 3})}
      />
      <Button
        title="Headerless 열기"
        onPress={() => navigation.navigate('Headerless')}
      />
    </View>
  );
};

export default HomeScreen;
