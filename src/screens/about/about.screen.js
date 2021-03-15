import React from 'react';
import {View} from 'react-native';

import DefaultText from '../../components/default-text/default-text';
import DrawerToggleButton from '../../components/drawer-toggle-button/drawer-toggle-button';

import styles from './styles';

const AboutScreen = () => {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <DrawerToggleButton onPress={() => navigation.toggleDrawer()} />
      ),
    });
  }, []);

  return (
    <View style={styles.mainContainer}>
      <DefaultText text={'CryptoExplorer'} styleText={styles.appName} />
      <DefaultText
        text={'Developed by Daniil Khmurovich'}
        styleText={styles.developerName}
      />
    </View>
  );
};

export default AboutScreen;
