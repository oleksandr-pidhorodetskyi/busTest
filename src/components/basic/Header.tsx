import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';
import Title from './Title.tsx';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../utils/metrics.ts';
import {COLORS} from '../../constants/colors.ts';

interface HeaderProps extends ViewProps {
  data: {
    title: string;
    busId?: string;
    busDirection?: string;
  };
  customStyles?: StyleProp<ViewStyle>;
  rightBottomContainer: React.ReactNode;
}
const Header: React.FC<HeaderProps> = ({
  data,
  customStyles = {},
  rightBottomContainer,
  ...rest
}) => {
  return (
    <View style={[styles.container, customStyles]} {...rest}>
      <Title customStyles={styles.title}>{data.title}</Title>
      <View style={styles.bottomContainer}>
        <View style={styles.header}>
          <Text style={styles.idText}>
            {data.busId ? data.busId : 'Choose bus'}
          </Text>
          <Text style={styles.directionText}>
            {data.busDirection ? data.busDirection : 'Choose Direction'}
          </Text>
        </View>
        {rightBottomContainer}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    rowGap: verticalScale(20),
  },
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: horizontalScale(18),
    marginBottom: verticalScale(18),
  },
  header: {
    paddingVertical: verticalScale(5),
    borderTopRightRadius: moderateScale(16),
    borderBottomRightRadius: moderateScale(16),
    width: '60%',
    backgroundColor: COLORS.blue,
    alignItems: 'flex-start',
    paddingLeft: verticalScale(14),
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
  title: {
    marginLeft: horizontalScale(10),
  },
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

export default Header;
