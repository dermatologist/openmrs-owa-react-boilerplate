import crudService from "./crudService";

export default class contextService extends crudService {

    static getManifest() {
        return this.getResources('manifest.webapp');
    }

}
