import axios from "axios";
import {DATASTORE_CONFIGURATION} from "../components/configuration/DatastoreConfiguration";

export function retrieveWebfiles(datastoreName) {

    let publicDatatstore = DATASTORE_CONFIGURATION
        .filter(configuration => configuration.name === datastoreName)
        .pop();

    let promise = axios({
        method: 'get',
        url: publicDatatstore.url,
    }).then(
        function (response) {
            return response.data;
        });
    return promise;
}

export function storeWebfile(datastoreName, message) {

    let publicDatatstore = DATASTORE_CONFIGURATION
        .filter(configuration => configuration.name === datastoreName)
        .pop();

    axios({
        method: 'post',
        url: publicDatatstore.url,
        data: {
            webfile: {
                message: message
            },
        }
    });

    console.log("create");
}