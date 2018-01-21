import {client} from './crud';


export default class openmrsApi {


    static fetchResources(url) {
        return dispatch => {
            dispatch({
                type: 'FETCH_RESOURCES',
                payload: client.get(url)
            })
        }
    }

    static newResource() {
        return dispatch => {
            dispatch({
                type: 'NEW_RESOURCE'
            })
        }
    }

    static saveResource(url, resource) {
        return dispatch => {
            return dispatch({
                type: 'SAVE_RESOURCE',
                payload: client.post(url, resource)
            })
        }
    }

    static fetchResource(url, _id) {
        return dispatch => {
            return dispatch({
                type: 'FETCH_RESOURCE',
                payload: client.get(`${url}/${_id}`)
            })
        }
    }

    static updateResource(url, resource) {
        return dispatch => {
            return dispatch({
                type: 'UPDATE_RESOURCE',
                payload: client.put(`${url}/${resource._id}`, resource)
            })
        }
    }

    static deleteResource(url, _id) {
        return dispatch => {
            return dispatch({
                type: 'DELETE_RESOURCE',
                payload: client.delete(`${url}/${_id}`)
            })
        }
    }
}
