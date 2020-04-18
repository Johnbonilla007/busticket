export const destinationsColumnsTable = (onRenderCellEdit, onRenderCellDelete) => [
    {
        onRenderCell: onRenderCellEdit,
        minWidth: 30,
    },
    {
        onRenderCell: onRenderCellDelete,
    },
    {
        id: 'destinoId',
        numeric: false,
        disablePadding: false,
        label: "Destino Id",
        minWidth: 10,
    },
    {
        id: 'nombreDestino',
        numeric: false,
        disablePadding: false,
        label: "Nombre Destino",
    },
    {
        id: 'departamentoDestino',
        numeric: false,
        disablePadding: false,
        label: "Departamento Destino",
    },
    {
        id: 'ciudadDestino',
        numeric: false,
        disablePadding: false,
        label: "Ciudad Destino",
    }
]