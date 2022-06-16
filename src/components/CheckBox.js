import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CheckBox = ({isChecked, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      {
        isChecked
          ? <Image source={require('../assets/Images/checkedBox.png')} style={styles.icon} />
          : <Image source={require('../assets/Images/box.png')} style={styles.icon} />
      }
    </TouchableOpacity>
  )
}

export default CheckBox

const styles = StyleSheet.create({
  icon: {
    height: 20,
    resizeMode: 'contain',
  }
})