const SUBMIT_FORM = "SUBMIT_FORM";
const GET_FORM_DATA = "GET_FORM_DATA";

const submitForm = (data) => {
    return {
        type:SUBMIT_FORM,
        payLoad:data,
    }
}

const getData = () => {
    return {
        type:GET_FORM_DATA,
    }
}

export {GET_FORM_DATA, SUBMIT_FORM, getData, submitForm};