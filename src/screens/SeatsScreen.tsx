import React from 'react';
import {StyleSheet, View} from 'react-native';
import ScreenContainer from '../components/basic/ScreenContainer.tsx';
import {useAppSelector} from '../hooks/useRedux.ts';
import {selectedBus} from '../store/buses/selectors.ts';
import Header from '../components/basic/Header.tsx';
import SeatStatusExamplesContainer from '../components/screenComponents/SeatsScreen/SeatStatusExamplesContainer.tsx';
import {SeatType} from '../store/buses/types.ts';
import {horizontalScale, verticalScale} from '../utils/metrics.ts';
import SeatList from '../components/screenComponents/SeatsScreen/SeatsList.tsx';
import ContentContainer from '../components/basic/ContentContainer.tsx';

const SeatsScreen = () => {
  const selectedBusData = useAppSelector(selectedBus);
  const busDirection = `${selectedBusData.from} - ${selectedBusData.to}`;
  const seatsStartingFromA: SeatType[] = selectedBusData.seats.filter(seat =>
    seat.id.startsWith('a'),
  );
  const seatsStartingFromB: SeatType[] = selectedBusData.seats.filter(seat =>
    seat.id.startsWith('b'),
  );

  return (
    <ScreenContainer>
      <View>
        <Header
          data={{
            title: 'Seat availability',
            busId: selectedBusData.id,
            busDirection: busDirection,
          }}
          rightBottomContainer={<SeatStatusExamplesContainer />}
        />
        <ContentContainer>
          <View style={styles.columnsContainer}>
            <SeatList
              data={seatsStartingFromA}
              contentContainerStyleStyle={styles.leftColumn}
            />
            <SeatList
              data={seatsStartingFromB}
              contentContainerStyleStyle={styles.rightColumn}
            />
          </View>
        </ContentContainer>
      </View>
    </ScreenContainer>
  );
};
const styles = StyleSheet.create({
  columnsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: verticalScale(80),
  },
  columns: {
    columnGap: horizontalScale(10),
  },
  rows: {
    alignItems: 'flex-end',
    rowGap: verticalScale(10),
  },
  leftColumn: {
    alignItems: 'flex-start',
  },
  rightColumn: {
    alignItems: 'flex-end',
  },
});
export default SeatsScreen;
