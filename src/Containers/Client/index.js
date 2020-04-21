import React, { useState, useEffect } from 'react';

import { ClientStyled } from './style';
import { TableControl, TextFieldControl, PanelControl } from '../../Controls';
import ClientItem from './components/ClientItem';
import { restClient } from '../../services/restClient';
import { utils } from '../../utils';
import { clientsColumnsTable } from './setting';
import { Button } from '@material-ui/core';

const url = 'clientes';

const Client = () => {
    const [clients, setClients] = useState([]);

    useEffect(() => {
        fetchClients();
    }, []);

    const fetchClients = async () => {
        const response = await restClient.httpGet(url);

        if (utils.evaluateArray(response)) {
            setClients(response);
        }
    }

    const handleSearchClientChange = async value => {
        if (!value) {
            fetchClients();
            return;
        }

        const response = await restClient.httpGet(url, {
            client: {
                correoCliente: value
            }
        });

        if (utils.evaluateArray(response)) {
            setClients(response);
            return;
        }

        setClients([]);
    }

    const onRenderCellEdit = row => {
        return <PanelControl anchor="right" label="Edit" title="Edit Destination">
            <ClientItem url={url} item={row} isEditing fetchClients={fetchClients} />
        </PanelControl>
    }

    const handleDeleleClick = row => async () => {
        const request = {
            cliente: {
                clienteId: row.clienteId
            }
        }

        const response = await restClient.httpDelete(url, request);

        if (response.mensaje === "Success") {
            fetchClients();
        }
    }

    const onRenderCellDelete = row => {
        return <Button variant="contained" color="secondary" onClick={handleDeleleClick(row)}> Delete </Button>
    }

    return (
        <ClientStyled>
            <h2>Clientes</h2>

            <TextFieldControl
                placeholder="Escribe [Nombre]"
                onEnter={handleSearchClientChange} />

            <PanelControl anchor="right" label="Add Client" title="Add Client">
                <ClientItem url={url} fetchClients={fetchClients} />
            </PanelControl>

            <TableControl
                fieldKey="clienteId"
                rows={clients}
                columns={clientsColumnsTable(onRenderCellEdit, onRenderCellDelete)}
            />

        </ClientStyled>
    )
}


export default Client;