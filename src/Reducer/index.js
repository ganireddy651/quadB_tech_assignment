const initialState = {
  formData: null,
  appliedJob: null,
}

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SUBMIT':
      return {
        ...state,
        formData: action.payload,
      }
    case 'APPLY':
      return {
        ...state,
        appliedJob: action.payload,
      }
    default:
      return state
  }
}

export default formReducer
