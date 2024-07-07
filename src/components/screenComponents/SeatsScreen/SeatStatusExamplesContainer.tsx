import {StyleSheet, View} from 'react-native';
import {SeatStatus} from '../../../store/buses/types.ts';
import React from 'react';
import {verticalScale} from '../../../utils/metrics.ts';
import SeatStatusExample from './SeatStatusExample.tsx';

const SeatStatusExamplesContainer: React.FC = () => {
  return (
    <View style={styles.statusExamples}>
      <SeatStatusExample status={SeatStatus.reserved} />
      <SeatStatusExample status={SeatStatus.available} />
    </View>
  );
};

const styles = StyleSheet.create({
  statusExamples: {
    rowGap: verticalScale(5),
  },
});

export default SeatStatusExamplesContainer;
