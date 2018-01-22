import {openmrsServer} from './crud';


// All functions return a promise

export default class crudService {


    getResources(url) {
        return openmrsServer.get(url);
    }

    postResource(url, resource) {
        return openmrsServer.post(url, resource);
    }

    getResource(url, _id) {
        return openmrsServer.get(`${url}/${_id}`);
    }

    updateResource(url, resource) {
        return openmrsServer.put(`${url}/${resource._id}`, resource);
    }

    deleteResource(url, _id) {
        return openmrsServer.delete(`${url}/${_id}`);

    }
}
