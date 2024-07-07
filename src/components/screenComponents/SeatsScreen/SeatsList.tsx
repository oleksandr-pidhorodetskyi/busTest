import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {SeatType} from '../../../store/buses/types.ts';
import SeatBtn from './SeatBtn.tsx';
import {horizontalScale, verticalScale} from '../../../utils/metrics.ts';
import {useAppDispatch} from '../../../hooks/useRedux.ts';
import {setSelectedSeat} from '../../../store/buses/slice.ts';
import {useNavigation} from '@react-navigation/native';
import {NavigationRoutes} from '../../../navigation/types.ts';

interface SeatListProps {
  data: SeatType[];
  customColumnWrapperStyle?: any;
  contentContainerStyleStyle?: any;
}
const SeatList: React.FC<SeatListProps> = ({
  data,
  customColumnWrapperStyle = {},
  contentContainerStyleStyle = {},
}) => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<any>();

  const handleSeatSelect = (seat: SeatType) => {
    dispatch(setSelectedSeat(seat));
    navigation.navigate(NavigationRoutes.Map);
  };
  return (
    <FlatList
      data={data}
      renderItem={({item, index}: {item: SeatType; index: number}) => (
        <SeatBtn data={item} onPress={() => handleSeatSelect(item)} />
      )}
      keyExtractor={item => item.id}
      showsVerticalScrollIndicator={false}
      horizontal={false}
      numColumns={2}
      key={2}
      columnWrapperStyle={[styles.columns, customColumnWrapperStyle]}
      contentContainerStyle={[styles.rows, contentContainerStyleStyle]}
    />
  );
};

const styles = StyleSheet.create({
  columns: {
    columnGap: horizontalScale(10),
  },
  rows: {
    alignItems: 'flex-end',
    rowGap: verticalScale(10),
  },
});
export default SeatList;
