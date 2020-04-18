export const motoristColumnTable = (onRenderCellEdit, onRenderCellDelete) => [
    {
        onRenderCell: onRenderCellEdit,
        minWidth: 30,
    },
    {
        onRenderCell: onRenderCellDelete,
    },
    {
        id: 'conductorId',
        numeric: false,
        disablePadding: false,
        label: "Conductor Id",
        minWidth: 10,
    },
    {
        id: 'nombre',
        numeric: false,
        disablePadding: false,
        label: "Nombre",
    },
    {
        id: 'identidad',
        numeric: false,
        disablePadding: false,
        label: "Identidad",
    },
    {
        id: 'edad',
        numeric: false,
        disablePadding: false,
        label: "Edad",
    },
    {
        id: 'genero',
        numeric: false,
        disablePadding: false,
        label: "Genero",
    },
    {
        id: 'telefono',
        numeric: false,
        disablePadding: false,
        label: "Telefono",
    }
]