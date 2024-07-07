import {Image, StyleSheet, Text, View} from 'react-native';
import ICONS from '../../../assets/icons.ts';
import React from 'react';
import {horizontalScale, moderateScale} from '../../../utils/metrics.ts';
import {COLORS} from '../../../constants/colors.ts';

interface SpeedContainerProps {
  speed: string;
}
const SpeedContainer: React.FC<SpeedContainerProps> = ({speed}) => {
  return (
    <View style={styles.speedContainer}>
      <Image source={ICONS.SPEED} alt="speed icon" />
      <Text style={styles.speed}>{speed}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  speedContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: horizontalScale(8),
  },
  speed: {
    fontFamily: 'Poppins-Regular',
    color: COLORS.dark,
    fontSize: moderateScale(14),
  },
});
export default SpeedContainer;
