// Initial State for any resource
export const initialContext = {
    manifest: {
        "version": "0.1.0",
        "name": "prescription",
        "description": "Prescription App",
        "launch_path": "index.html",
        "icons": {
            "48": "/img/omrs-button.png"
        },
        "developer": {
            "name": "dermatologist",
            "url": "https://github.com/dermatologist/openmrs-owa-prescription"
        },
        "default_locale": "en",
        "activities": {
            "openmrs": {
                "href": "*"
            }
        }
    }
    ,
    fetching: false,
    fetched: false,
    error: null,
};

