import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import React from 'react';
import {IconMoney, IconPoint} from '../../assets';
import {WARNA_SEKUNDER} from '../../utils/constant';

const ButtonIcon = ({title}) => {
  const Icon = () => {
    if (title === 'Add Saldo') {
      return <IconMoney />;
    }
    if (title === 'Get Point') {
      return <IconPoint />;
    }
    return <IconMoney />;
  };
  return (
    <TouchableOpacity>
      <View style={styles.icon}>
        <Icon />
      </View>
      <Text style={styles.textButton}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonIcon;

const styles = StyleSheet.create({
  icon: {
    backgroundColor: WARNA_SEKUNDER,
    padding: 7,
    borderRadius: 10,
  },
  textButton: {
    fontSize: 10,
    fontFamily: 'TitilliumWeb-Regular',
    textAlign: 'center',
  },
});
