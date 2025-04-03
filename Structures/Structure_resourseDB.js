// Estructura de datos de recursos

db.skills.insertMany([
    {
        name:"comida",
        tiempoRecoleccion:1, 
        cantidadRecoleccion:2
    },
    {
        name:"madera",
        tiempoRecoleccion: 1,
        cantidadRecoleccion: 2,
    },
    {
        name:"piedra",
        tiempoRecoleccion: 1,
        cantidadRecoleccion: 2,
    },
    {
        name:"mineral de cobre",
        tiempoRecoleccion: 1,
        cantidadRecoleccion: 2,
    },
    
    {
        name:"tablones de madera",
        coste:{
                madera: 3, // unid
                plata: 10, // $
              },
        timepoInvestigacion: 180, // seg
        precioMejora: 100 // $
    },
    {
        name:"loza de piedra",
        coste:{
                piedra: 2, // unid
                plata: 10, // $
              },
        timepoInvestigacion: 180, // seg
        precioMejora: 100 // $
    },
    {
        name: "lingote de bronce",
        coste: {
            mineralDeCobre: 4, // unid
            plata: 10, // $
        },
        timepoInvestigacion: 90, //seg
        precioMejora: 150, // $
    },
    {
        name:"Tabla de arcilla y papiros",
        precioMejora: 1000, // $
        timepoInvestigacion: 480 // seg
    },
    {
        name:"ladrillo de piedra",
        precioMejora: 900, // $
        timepoInvestigacion: 480 // seg
    },
    {
        name:"Aleacion II",
        precioMejora: 900, // $
        timepoInvestigacion: 480 // seg
    },
    {
        name:"Martillo y Cincel",
        precioMejora: 500, // $
        timepoInvestigacion: 480// seg
    },
    {
        recoleccion:
                     [   
                        {
                            name:"canasta",
                            precioMejora: 80, // $
                            mejoraRecoleccion: 6, // unid
                            mejoraTiempoRecoleccion: 1, // seg
                            timepoInvestigacion: 180 // seg
                        },
                        {
                            name:"Pesca",
                            precioMejora: 20, // $
                            mejoraRecoleccion: 12, // unid
                            mejoraTiempoRecoleccion: 1, // seg
                            timepoInvestigacion: 240 // seg
                        },
                        // Mejoras de recoleccion de Edad I
                        {
                            name:"Siembra",
                            precioMejora: 100,
                            mejoraRecoleccion: 6,
                            mejoraTiempoRecoleccion: 1,
                            timepoInvestigacion: 180
                        },
                        {
                            name:"Riego rustico",
                            precioMejora: 100,
                            mejoraRecoleccion: 10,
                            mejoraTiempoRecoleccion: 1,
                            timepoInvestigacion: 180
                        },
                        {
                            name:"Granja I",
                            precioMejora: 150,
                            mejoraRecoleccion: 15,
                            mejoraTiempoRecoleccion: 1,
                            timepoInvestigacion: 200
                        },
                        {
                            name:"Carreta",
                            precioMejora: 100,
                            mejoraRecoleccion: 20,
                            mejoraTiempoRecoleccion: 1,
                            timepoInvestigacion: 180
                        },
                        {
                            name:"Canoa de pesca",
                            mejoraRecoleccion: 20,
                            mejoraTiempoRecoleccion: 1,
                            timepoInvestigacion: 90, // seg
                            precioMejora: 230 // $
                        },
                        // Mejoras de recoleccion de Edad II
                        {
                            name:"Riego Avanzado",
                            mejoraRecoleccion: 20, // unid
                            mejoraTiempoRecoleccion: 1, // seg
                            timepoInvestigacion: 90 // seg
                        },
                        {
                            name:"Graja (rotacion de ganado)",
                            mejoraRecoleccion: 40, // unid
                            mejoraTiempoRecoleccion: 1, // seg
                            timepoInvestigacion: 300 // seg
                        },
                        {
                            name:"Barco de pesca",
                            mejoraRecoleccion: 40, // unid
                            mejoraTiempoRecoleccion: 1, // seg
                            timepoInvestigacion: 300 // seg
                        },
                        {
                            name:"Estraccion de metal I",
                            mejoraRecoleccion: 20, //unid
                            mejoraTiempoRecoleccion: 60, // seg
                            timepoInvestigacion: 10 // seg
                        }
                        
                    ]
    },
    {
        herramientas:
                      [
                        {
                            name:"Pico de piedra",
                            precioMejora: 60, // $
                            mejoraRecoleccion: 4, // unid
                            mejoraTiempoRecoleccion: 1, // seg
                            timepoInvestigacion: 60 // seg
                        },
                        {
                            name:"Azada de piedra",
                            precioMejora: 70, // $
                            mejoraRecoleccion: 6, // unid
                            mejoraTiempoRecoleccion: 1, // seg
                            timepoInvestigacion: 60 // seg
                        },
                        {
                            name:"Hacha de piedra",
                            precioMejora: 60, // $
                            mejoraRecoleccion: 20, // unid
                            mejoraTiempoRecoleccion: 1, // seg
                            timepoInvestigacion: 60 // seg
                        },
                        {
                            name:"Herramienta de cobre",
                            timepoInvestigacion: 90, // seg
                            precioMejora: 180 // $
                        },
                        {
                            name:"Aleacion",
                            timepoInvestigacion: 90, //seg
                            precioMejora: 250 // $
                        },
                        {
                            name:"Rueda de madera con refuerzo de cobre",
                            coste:{
                                madera: 4, // unid
                                lingoteDeCobre: 5, // unid
                                plata: 20 // $
                            },
                            timepoInvestigacion: 160, // seg
                            precioMejora: 200 // $
                        },
                        {
                            name:"Taladro rustico",
                            mejoraRecoleccion: 30, // unid
                            mejoraTiempoRecoleccion: 1, // seg
                            timepoInvestigacion: 240 // seg
                        },
                        {
                            name:"Equipo de arado de bronce",
                            mejoraRecoleccion: 30, // unid
                            mejoraTiempoRecoleccion: 1, // seg
                            timepoInvestigacion: 360 // seg
                        },
                        {
                            name: "Sierra",
                            mejoraRecoleccion: 40, // unid
                            mejoraTiempoRecoleccion: 1, // seg
                            timepoInvestigacion: 360 // seg
                        },
                      ]
    },
// Estructura de datos Arbol de tecnologia Edad 0
    {
        domesticacion:
                        [
                            {
                                name:"Animales de trabajo",
                                precioMejora: 100, // $
                                timepoInvestigacion: 180 // seg
                            },
                            {
                                name:"Buelles de carga",
                                mejoraRecoleccion: 36, // unid
                                timepoInvestigacion: 1 // seg
                            }
                        ],
    },
    {
        industria:
                [
                    {
                        name:"taller de piedra",
                        coste:{
                                piedra: 30, // unid
                                tablonesDeMadera:20, //unid
                                plata:120, // $
                        },
                        timepoInvestigacion: 180,// seg
                        requisitos:"loza de piedra, tablones de medera"
                    },
                    {
                        name:"fundicio I",
                        coste:{
                            lozaDePiedra: 40, // unid
                            tablonDeMadera: 20,// unid
                            plata: 500 // $
                        },
                        timepoInvestigacion: 180,// seg
                    },
                    {
                        name:"foja I",
                        coste: {
                            lozaDePiedra: 60, // unid
                            tablonDeMadera: 20,// unid
                            plata: 500 // $
                        },
                        timepoInvestigacion: 180, // seg
                        requisitos: "fundicion I"
                    },
                    {
                        name:"carpinteria",
                        coste:{
                            piedra: 20, // unid
                            madera: 20, // unid
                            plata: 500 // $
                        },
                        timepoInvestigacion: 180 // seg
                    },
                    // Mejora de industria Edad II
                    {
                        name:"Carpinteria II",
                        mejoraRecoleccion: 80, // unid
                        mejoraTiempoRecoleccion: 1, //seg
                        tiempoRecoleccion: 360, // seg
                        precioMejora: 800, // $
                    },
                    {
                        name:"Taller de piedra",
                        mejoraRecoleccion: 80, // unid
                        mejoraTiempoRecoleccion: 1, // seg
                        timepoInvestigacion: 360, // seg
                        precioMejora: 800, //$
                    },
                    {
                        name:"Fundicion II",
                        mejoraRecoleccion: 60, // unid
                        mejoraTiempoRecoleccion: 1, // seg
                        timepoInvestigacion: 360, // seg
                        precioMejora: 800, //$
                    },
                    {
                        name:"Forja II",
                        precioMejora: 800, // $
                        timepoInvestigacion: 360 // seg
                    },
                    {
                        name:"Telar",
                        precioMejora: 900, // seg
                        timepoInvestigacion: 360 // seg
                    }
                ]
    },
])

db.createCollection('skills',{
    validator:{
        $jsonSchema:{
            bsonType:'object',
            required:["userName","password"],
            properties:{
                comida:{
                    bsonType:"string",
                    minimum: 0,
                },
                piedra:{
                    bsonType:"string",
                    minimum: 0,
                },
                madera:{
                    bsonType:"string",
                    minimum: 0,
                },
                edad0:{
                    bsonType:"array",
                    items:{
                        bsonType:"string",
                        uniqueItems: true,
                        enum:["canasta","pesca","pico de piedra","azada de piedra","hacha de piedra"]
                    }
                }
            }
        }
    }
})