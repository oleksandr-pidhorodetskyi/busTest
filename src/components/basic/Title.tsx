import React from 'react';
import {StyleProp, StyleSheet, Text, TextProps, TextStyle} from 'react-native';
import {moderateScale} from '../../utils/metrics.ts';
import {COLORS} from '../../constants/colors.ts';

interface TitleProps extends TextProps {
  children: React.ReactNode;
  customStyles?: StyleProp<TextStyle>;
}
const Title: React.FC<TitleProps> = ({
  children,
  customStyles = {},
  ...rest
}) => {
  return (
    <Text style={[styles.title, customStyles]} {...rest}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  title: {
    color: COLORS.dark,
    fontSize: moderateScale(26),
    fontFamily: 'Poppins-Medium',
  },
});

export default Title;
