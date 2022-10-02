import Api from '../../services/api'
import Container from './styled'
import { useState, useEffect } from 'react'

function Modal(){

    const [amount, setAmount] = useState(0)    
    Api.amount = amount
    
    const [installments, setInstallments] = useState(0)
    Api.installments = installments

    const [mdr, setMdr] = useState(0)
    Api.mdr = mdr

    const [cost, setCost] = useState(0)
    const [cost15, setCost15] = useState(0)
    const [cost30, setCost30] = useState(0)
    const [cost60, setCost60] = useState(0)

useEffect(() =>{
   
    if(amount > 0 && installments > 0 && mdr > 0 ){
        const percentage = mdr/100
        const valuePerInstallments = amount/installments
        const tax = (valuePerInstallments * percentage)      
        setCost(valuePerInstallments - tax)
        setCost15(valuePerInstallments - (tax * 1.5))
        setCost30(valuePerInstallments - (tax * 2))
        setCost60(valuePerInstallments - (tax * 3))
    }

}, [amount, installments, mdr, cost])


    return(        
        <Container>
        <div className='simulacao'>
            <h2>Simule sua Antecipação</h2>
            <div>
                <h3>Informe o valor de venda*</h3>
                <input type = 'number' min = '1' value={amount} onChange = {e => setAmount(e.target.value)}/>           
                <span>Insira o valor da venda</span>
            </div>
            <div>
                <h3>Em quantas parcelas*</h3>
                <input type= 'number' min = '1' max = '12' value = {installments} onChange = {e => setInstallments(e.target.value)}/>
                <span>Máximo de 12 parcelas</span>
            </div>
            <div>
                <h3>Informe o percentual de MDR*</h3>
                <input type= 'number' min = '1' value = {mdr} onChange = {e => setMdr(e.target.value)}/>
                <span>Insira o MDR(Taxa cobrada pelas adquirentes)</span>
            </div>
        </div>

        <div className="recebimento">

        <h2>VOCÊ RECEBERÁ:</h2>

        <p>Amanhã: R$:{cost.toFixed([2])} </p>
        <p>Em 15 dias: {cost15.toFixed([2])}</p>
        <p>Em 30 dias: {cost30.toFixed([2])}</p>
        <p>Em 60 dias: {cost60.toFixed([2])}</p>

        </div>
        </Container>

    )

}

export default Modal