import fastify from 'fastify'
import { knex } from './database'
import { z } from 'zod'
const app = fastify()

app.get('/buscacardapio', async ()=>{
    const dados = await knex('teste').select("*")

    return dados
})

app.post('/criacardapio',async (request , reply)=>{

    const dados = z.object({
        categoria: z.string(),
        id: z.string(),
        img: z.string(),
        name: z.string(),
        dsc: z.string(),
        price: z.number()
       })

       const { categoria, id ,  img, name , dsc , price } = dados.parse(request.body)

    await knex('teste').insert({     
       categoria,
       id,
       img, 
       name,
       dsc,
       price  						
          
    })

    return reply.status(201).send()
})

app.delete('/deletarcardapio', async ()=>{
    await knex('teste').delete().where("id" , "whole-brisket-texas-bbq-sauce")

    return knex('teste').select("*")
})

app.listen({
    port:3232,
})
.then(()=>{
    console.log('servidor rodando !')
})