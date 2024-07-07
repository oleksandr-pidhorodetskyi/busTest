import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import {BusType} from '../../../store/buses/types.ts';
import {COLORS} from '../../../constants/colors.ts';
import IMAGES from '../../../assets/images.ts';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../utils/metrics.ts';

interface BusCardProps extends TouchableOpacityProps {
  data: BusType;
}
const BusCard: React.FC<BusCardProps> = ({data, ...rest}) => {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <View style={styles.header}>
        <Text style={styles.idText}>{data.id}</Text>
        <Text style={styles.directionText}>{`${data.from} - ${data.to}`}</Text>
      </View>
      <Image source={IMAGES.BUS} style={styles.image} />
    </TouchableOpacity>
  );
};
export default BusCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    borderRadius: moderateScale(20),
    shadowColor: '#000',
    margin: horizontalScale(5),
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: moderateScale(4),
    elevation: moderateScale(5),
  },
  header: {
    height: verticalScale(90),
    borderTopLeftRadius: moderateScale(20),
    borderTopRightRadius: moderateScale(20),
    width: '100%',
    backgroundColor: COLORS.blue,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: verticalScale(7),
  },
  idText: {
    fontFamily: 'Poppins-Medium',
    textTransform: 'uppercase',
    color: COLORS.white,
    fontSize: moderateScale(25),
  },
  directionText: {
    fontFamily: 'Poppins-Regular',
    color: COLORS.white,
    fontSize: moderateScale(14),
  },
  image: {
    width: '100%',
    resizeMode: 'cover',
    marginVertical: verticalScale(15),
  },
});
