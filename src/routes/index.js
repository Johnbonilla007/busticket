import Client from "../Containers/Client";
import Destinations from "../Containers/Destinations";
import Schedule from "../Containers/Schedule";
import Reserve from "../Containers/Reserve";


import addClient from '../Dashboard/img/addClient.png'
import ticket from '../Dashboard/img/ticket.png'
import destinations from '../Dashboard/img/destinations.png'
import schedule from '../Dashboard/img/schedule.png'


export const routes = [
    {
        path: "/home/client",
        title: 'Client',
        component: Client,
        showInModal: true,
        pathIcon: addClient,
        description: 'Administra Clientes'
    },
    {
        path: "/home/reserve",
        title: 'Reserve',
        component: Reserve,
        pathIcon: ticket,
        description: 'Conservar Tickets'
    },
    {
        path: "/home/destinations",
        title: 'Destinos',
        component: Destinations,
        pathIcon: destinations,
        description: 'Lugares Disponibles Destinos'
    },
    {
        path: "/home/schedule",
        title: 'Schedule',
        component: Schedule,
        pathIcon: schedule,
        description: 'Horarios Inicio / Final'
    },
];