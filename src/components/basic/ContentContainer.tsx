import React from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';

interface ContentContainerProps {
  children: React.ReactNode;
  customStyles?: StyleProp<ViewStyle>;
}
const ContentContainer: React.FC<ContentContainerProps> = ({
  children,
  customStyles = {},
}) => {
  return (
    <View style={[styles.contentContainer, customStyles]}>{children}</View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    width: '80%',
    marginHorizontal: 'auto',
  },
});

export default ContentContainer;
