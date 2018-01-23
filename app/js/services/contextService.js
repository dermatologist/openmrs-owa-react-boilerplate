import crudService from "./crudService";

export default class contextService extends crudService {

    getManifest() {
        return this.getResources('manifest.webapp');
    }

}
