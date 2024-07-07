import React from 'react';
import {
  SafeAreaView,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import {horizontalScale, verticalScale} from '../../utils/metrics.ts';
import {COLORS} from '../../constants/colors.ts';

interface ScreenContainerProps {
  children: React.ReactNode;
  safeAreaStyles?: StyleProp<ViewStyle>;
  contentContainerStyles?: StyleProp<ViewStyle>;
}
const ScreenContainer: React.FC<ScreenContainerProps> = ({
  children,
  safeAreaStyles = {},
  contentContainerStyles = {},
}) => {
  return (
    <SafeAreaView style={[styles.mainContainer, safeAreaStyles]}>
      <View style={[styles.contentContainer, contentContainerStyles]}>
        {children}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: COLORS.mainBg,
    paddingVertical: verticalScale(10),
    minHeight: '100%',
  },
  contentContainer: {
    marginTop: horizontalScale(10),
    backgroundColor: COLORS.mainBg,
  },
});

export default ScreenContainer;
