import axios from "axios";


const DATASTORE_URL = "https://webfiles.sebastianmonzel.de/jenkins/datastore/";

export function retrieveWebfiles() {

    let promise = axios({
        method: 'get',
        url: DATASTORE_URL,
    }).then(
        function (response) {
            return response.data;
        });
    return promise;
}

export function storeWebfile(datastore, message) {

    axios({
        method: 'post',
        url: DATASTORE_URL,
        data: {
            datastore: datastore,
            webfile: {
                message: message
            },
        }
    });

    console.log("create");
}