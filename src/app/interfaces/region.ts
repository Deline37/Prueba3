import {Día} from './día'

export interface Region {
    nombre:string;
    dias:Array<Día>;
}

export let regiones:Array<Region> = [{

    nombre:'Valparaiso',
    dias:[{
        nombreDia:'Lunes',
        clima:'Soleado',
        gradosC:20,
        gradosF:68,

    },
    {
        nombreDia:'Martes',
        clima:'Lluvia',
        gradosC:10,
        gradosF:50,
    },
    {
        nombreDia:'Miercoles',
        clima:'Tormenta',
        gradosC:5,
        gradosF:41
    },
    {
        nombreDia:'Jueves',
        clima:'Soleado',
        gradosC:22,
        gradosF:71.6
    },
    {
        nombreDia:'Viernes',
        clima:'Soleado',
        gradosC:18,
        gradosF:64.4
    },
    {
        nombreDia:'Sabado',
        clima:'Soleado',
        gradosC:20,
        gradosF:68
    },
    {
        nombreDia:'Domingo',
        clima:'Soleado',
        gradosC:21,
        gradosF:69.8
    },]
    
},
{

    nombre:'Metropolitana',
    dias:[{
        nombreDia:'Lunes',
        clima:'Soleado',
        gradosC:25,
        gradosF:77
    },
    {
        nombreDia:'Martes',
        clima:'Soleado',
        gradosC:28,
        gradosF:82.4
    },
    {
        nombreDia:'Miercoles',
        clima:'Lluvia',
        gradosC:15,
        gradosF:59
    },
    {
        nombreDia:'Jueves',
        clima:'Lluvia',
        gradosC:13,
        gradosF:55.4
    },
    {
        nombreDia:'Viernes',
        clima:'Nublado',
        gradosC:10,
        gradosF:50
    },
    {
        nombreDia:'Sabado',
        clima:'Soleado',
        gradosC:15,
        gradosF:59
    },
    {
        nombreDia:'Domingo',
        clima:'Soleado',
        gradosC:21,
        gradosF:69.8
    },]
    
},
{

    nombre:'BioBio',
    dias:[{
        nombreDia:'Lunes',
        clima:'Lluvia',
        gradosC:8,
        gradosF:46.4
    },
    {
        nombreDia:'Martes',
        clima:'Lluvia',
        gradosC:10,
        gradosF:50
    },
    {
        nombreDia:'Miercoles',
        clima:'Tormenta',
        gradosC:6,
        gradosF:42.8
    },
    {
        nombreDia:'Jueves',
        clima:'Soleado',
        gradosC:20,
        gradosF:68
    },
    {
        nombreDia:'Viernes',
        clima:'Soleado',
        gradosC:24,
        gradosF:75.2
    },
    {
        nombreDia:'Sabado',
        clima:'Nublado',
        gradosC:12,
        gradosF:53.6
    },
    {
        nombreDia:'Domingo',
        clima:'Nublado',
        gradosC:13,
        gradosF:55.4
    },]
    
},
{

    nombre:'Araucania',
    dias:[{
        nombreDia:'Lunes',
        clima:'Soleado',
        gradosC:20,
        gradosF:68
    },
    {
        nombreDia:'Martes',
        clima:'Lluvia',
        gradosC:10,
        gradosF:50
    },
    {
        nombreDia:'Miercoles',
        clima:'Tormenta',
        gradosC:5,
        gradosF:41
    },
    {
        nombreDia:'Jueves',
        clima:'Soleado',
        gradosC:22,
        gradosF:71.6
    },
    {
        nombreDia:'Viernes',
        clima:'Soleado',
        gradosC:18,
        gradosF:64.4
    },
    {
        nombreDia:'Sabado',
        clima:'Soleado',
        gradosC:20,
        gradosF:68
    },
    {
        nombreDia:'Domingo',
        clima:'Soleado',
        gradosC:21,
        gradosF:69.8
    },]
    
},]

