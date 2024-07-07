import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import {SeatStatus, SeatType} from '../../../store/buses/types.ts';
import React from 'react';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../utils/metrics.ts';
import {COLORS} from '../../../constants/colors.ts';

interface SeatBtnProps extends TouchableOpacityProps {
  data: SeatType;
}

const SeatBtn: React.FC<SeatBtnProps> = ({data, ...rest}) => {
  const isReserved = data.status === SeatStatus.reserved;
  return (
    <TouchableOpacity
      disabled={isReserved}
      style={[styles.btn, isReserved ? styles.reserved : styles.available]}
      {...rest}>
      <Text style={styles.btnTitle}>{data.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: horizontalScale(47),
    height: verticalScale(47),
    borderRadius: moderateScale(5),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  btnTitle: {
    fontFamily: 'Poppins-Light',
    color: COLORS.black,
    fontSize: moderateScale(12),
  },
  reserved: {
    backgroundColor: COLORS.lightBlue,
  },
  available: {
    backgroundColor: COLORS.white,
  },
});

export default SeatBtn;
