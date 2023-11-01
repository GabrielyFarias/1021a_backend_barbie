import {describe,test,expect} from 'vitest'
import BancoMongoDB from './banco-mongodb'
describe("Banco em memória",()=>{
    test("Deve salvar no banco em memória",async ()=>{
        const input= {
            id:1,
            titulo:"test",
            descricao:"test",
            foto:"test",
        }
        const bancoEmMemoria = new BancoMongoDB();
        const result = await bancoEmMemoria.salvar(input)
        expect(result).toBe(true)
        expect(bancoEmMemoria.dados).toHaveLength(1)
        expect(bancoEmMemoria.dados).toEqual([input])
    })
})