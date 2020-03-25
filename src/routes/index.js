import Cards from "../controls/Cards";
import { EnhancedTableHead } from "../controls";

export const routes = [
    {
        path: "/home/cards",
        title: 'Destinos',
        component: Cards
    },
    {
        path: "/home/table",
        title: 'Table',
        component: EnhancedTableHead
    }
];