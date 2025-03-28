// Estructura de datos de recursos

[
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
        recoleccion:
                     [   
                        {
                            name:"canasta",
                            precioMejora: 80, // $
                            mejoraRecoleccion: 120, // unid
                            tiempoRecoleccion: 60, // seg
                            timepoInvestigacion: 180 // seg
                        },
                        {
                            name:"Pesca",
                            precioMejora: 20, // $
                            mejoraRecoleccion: 6, // unid
                            tiempoRecoleccion: 6, // seg
                            timepoInvestigacion: 240 // seg
                        },
                        // Mejoras de recoleccion de Edad I
                        {
                            name:"Siembra",
                            precioMejora: 100,
                            mejoraRecoleccion: 40,
                            tiempoRecoleccion: 6,
                            timepoInvestigacion: 180
                        },
                        {
                            name:"Riego rustico",
                            precioMejora: 100,
                            mejoraRecoleccion: 40,
                            tiempoRecoleccion: 6,
                            timepoInvestigacion: 180
                        },
                        {
                            name:"Granja I",
                            precioMejora: 150,
                            mejoraRecoleccion: 40,
                            tiempoRecoleccion: 6,
                            timepoInvestigacion: 200
                        },
                        {
                            name:"Carreta",
                            precioMejora: 100,
                            mejoraRecoleccion: 40,
                            tiempoRecoleccion: 6,
                            timepoInvestigacion: 180
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
                            tiempoRecoleccion: 1, // seg
                            timepoInvestigacion: 60 // seg
                        },
                        {
                            name:"Azada de piedra",
                            precioMejora: 70, // $
                            mejoraRecoleccion: 4, // unid
                            tiempoRecoleccion: 1, // seg
                            timepoInvestigacion: 60 // seg
                        },
                        {
                            name:"Hacha de piedra",
                            precioMejora: 60, // $
                            mejoraRecoleccion: 20, // unid
                            tiempoRecoleccion: 240, // seg
                            timepoInvestigacion: 60 // seg
                        }
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
                    }
                ]
    },
    {
        crafteo:
                [
                    {
                        name:"tablones de madera",
                        coste:{
                                madera: 3, // unid
                                plata: 10, // $
                                tablon: 1 // unid
                              },
                        timepoInvestigacion: 180, // seg
                        precioMejora: 100 // $
                    },
                    {
                        name:"loza de piedra",
                        coste:{
                                piedra: 2, // unid
                                plata: 10, // $
                                lozaDePiedra: 1 // unid
                              },
                        timepoInvestigacion: 180, // seg
                        precioMejora: 100 // $
                    }
                ]
    }
]