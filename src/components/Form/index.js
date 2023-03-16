import React from 'react'
import * as C from "./style"
import { useState } from "react"


const From = () => {
    const[desc, setDesc] = useState("");
    const[valor, setvalor] = useState("");
    const[isExpense, setisExpense] = useState("");

    const handleSave = () => {
        if(!desc || !valor){
            alert("Informe a descrição e o valor!");
            return;
        }else if(valor < 1){
            alert("O valor tem que ser positivo!")
            return;
        }

        
    }
  return (
    <C.Container>
        <C.InputContent>
            <C.Label> Descrição </C.Label>
            <C.input value={desc} onChange={(e)=> setDesc(e.target.value)}/>
        </C.InputContent>
        <C.InputContent>
            <C.Label> valor </C.Label>
            <C.input type = "number" value={valor} onChange={(e)=> setvalor(e.target.value)}/>
        </C.InputContent>
        <C.RadioGroup>
            <C.input
                type="radio"
                id="rIncome"
                defaultChecked
                name="group1"
                onChange={()=>setisExpense(!isExpense)}
            />
            <C.Label htmlFor='rIncome'>Entrada</C.Label>
            <C.input
                type="radio"   
                id="rExpenses"   
                name='group1' 
                onChange={()=>setisExpense(!isExpense)}     
            />
            <C.Label htmlFor='rExpenses'>Saída</C.Label>
        </C.RadioGroup>
        <C.Button onClick={handleSave}>ADICIONAR</C.Button>
    </C.Container>
  )
}

export default From