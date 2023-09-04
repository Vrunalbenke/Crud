import {useDispatch} from 'react-redux';
import axios from 'axios';

let UID = 10;
let id = 100;

export const DisplayData = () => {
  //   const dispatch = useDispatch();

  return (async dispatch => {
    let DataUrl = 'https://jsonplaceholder.typicode.com/';
    const configurationObject = {
      method: 'get',
      url: `${DataUrl}posts/`,
    };
    let respone = await axios(configurationObject);
    
    // console.log('This is the data from axios call :------------->', respone.data);
    let data = respone.data;

    dispatch({
      type: 'Display_List',
      payload: data,
    });
    if(respone === undefined){
        throw new Error('Request Failed')
    }
  });
};

export const AddItemAction = item => (dispatch, getState) => {
  const {
    CrudReducer: {list},
  } = getState();

  dispatch({
    type: 'Add_Item',
    payload: [
      {UserId: ++UID, id: ++id, title: item.title, body: item.body},
      ...list,
    ],
  });
};

export const DeleteItemAction = item => (dispatch, getState) => {
  const {
    CrudReducer: {list},
  } = getState();

  dispatch({
    type: 'Delete_Item',
    payload: list.filter(i => i.id !== item.id),
  });
};

export const UpdateItemActions = item => (dispatch, getState) => {
  const {
    CrudReducer: {list},
  } = getState();

  dispatch({
    type: 'Update_Item',
    // payload: list.map(i => {  
    //     if(i.id === item.id ){
    //         i.title = item.title;
    //         i.body = item.body;
    //     }
    // }),
    payload : item
  });
};
