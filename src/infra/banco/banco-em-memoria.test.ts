import {describe,test,expect} from 'vitest'
import BancoEmMemoria from './banco-em-memoria'

describe("banco em memoria",()=>{
    test("deve salvar no banco em memoria",()=>{
        const input= {
            id:1,
            titulo:"test",
            descricao:"test",
            foto:"test"
        }
        const bancoEmMemoria = new BancoEmMemoria();
        const result = bancoEmMemoria.salvar(input)
        expect(result).toBe(true)
        expect(bancoEmMemoria.dados).toHaveLength(1)
        expect(bancoEmMemoria.dados).toEqual([input])
    })
})