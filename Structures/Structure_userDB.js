db.user.insertMany([
    {
        userName: "Bugambilio",
        password: "Alita1415",
        culture: "chipcha",
        //...,
        resources: {
            meal: 40,
            stone: 80,
            wood: 80,
            silver: 1000
        },
        tecnologies: {
            // Edad 0
            edad0: [
                {
                    name: "canasta",
                    improvedCollection: 8, // unid
                    improvesCollectionTime: 1 // seg 
                }
            ],
            edad1: [
                {
                    name: "pico de cobre",
                    improvedCollection: 4, // unid
                    improvesCollectionTime: 1 // seg
                }
            ],
            edad2: [
                {
                    name: "carpinteria II",
                    improvedCollection: 80, // unid
                    improvesCollectionTime: 1 // seg
                }
            ]
        },
    }
])

db.createCollection('user',{
    validator:{
        $jsonSchema:{
            bsonType:'object',
            required:["userName","password"],
            properties:{
                comida:{
                    bsonType:"string",
                    minimum: 0,
                    maximum: 500
                },
                piedra:{
                    bsonType:"string",
                    minimum: 0,
                    maximum: 500
                },
                madera:{
                    bsonType:"string",
                    minimum: 0,
                    maximum: 500
                },
                edad0:{
                    bsonType:"string",
                    enum:["canasta","pesca","pico de piedra","azada de piedra","hacha de piedra"]
                }
            }
        }
    }
})