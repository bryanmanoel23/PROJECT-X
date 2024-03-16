import { knex as setupknex, Knex} from 'knex'

const config: Knex.Config = {
    client : 'sqlite3',
    connection: {
        filename: './db/app.db',
    },
    
    migrations: {
        extension: 'ts',
        directory:'./migrations'
    },
    useNullAsDefault: true
}

export const knex = setupknex(config)

export default config