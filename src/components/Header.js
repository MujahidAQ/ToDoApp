import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { COLORS } from '../constants/colors'

const Header = () => {
  return (
    <View style={styles.container} >
      <Text style={styles.headerText} >
        To Do List
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: COLORS.PRIMARY_NEON
  },
  headerText: {
    fontFamily:'Roboto',
    color: COLORS.BLACK,
    fontSize: 16,
    fontWeight: 'bold',
    paddingLeft: 14,
  }
})

export default Header