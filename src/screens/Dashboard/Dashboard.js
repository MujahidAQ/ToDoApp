import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, FlatList } from 'react-native'
import CheckBox from '../../components/CheckBox'
import Header from '../../components/Header'
import { COLORS } from '../../constants/colors'
import BottomBar from './BottomBar/BottomBar'

const Dashboard = () => {

  const [filterType, setfilterType] = useState(1)
  const [tasksList, settasksList] = useState([])
  const [isAddingTask, setisAddingTask] = useState(false)
  const [enteredText, setenteredText] = useState('')

  const addNewTask = _ => {
    if (!enteredText.length) return
    settasksList([{
      id: Date.now(),
      task: enteredText,
      isCompleted: false
    }, ...tasksList])
    setenteredText('')
  }

  const searchTasks = text => setenteredText(text)

  const onAddPress = _ => setisAddingTask(!isAddingTask)

  const onCheckBoxPress = id => {
    let _temp = tasksList
    let taskIndex = tasksList.findIndex(task => task.id === id)
    _temp[taskIndex].isCompleted = !_temp[taskIndex].isCompleted
    settasksList([..._temp])
  }

  const onDeletePress = id => {
    let filteredTask = tasksList.filter(task => task.id !== id)
    settasksList([...filteredTask])
  }

  const flatListData = () => {
    //returning searched task, otherwise the whole task list
    let tasks = isAddingTask
      ? tasksList
      : tasksList.filter(item => item.task.toLowerCase().includes(enteredText.toLowerCase()))

    //fitlering based on filterType(means filter)
    if(filterType === 1) return tasks
    if(filterType === 2) return tasks.filter(item => item.isCompleted)
    if(filterType === 3) return tasks.filter(item => !item.isCompleted)
  }

  const NoTaskFound = () => <Text style={[styles.listText, { padding: 14 }]} >No tasks found :(</Text>

  const renderItem = ({ item: task }) => (
    <View key={task?.id} style={styles.listRow} >
      <View style={styles.checkBoxNLabel} >
        <CheckBox
          isChecked={task?.isCompleted}
          onPress={() => onCheckBoxPress(task?.id)}
        />
        <Text style={[styles.listText, task?.isCompleted && styles.strikedThrough]} >
          {task?.task}
        </Text>
      </View>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => onDeletePress(task?.id)}
      >
        <Image
          source={require('../../assets/Images/dustbin.png')}
          style={styles.dustbin}
        />
      </TouchableOpacity>
    </View>
  )

  return (
    <View style={styles.mainWrapper} >
      <Header />

      <View style={styles.listWrapper} >
        <View>
          <TextInput
            onChangeText={text => isAddingTask ? setenteredText(text) : searchTasks(text)}
            placeholder={isAddingTask ? 'Add Item' : 'Search...'}
            style={styles.input}
            value={enteredText}
          />
          {isAddingTask && <TouchableOpacity
            style={styles.tickHolder}
            onPress={addNewTask}
          >
            <Image
              source={require('../../assets/Images/tick.png')}
              style={styles.tick}
            />
          </TouchableOpacity>}
        </View>
        <FlatList
          data={flatListData()}
          keyExtractor={item => item.id.toString()}
          keyboardShouldPersistTaps='handled'
          ListEmptyComponent={NoTaskFound}
          renderItem={renderItem}
        />

      </View>
      <BottomBar
        numOnTasks={flatListData()?.length}
        filterState={filterType}
        isAddingTask={isAddingTask}
        onAddPress={onAddPress}
        onAllPress={() => setfilterType(1)}
        onCompletedPress={() => setfilterType(2)}
        onRemainingPress={() => setfilterType(3)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    backgroundColor: COLORS.BLACK
  },
  listWrapper: {
    flex: 1,
    paddingVertical: 14
  },
  input: {
    borderRadius: 4,
    borderColor: COLORS.PRIMARY_NEON,
    marginHorizontal: 10,
    borderWidth: 1,
    paddingLeft: 14,
    fontWeight: '500',
    position: 'relative',
    paddingRight: '13%'
  },
  tickHolder: {
    height: '100%',
    position: 'absolute',
    right: 14,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  tick: {
    height: 24,
    resizeMode: 'contain',
  },
  listing: {
    marginTop: 14
  },
  listRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 14
  },
  listText: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: 16,
    color: COLORS.WHITE,
    paddingRight: '12%'
  },
  dustbin: {
    height: 21,
    resizeMode: 'contain',
  },
  strikedThrough: {
    textDecorationLine: 'line-through',
    color: COLORS.GREY
  },
  checkBoxNLabel: {
    flexDirection: 'row',
    flex: 1
  }
})

export default Dashboard