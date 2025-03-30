const {envs} = require ('./config/env')
const { startServer } = require('./server/server')


const main = () => {
    startServer({
        port: envs.PORT,
        public: envs.PUBLIC_PATH
    })
}




(async () => {
    main()
})()