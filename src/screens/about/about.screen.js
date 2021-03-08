import React, {useLayoutEffect} from 'react';
import {View, Text} from 'react-native';

import DrawerToggleButton from '../../components/drawer-toggle-button/drawer-toggle-button';

import styles from './styles';

const AboutScreen = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <DrawerToggleButton onPress={() => navigation.toggleDrawer()} />
      ),
    });
  }, []);

  return (
    <View style={styles.mainContainer}>
      <Text>About Screen</Text>
    </View>
  );
};

export default AboutScreen;
