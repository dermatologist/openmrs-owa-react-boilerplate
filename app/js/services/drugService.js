import crudService from "./crudService";

export default class drugService extends crudService {

    findDrugs(query) {
        return this.getResources('/openmrs/ws/rest/v1/drug?q=' + query);
    }

    getDrug(uuid) {
        return this.getResource('/openmrs/ws/rest/v1/drug/', uuid);
    }

}
