import { FlatList, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React, {useMemo , memo, useCallback} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { DeleteItemAction } from '../redux/actions/CrudAction'

const DisplayCard = (props) => {

  const list = useSelector(state => state.CrudReducer.list)
  // console.log("List ===> ",list)
  const dispatch = useDispatch();


const renderList = useCallback((data)=>{
  
  function handleEdit(id){
    props.navToAddScreen(id);
  }

  function handleDelete(id){
    dispatch(
      DeleteItemAction({
        id:id
      })
    )
  }

  return (
      <View style={styles.MainContainer}>
        <View style={styles.TitleContainer}>
          {/* <Text style={styles.TitleText}>{data.item.id}.</Text> */}
          <Text style={styles.TitleText}>{data.item.title}</Text>
        </View>
        <View style={styles.BodyContainer}>
          <Text style={styles.BodyText}>{data.item.body}</Text>
        </View>


        <View style={styles.EditDeleteContainer}>
          <TouchableOpacity
            onPress={() => {
              handleEdit(data.item.id);
              
            }}>
            <Ionicons name="create-outline" style={styles.Edit}></Ionicons>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              handleDelete(data.item.id);
            }}>
            <Ionicons name="trash-outline" style={styles.Delete}></Ionicons>
          </TouchableOpacity>
        </View>



      </View>
  )
},[list])




  return (
    <>
    <FlatList 
    data={list}
    style={styles.FlatList}
    keyExtractor={item => item.id}
    // renderItem={renderList}
    renderItem={renderList}
    
    />
    </>
  )
}

export default memo(DisplayCard)

const styles = StyleSheet.create({
  FlatList:{
    // backgroundColor:'red',
    // width:200,
    // minHeight:100
  },
  MainContainer:{
    width:'90%',
    margin:10,
    padding:10,
    backgroundColor:'lightblue',
    shadowOffset:{
      height:1,
      width:1
    },
    shadowColor:'white',
    shadowRadius:5,
    shadowOpacity:0.5,
    elevation:5,
    borderRadius:15
  },
  TitleContainer:{
    marginBottom:10
  },
  TitleText:{
    fontSize:24,
    fontWeight:'600'
  },
  BodyContainer:{},
  BodyText:{
    fontSize:20,
    fontWeight:'400'
  },
  EditDeleteContainer: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  Edit: {
    fontSize: 25,
  },
  Delete: {
    fontSize: 25,
  },
})