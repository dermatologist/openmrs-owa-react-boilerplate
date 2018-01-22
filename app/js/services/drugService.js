/*
 * This is just to show what it would look like to use ReactJS for the view with the business logic in some external library.
 * Next I'll change things to use Redux instead.
 */
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
