import React, {Component} from 'react';
import DatastoreConfiguration from "./DatastoreConfiguration";
import DatastoreInput from "./DatastoreInput";


class Configuration extends Component {

    render() {
        return (
            <div>
                <h1>Read-and-Write-Datastores</h1>
                <DatastoreInput />
                <DatastoreConfiguration name={"friends_only"} url={"https://webfiles.sebastianmonzel.de/datastore/81507a06-787c-4408-a929-dab17d5c1969"}/>
                <DatastoreConfiguration name={"all"} url={"https://webfiles.sebastianmonzel.de/datastore/25aeba09-1654-499e-bf9c-50f624a02ec6"}/>
                <h1>Read-only-Datastores</h1>
                <DatastoreInput />
                <DatastoreConfiguration name={"sergej_brin"} url={"https://webfiles.google.com/datastore/09bead59-c2bc-48b8-b312-f63507da059f"}/>
            </div>
        );
    }
}

export default Configuration;
