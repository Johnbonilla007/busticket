import Client from "../Containers/Client";
import Destinations from "../Containers/Destinations";
import Schedule from "../Containers/Schedule";
import Reserve from "../Containers/Reserve";
import Motorist from "../Containers/Motorist";
import UnitType from "../Containers/UnitType";
import TransportationUnit from "../Containers/TransportationUnit";
import Test from "../Containers/Tests";


import addClient from '../Dashboard/img/addClient.png';
import ticket from '../Dashboard/img/ticket.png';
import destinations from '../Dashboard/img/destinations.png';
import schedule from '../Dashboard/img/schedule.png';
import motorists from '../Dashboard/img/motorists.jpg';


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
    {
        path: "/home/motorist",
        title: 'Conductores',
        component: Motorist,
        pathIcon: motorists,
        description: 'Conductores De Buses'
    },
    {
        path: "/home/unit-type",
        title: 'Unit Types',
        component: UnitType,
        pathIcon: motorists,
        description: 'Tipos de Unidades'
    },
    {
        path: "/home/transportation-unit",
        title: 'Transportation Units',
        component: TransportationUnit,
        pathIcon: motorists,
        description: 'Unidades de Transporte'
    },
    {
        path: "/home/test",
        title: 'Test',
        component: Test,
        pathIcon: motorists,
        description: 'Este es un test de control'
    },
];