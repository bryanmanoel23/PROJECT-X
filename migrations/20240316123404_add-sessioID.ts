import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.alterTable('teste', (table)=>{
        table.string('sessionId')
       
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.alterTable('teste',(table)=>{
        table.dropColumn('sessionId')
        
    })
}

