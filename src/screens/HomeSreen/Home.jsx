import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'
import DisplayCard from '../../components/DisplayCard'
import { useDispatch } from 'react-redux'
import { DisplayData } from '../../redux/actions/CrudAction'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useSelector } from 'react-redux'


const Home = ({navigation}) => {

  // const list = useSelector(state => state.CrudReducer.list)

  const dispatch = useDispatch()
  dispatch(DisplayData())

  function navToAddScreen(id) {
    navigation.navigate('Add', {id: id});
  }


  return (
    <SafeAreaView style={styles.MainContainer}>
      {/* <View> */}
      <View style={styles.header}>
        <Text style={styles.headerText}>CRUD</Text>
      </View>
      <DisplayCard navToAddScreen={navToAddScreen}  />
      <TouchableOpacity
        style={styles.AddTaskContainer}
        onPress={() => navigation.navigate('Add')}>
        <Ionicons name="add-circle-outline" style={styles.AddTaskIcon} />
        {/* <Text style={styles.AddTaskText}>ADD TASK</Text> */}
      </TouchableOpacity>
      {/* </View> */}
    </SafeAreaView>
  )
}

export default Home;

const styles = StyleSheet.create({
  MainContainer:{
    flex:1,
    // height:'100%',
    // justifyContent:'center',
    // alignItems:'center',
    backgroundColor:'black'
  },
  header:{
    backgroundColor:'brown',
    width:'100%',
    padding:10,
    // paddingTop:20,
    
  },
  headerText:{
    fontSize:30,
    fontWeight:'600',
    color:'white'
  },
  AddTaskContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    position: 'absolute',
    right: 20,
    height: 70,
    bottom:20
    },

    AddTaskIcon: {
      fontSize: 65,
      color:'#fff'
    },
})