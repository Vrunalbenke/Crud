import { StyleSheet, Text, View,SafeAreaView,TextInput,TouchableOpacity } from 'react-native'
import React, { useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UpdateItemActions ,AddItemAction} from '../../redux/actions/CrudAction'

const Add = ({route,navigation}) => {
    const [title,setTitle] = useState('')
    const [body,setBody] = useState('')
    const [btnName,setBtnName] = useState('Add')
    const [validation,setValidation]  = useState('')
    const dispatch = useDispatch();

    let EditID = route.params?.id

    const IDData = useSelector(state => state.CrudReducer.list)
    const MatchedID = IDData.find(item => item.id === EditID)


    useEffect(() => {
        if (EditID !== undefined && MatchedID) {
            setBtnName('SAVE');
            setTitle(MatchedID.title)
            setBody(MatchedID.body)
        }
      }, []);

    function updateData(){
        
        dispatch(
            UpdateItemActions({
                id:EditID,
                title:title,
                body:body,
            })
        )
        navigation.navigate('Home')
        setBtnName('Add')
    }
        
    function AddData(){
        dispatch(
            AddItemAction({
                title:title,
                body:body,
            })
        )
        navigation.navigate('Home')
    }

  return (
    <SafeAreaView style={styles.root}>
      <Text style={styles.TitleDescText}>Title</Text>
      <Text style={styles.validation}>{validation}</Text>
      <TextInput
        style={styles.InputField}
        placeholder="ADD TASK TITLE HERE"
        placeholderTextColor={'grey'}
        value={title}
        onChangeText={
          setTitle
          // console.log(title);
        }></TextInput>
      <Text style={styles.TitleDescText}>Body</Text>
      <Text style={styles.validation}>{validation}</Text>
      <TextInput
        style={[styles.InputField, {height: 80}]}
        placeholder="ADD TASK DESCRIPTION HERE"
        placeholderTextColor={'grey'}
        multiline
        value={body}
        onChangeText={setBody}></TextInput>

      <TouchableOpacity style={styles.AddBtn} onPress={EditID === undefined ?(() => AddData()):(() => updateData()) }>
        <Text style={styles.AddBtnText}>{btnName}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Add

const styles = StyleSheet.create({
    root: {
        // flex:1,
        paddingHorizontal: 10,
        paddingVertical: 15,
      },
      TitleDescText: {
        fontSize: 20,
      },
      validation: {
        color: 'red',
      },
      InputField: {
        // backgroundColor:'grey',
        height: 40,
        marginVertical: 10,
        // marginHorizontal:10,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
      },
      AddBtn: {
        alignSelf: 'center',
        backgroundColor: '#0081f1',
        padding: 10,
        borderRadius: 7,
      },
      AddBtnText: {
        fontWeight: '600',
        color: 'white',
      },
})