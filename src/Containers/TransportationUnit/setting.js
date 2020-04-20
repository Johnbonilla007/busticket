
export const transportationUnitColumnsTable = (onRenderCellEdit, onRenderCellDelete) => [
    {
        onRenderCell: onRenderCellEdit,
        minWidth: 30,
    },
    {
        onRenderCell: onRenderCellDelete,
    },
    {
        id: 'unidadTransporteId',
        numeric: false,
        disablePadding: false,
        label: "Unidad Transporte Id",
        minWidth: 10,
    },
    {
        id: 'conductorId',
        numeric: false,
        disablePadding: false,
        label: "Conductor Id",
    },
    {
        id: 'tipoUnidadId',
        numeric: false,
        disablePadding: false,
        label: "Tipo Unidad Id",
    },
    {
        id: 'unidadTransporteNo',
        numeric: false,
        disablePadding: false,
        label: "Unidad Transporte No",
    },
    {
        id: 'capacidad',
        numeric: false,
        disablePadding: false,
        label: "Capacidad",
    },
    {
        id: 'capacidadPorFilaUnidadTransporte',
        numeric: false,
        disablePadding: false,
        label: "Capacidad Fila",
    },
    {
        id: 'asientosDisponibles',
        numeric: false,
        disablePadding: false,
        label: "Asientos Disponibles",
    }
]