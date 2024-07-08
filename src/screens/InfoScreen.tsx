import React from 'react';
import {StyleSheet, Text} from 'react-native';
import ScreenContainer from '../components/basic/ScreenContainer.tsx';
import {moderateScale, verticalScale} from '../utils/metrics.ts';
import ContentContainer from '../components/basic/ContentContainer.tsx';
import Title from '../components/basic/Title.tsx';
import {COLORS} from '../constants/colors.ts';

const InfoScreen = () => {
  return (
    <ScreenContainer>
      <Title customStyles={[styles.title, styles.textCenter]}>Info</Title>
      <ContentContainer>
        <Text style={[styles.text, styles.textCenter]}>This app made by</Text>
        <Text style={[styles.text, styles.textCenter]}>
          Oleksandr Pidhorodetskyi
        </Text>
      </ContentContainer>
    </ScreenContainer>
  );
};
const styles = StyleSheet.create({
  title: {
    marginBottom: verticalScale(20),
  },
  textCenter: {
    textAlign: 'center',
  },
  text: {
    color: COLORS.dark,
    fontSize: moderateScale(20),
    fontFamily: 'Poppins-Regular',
  },
});
export default InfoScreen;
