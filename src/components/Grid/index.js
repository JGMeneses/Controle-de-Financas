import React from "react";
import GridItem from "../GridItem"
import * as C from "./style"

const Grid = ({itens, setItens}) => {

    return (
       <C.Table>
        <C.Thead>
            <C.Tr>
                <C.Th width={40}>Descrição</C.Th>
                <C.Th width={40}>Descrição</C.Th>
                <C.Th width={10} alignCenter>
                    Tipo
                </C.Th>
                <C.Th width={10}></C.Th>
            </C.Tr>
        </C.Thead>
        <C.Tbody>
            {itens ?.map((item, index) =>
                <GridItem key={index} item={item}/>
            )}
        </C.Tbody>
       </C.Table>
    )
};

export default Grid;