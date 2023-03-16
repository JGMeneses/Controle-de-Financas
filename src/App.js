import React, { useEffect,useState } from "react";
import From from "./components/Form";
import Header from "./components/Header";
import Resume from "./components/Resume";
import GlobalStyle from "./styles/global";

 const App = () => {
  // verificando se existe algum arquivo no localStorage do computador e vai pegar os itens trasnactions
    const data = localStorage.getItem("transactions");
    const [transactionsList, setTransactionsList] = useState(
    data ? JSON.parse(data) : []
  );

    const [renda, setRenda] = useState(0);
    const [despesas, setDespesas] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(()=>{
      const valorDespesas = transactionsList
        .filter((item) => item.expense)
        .map((transaction) => Number(transaction.amount));

      const valorRenda = transactionsList
        .filter((item) => !item.expense)
        .map((transaction) => Number(transaction.amount));


      const despesas = valorDespesas.reduce((acc,cur) => acc+cur, 0).toFixed(2);//somando o valor de todas as despesas e pegando apenas duas casas decimais 
      const renda = valorRenda.reduce((acc,cur) => acc+cur, 0).toFixed(2);//somando o valor de todas a renda e pegando apenas duas casas decimais 
      
      const total = Math.abs(renda - despesas).toFixed(2);

      setDespesas(`R$ ${despesas}`);
      setRenda(`R$ ${renda}`);
      setTotal(`${Number(renda)< Number(despesas) ? "-" : "" }R$ ${total}`);

    }, [transactionsList]);

    const handleAdd = (transaction) => {
      const newArrayTransactions = [...transactionsList, transaction];

      setTransactionsList(newArrayTransactions);

      localStorage.setItem("transactions", JSON.stringify(newArrayTransactions));
    };

  // função App que retorna todos os componentes do projeto
  return (
    <>
    <Header/>
    <Resume renda={renda} despesas={despesas} total={total}/>
    <From handleAdd={handleAdd}/>
    <GlobalStyle/>
    </>

  );
 }


export default App;
