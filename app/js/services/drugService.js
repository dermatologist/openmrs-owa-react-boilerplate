import {autobind} from 'core-decorators';
import crudService from "./crudService";

export default class drugService extends crudService {

    @autobind
    static findDrugs(query) {
        return this.getResources('/openmrs/ws/rest/v1/drug?q=' + query);
    }

    @autobind
    static getDrug(uuid) {
        return this.getResource('/openmrs/ws/rest/v1/drug/', uuid);
    }

}
