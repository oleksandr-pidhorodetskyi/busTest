import React, {useEffect} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import ScreenContainer from '../components/basic/ScreenContainer.tsx';
import {BusType} from '../store/buses/types.ts';
import data from '../constants/busesData.json';
import BusCard from '../components/screenComponents/Home/BusCard.tsx';
import {verticalScale} from '../utils/metrics.ts';
import Title from '../components/basic/Title.tsx';
import {useAppDispatch, useAppSelector} from '../hooks/useRedux.ts';
import {setAllBuses, setSelectedBus} from '../store/buses/slice.ts';
import {selectAllBuses} from '../store/buses/selectors.ts';
import {NavigationRoutes} from '../navigation/types.ts';
import {useNavigation} from '@react-navigation/native';
import ContentContainer from '../components/basic/ContentContainer.tsx';

const busesData: BusType[] = data as BusType[];

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<any>();
  const dispatch = useAppDispatch();
  const allBuses = useAppSelector(selectAllBuses);

  const handleSelectBus = (data: BusType) => {
    dispatch(setSelectedBus(data));
    navigation.navigate(NavigationRoutes.Seats);
  };

  useEffect(() => {
    dispatch(setAllBuses(busesData));
  }, [dispatch]);

  return (
    <ScreenContainer>
      <ContentContainer>
        <Title customStyles={styles.title}>Select your route</Title>
        <FlatList
          data={allBuses}
          renderItem={({item, index}: {item: BusType; index: number}) => (
            <BusCard data={item} onPress={() => handleSelectBus(item)} />
          )}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.contentContainer}
        />
      </ContentContainer>
    </ScreenContainer>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    marginBottom: verticalScale(30),
  },

  contentContainer: {
    rowGap: verticalScale(25),
    paddingBottom: '50%',
  },
});
