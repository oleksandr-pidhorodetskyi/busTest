import React from 'react';
import {Button, Text, View} from 'react-native';
import ScreenContainer from '../components/basic/ScreenContainer.tsx';
import {useNavigation} from '@react-navigation/native';
import {NavigationRoutes} from '../navigation/types.ts';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<any>();
  return (
    <ScreenContainer>
      <View>
        <Text>HomeScreen</Text>
        <View>
          <Button
            title="Go to Seats"
            onPress={() => navigation.navigate(NavigationRoutes.Seats)}
          />
        </View>
      </View>
    </ScreenContainer>
  );
};

export default HomeScreen;
