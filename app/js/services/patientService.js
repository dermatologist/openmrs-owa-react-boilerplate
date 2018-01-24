/*
 * This is just to show what it would look like to use ReactJS for the view with the business logic in some external library.
 * Next I'll change things to use Redux instead.
 */
import crudService from "./crudService";

export default class patientService extends crudService {

    findPatients(query) {
        return this.getResources('/openmrs/ws/rest/v1/patient?q=' + query);
    }


    getPatient(uuid) {
        return this.getResource('/openmrs/ws/rest/v1/patient/', uuid);
    }

}
