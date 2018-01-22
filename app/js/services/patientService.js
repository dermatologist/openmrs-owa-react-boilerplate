/*
 * This is just to show what it would look like to use ReactJS for the view with the business logic in some external library.
 * Next I'll change things to use Redux instead.
 */
import {autobind} from 'core-decorators';
import crudService from "./crudService";

export default class patientService extends crudService {

    @autobind
    static findPatients(query) {
        return this.getResources('/openmrs/ws/rest/v1/patient?q=' + query);
    }

    @autobind
    static getPatient(uuid) {
        return this.getResource('/openmrs/ws/rest/v1/patient/', uuid);
    }

}
