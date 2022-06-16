import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../../constants/colors'

const BottomBar = ({ numOnTasks = 0, isAddingTask, onAddPress, filterState, onAllPress, onCompletedPress, onRemainingPress }) => {
  return (
    <View style={styles.container} >
      <View style={styles.innerWrapper} >
        <TouchableOpacity 
          style={{paddingVertical: 6, transform: [{rotate: isAddingTask ? '45deg' : '0deg'}]}}
          activeOpacity={0.8}
          onPress={onAddPress}
          >
        <Image
          source={require('../../../assets/Images/plus.png')}
          style={styles.plus}
        />
        </TouchableOpacity>
        <Text style={styles.itemsText} >{`${numOnTasks} ${numOnTasks > 1 ? 'Items' : 'Item'}`}</Text>
      </View>
      <View style={styles.filter} >
        <TouchableOpacity 
          style={[styles.filterLabelHolder, styles.leftBorder]} 
          activeOpacity={0.8}
          onPress={onAllPress}
          >
          <Text style={styles.filterLabels} >All</Text>
          {filterState === 1 && <View style={styles.dot} />}
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.filterLabelHolder, styles.leftBorder]}
          activeOpacity={0.8}
          onPress={onCompletedPress}
          >
          <Text style={styles.filterLabels} >Completed</Text>
          {filterState === 2 && <View style={styles.dot} />}
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.filterLabelHolder} 
          activeOpacity={0.8}
          onPress={onRemainingPress}
          >
          <Text style={styles.filterLabels} >Remaining</Text>
          {filterState === 3 && <View style={styles.dot} />}
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default BottomBar

const styles = StyleSheet.create({
  container: {
    height: 60,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.PRIMARY_NEON,
  }, 
  innerWrapper: {
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '40%',
    paddingHorizontal: 14
  },
  plus: {
    height: 20,
    resizeMode: 'contain'
  },
  itemsText: {
    fontFamily: 'Roboto',
    color: COLORS.BLACK,
    fontSize: 16,
    fontWeight: 'bold',
    paddingLeft: 8,
  },
  filterLabels: {
    color: COLORS.BLACK,
    fontWeight: '500'
  },
  filter: {
    borderColor: COLORS.BLACK,
    borderWidth: 1,
    borderRadius: 99,
    marginRight: 20,
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 8,
    height: 34
  },
  filterLabelHolder: {
    height: '100%',
    paddingVertical: 6,
    borderRadius: 99,
    paddingHorizontal: 8,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center'
  },
  leftBorder: {
    borderRightWidth: 1,
    borderRightColor: COLORS.BLACK,
    borderRadius: 0
  },
  dot: {
    borderRadius: 99,
    height: 4,
    width: 4,
    backgroundColor: COLORS.BLACK,
    position: 'absolute',
    bottom: -9
  }
})