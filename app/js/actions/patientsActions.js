import axios from "axios";

export function fetchPatients() {
    return function (dispatch) {
        dispatch({type: "FETCH_PATIENTS"});

        /* 
          http://rest.learncode.academy is a public test server, so another user's experimentation can break your tests
          If you get console errors due to bad data:
          - change "reacttest" below to any other username
          - post some tweets to http://rest.learncode.academy/api/yourusername/tweets
        */
        axios.get("http://rest.learncode.academy/api/reacttest/tweets")
            .then((response) => {
                dispatch({type: "FETCH_PATIENTS_FULFILLED", payload: response.data})
            })
            .catch((err) => {
                dispatch({type: "FETCH_PATIENTS_REJECTED", payload: err})
            })
    }
}

export function addPatient(id, text) {
    return {
        type: 'ADD_PATIENT',
        payload: {
            id,
            text,
        },
    }
}

export function updatePatient(id, text) {
    return {
        type: 'UPDATE_PATIENT',
        payload: {
            id,
            text,
        },
    }
}

export function deletePatient(id) {
    return {type: 'DELETE_PATIENT', payload: id}
}