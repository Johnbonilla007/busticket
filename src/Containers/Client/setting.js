export const clientsColumnsTable = (onRenderCellEdit, onRenderCellDelete) => [
    {
        onRenderCell: onRenderCellEdit,
        minWidth: 30,
    },
    {
        onRenderCell: onRenderCellDelete,
    },
    {
        id: 'clienteId',
        numeric: false,
        disablePadding: false,
        label: "Cliente Id",
        minWidth: 10,
    },
    {
        id: 'correoCliente',
        numeric: false,
        disablePadding: false,
        label: "Correo",
        minWidth: 10,
    },
    {
        id: 'identidad',
        numeric: false,
        disablePadding: false,
        label: "Identidad",
        minWidth: 10,
    },
    {
        id: 'nombreCliente',
        numeric: false,
        disablePadding: false,
        label: "Nombre",
    },
    {
        id: 'generoCliente',
        numeric: false,
        disablePadding: false,
        label: "Genero",
    },
    {
        id: 'edadCliente',
        numeric: false,
        disablePadding: false,
        label: "Edad",
    },
    {
        id: 'telefonoCliente',
        numeric: false,
        disablePadding: false,
        label: "Telefono",
    },
    {
        id: 'direccionCliente',
        numeric: false,
        disablePadding: false,
        label: "Dirección",
    },
]