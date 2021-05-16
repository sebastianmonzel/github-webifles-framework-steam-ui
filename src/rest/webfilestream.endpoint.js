import axios from "axios";


const DATASTORE_URL = "http://webfiles.sebastianmonzel.de/datastore/";

export function retrieveWebfiles() {
    return [
        {
            date: "2021-05-16 09:55",
            text: "Beautiful Entry 1 ❤",
        },
        {
            date: "2021-05-16 09:56",
            text: "Beautiful Entry 2 ❤",
        }
    ];
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