import { GET_FORM_DATA, SUBMIT_FORM } from "../actions/formAction";

const initialFormState = {
    data:{},
};

const formReducer = (state=initialFormState, action) => {
    switch(action.type){
        case SUBMIT_FORM:
            const data = action.payLoad;
            return {...state, data:{...data}};
        case GET_FORM_DATA:
            return state;
        default:
            return state;
    }
}

export default formReducer;