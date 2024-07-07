import React from 'react';
import ScreenContainer from '../components/basic/ScreenContainer.tsx';
import Header from '../components/basic/Header.tsx';
import {useAppSelector} from '../hooks/useRedux.ts';
import {selectedBus} from '../store/buses/selectors.ts';
import SpeedContainer from '../components/screenComponents/SeatsScreen/SpeedContainer.tsx';

const MapScreen = () => {
  const selectedBusData = useAppSelector(selectedBus);
  const busDirection = `${selectedBusData.from} - ${selectedBusData.to}`;

  return (
    <ScreenContainer>
      <Header
        data={{
          title: 'Location',
          busId: selectedBusData.id,
          busDirection: busDirection,
        }}
        rightBottomContainer={<SpeedContainer speed="200kmph" />}
      />
    </ScreenContainer>
  );
};

export default MapScreen;
