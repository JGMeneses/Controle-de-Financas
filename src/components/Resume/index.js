import React from 'react'
import ResumeItem from '../ResumeItem'
import * as C from './style'
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign,
} from 'react-icons/fa'

const Resume = ({renda,despesa,total}) => {
  return (
    <C.Container>
        <ResumeItem title="Entradas" Icon={FaRegArrowAltCircleUp} value = {renda}/>
        <ResumeItem title="Saídas" Icon={FaRegArrowAltCircleDown} value = {despesa}/>
        <ResumeItem title="Total" Icon={FaDollarSign} value ={total}/>
    </C.Container>
  );
};

export default Resume;