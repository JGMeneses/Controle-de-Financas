import React from 'react';
import * as C from './style';

const ResumeItem = ({title,Icon}) => {
  return (
    <C.Container>
        <C.Header>
            <C.HeaderTitle> {title}</C.HeaderTitle>
        <Icon/>
        </C.Header>
        <C.Total>1000</C.Total>
    </C.Container>
  )
}

export default ResumeItem