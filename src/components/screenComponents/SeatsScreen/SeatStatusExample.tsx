import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../utils/metrics.ts';
import {COLORS} from '../../../constants/colors.ts';
import {SeatStatus} from '../../../store/buses/types.ts';

interface SeatStatusExampleProps {
  status: SeatStatus;
}
const SeatStatusExample: React.FC<SeatStatusExampleProps> = ({status}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.seatStatus}>
        {status === SeatStatus.reserved ? 'Reserved' : 'Available'}
      </Text>
      <View
        style={[
          styles.seatsStatusIcon,
          status === SeatStatus.reserved ? styles.reserved : styles.available,
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    columnGap: horizontalScale(10),
    alignItems: 'center',
  },
  seatStatus: {
    fontFamily: 'Poppins-Light',
    color: COLORS.black,
    fontSize: moderateScale(12),
  },
  seatsStatusIcon: {
    width: horizontalScale(24),
    height: verticalScale(24),
    borderRadius: moderateScale(5),
  },
  reserved: {
    backgroundColor: COLORS.lightBlue,
  },
  available: {
    backgroundColor: COLORS.white,
  },
});

export default SeatStatusExample;
