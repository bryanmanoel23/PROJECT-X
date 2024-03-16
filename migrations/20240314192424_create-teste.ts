import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('teste', (table)=>{
        table.string('id')
        table.string('categoria')
        table.string('img')
        table.string('name')
        table.string('dsc')
        table.integer('price')
    })
}


export async function down(knex: Knex): Promise<void> {

    await knex.schema.dropTable('teste')
    
}

