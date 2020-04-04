import Destinations from "../Containers/Destinations";
import Schedule from "../Containers/Schedule";

export const routes = [
    {
        path: "/home/destinations",
        title: 'Destinos',
        component: Destinations
    },
    {
        path: "/home/schedule",
        title: 'Schedule',
        component: Schedule
    }
];