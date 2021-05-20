module.exports = {
    host:process.env.HOST || 'localhost',
    port:process.env.PORT || (process.env.NODE_ENV === 'production' ? 8080 : 3001),
    apiHost:process.env.APIHOST || 'localhost',
    apiPort:process.env.APIPORT || '3030',
    dbHost:"localhost",
    dbPort:"27017",
    dbName: "react-express-mongo",
    app:{
        title:"React Express Mongo",
        description:'React Express Mongo Apps.',
        head:{
            titleTemplate:'React Express Mongo',
            meta:[
                {
                    name:"description",
                    content:"React Express Mongo Apps."
                },
                {charset:"utf-8"}
            ]
        }
    }
};
