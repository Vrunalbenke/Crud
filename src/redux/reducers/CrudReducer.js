const initialState = {
  list: [],
};

export const CrudReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'Display_List':
      return {
        ...state,
        list: action.payload,
      };

    case 'Add_Item':
      return {...state, list: action.payload};

    case 'Edit_Item':
      return {...state, list: action.payload};

    case 'Delete_Item':
      return {...state, list: action.payload};

    case 'Update_Item': {
      let arr = [...state.list];
      arr = arr.map(item => {
        if (item.id === action.payload.id) {
          item.title = action.payload.title;
          item.body = action.payload.body;
        }

        return item;
      });
      return {...state,list:[...arr]}
    }

    default:
      return state;
  }
};
