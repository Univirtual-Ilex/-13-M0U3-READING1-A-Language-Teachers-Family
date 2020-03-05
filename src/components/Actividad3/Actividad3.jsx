//Import
import React, {useState} from 'react'
import styled from 'styled-components'
import styles from './Actividad3_styles'
import Container from '../Container'
import Ilex from '../../App/variables'
import ProgressBar from '../ProgressBar'
import MainTitle, { Subtitle } from '../MainTitle'
import InputWords from '../InputWords'
import ButtonCheck from '../ButtonCheck'
import ButtonUi from '../ButtonControlUI'
// styles from styled
import { ProgressbarContainer, UiButtonsContainer } from '../Actividad1/Actividad_styles'
// import {Olist} from './Actividad3_styles'
// import {Item}from './Actividad3_styles'
// import ButtonModal from '../ButtonModal'
import { IRow, ICol } from '../Grid'

import Data from './Actividad3_data'
import Modal from '../Generales/Modal'

// Componente base
const Actividad3_base = ({staticContext, ...props}) => {

    const [okInput0, setInput0] = useState(false)
    const [okInput1, setInput1] = useState(false)
    const [okInput2, setInput2] = useState(false)
    const [okInput3, setInput3] = useState(false)
    const [okInput4, setInput4] = useState(false)
    const [okInput5, setInput5] = useState(false)
    const [okInput6, setInput6] = useState(false)
    const [okInput7, setInput7] = useState(false)
    const [okInput8, setInput8] = useState(false)
    const [okInput9, setInput9] = useState(false)
    const [okInput10, setInput10] = useState(false)
    const [okInput11, setInput11] = useState(false)
    const [okInput12, setInput12] = useState(false)
    const [okInput13, setInput13] = useState(false)
    const [okInput14, setInput14] = useState(false)
    const [okInput15, setInput15] = useState(false)
    const [okInput16, setInput16] = useState(false)
    const [okInput17, setInput17] = useState(false)
    const [okInput18, setInput18] = useState(false)
    const [okInput19, setInput19] = useState(false)
    const [okInput20, setInput20] = useState(false)
    const [okInput21, setInput21] = useState(false)
    const [okInput22, setInput22] = useState(false)
    const [okInput23, setInput23] = useState(false)
    const [errInput0, setErrInput0] = useState(false)
    const [errInput1, setErrInput1] = useState(false)
    const [errInput2, setErrInput2] = useState(false)
    const [errInput3, setErrInput3] = useState(false)
    const [errInput4, setErrInput4] = useState(false)
    const [errInput5, setErrInput5] = useState(false)
    const [errInput6, setErrInput6] = useState(false)
    const [errInput7, setErrInput7] = useState(false)
    const [errInput8, setErrInput8] = useState(false)
    const [errInput9, setErrInput9] = useState(false)
    const [errInput10, setErrInput10] = useState(false)
    const [errInput11, setErrInput11] = useState(false)
    const [errInput12, setErrInput12] = useState(false)
    const [errInput13, setErrInput13] = useState(false)
    const [errInput14, setErrInput14] = useState(false)
    const [errInput15, setErrInput15] = useState(false)
    const [errInput16, setErrInput16] = useState(false)
    const [errInput17, setErrInput17] = useState(false)
    const [errInput18, setErrInput18] = useState(false)
    const [errInput19, setErrInput19] = useState(false)
    const [errInput20, setErrInput20] = useState(false)
    const [errInput21, setErrInput21] = useState(false)
    const [errInput22, setErrInput22] = useState(false)
    const [errInput23, setErrInput23] = useState(false)


    const [modalFlag, setModal] = useState(false)
    const [ok, setOk] = useState(false)
    const [err, setErr] = useState(false)


    const checkAnswer = (id, text) => {
        var data = Data[id]
        console.log(id)
        if(text.toLowerCase() === data.answer){
            data.right = 1
            eval('setInput' + id)(true)
            eval('setErrInput' + id)(false)
        }else{
            data.right = 0
            eval('setErrInput' + id)(true)
            eval('setInput' + id)(false)
        }
    }


    const checkActivity = () => {
        var count = 0
        Data.map((data, i) => {
            if(data.right == 1){
                count ++
            }else{
                setErr(true)
                setOk(false)
                setModal(true)
            }
            if(count == 8){
                setErr(false)
                setOk(true)
                setModal(true)
            }
        })
    }


    return (
        <Container {...props} bgImage='./src/bg_actividad1.png' w={75} h={45.8}>
            <ProgressbarContainer>
                <ProgressBar progress={75} />
            </ProgressbarContainer>
            <UiButtonsContainer>
                <ButtonUi icon='ilx-ayuda' tooltip='From the previous text complete the information below' />
                <ButtonUi icon='ilx-volver' tooltip='Start Again' onClick={ () => {window.location.href = '/actividad1'} } />
            </UiButtonsContainer>
            <div className='container-content'>
                <MainTitle color={Ilex.violeta2}> COMPLETE THE CHART WITH THE CORRECT INFORMATION FROM THE TEXT. </MainTitle>
            </div>

            <IRow justify="center">
                <ICol py={1.5} px={1} w={18} >
                    <Subtitle color={Ilex.violeta2} p={0}>Name </Subtitle>
                    <div className="wordsContainer">
                        <div className="baseWord">Andrés</div>
                        <InputWords idArr={0} changeCheck={checkAnswer} ok={okInput0} err={errInput0} m="0.5em 0" p="0.4em 0.6em" w={8} />
                        <InputWords idArr={1} changeCheck={checkAnswer} ok={okInput1} err={errInput1} m="0.5em 0" p="0.4em 0.6em" w={8} />
                        <InputWords idArr={2} changeCheck={checkAnswer} ok={okInput2} err={errInput2} m="0.5em 0" p="0.4em 0.6em" w={8} />
                        <div className="baseWord">Juan Pablo</div>
                        <InputWords idArr={3} changeCheck={checkAnswer} ok={okInput3} err={errInput3} m="0.5em 0" p="0.4em 0.6em" w={8} />
                        <InputWords idArr={4} changeCheck={checkAnswer} ok={okInput4} err={errInput4} m="0.5em 0" p="0.4em 0.6em" w={8} />
                        <InputWords idArr={5} changeCheck={checkAnswer} ok={okInput5} err={errInput5} m="0.5em 0" p="0.4em 0.6em" w={8} />
                    </div>

                </ICol>

                <ICol py={1.5} px={1}  w={18}>
                    <Subtitle color={Ilex.violeta2} p={0}>Age </Subtitle>
                    <div className="wordsContainer">                        
                        <InputWords idArr={6} changeCheck={checkAnswer} ok={okInput6} err={errInput6} m="0.5em 0" p="0.4em 0.6em" w={8} />
                        <div className="baseWord"> 72 </div>
                        <InputWords idArr={7} changeCheck={checkAnswer} ok={okInput7} err={errInput7} m="0.5em 0" p="0.4em 0.6em" w={8} />
                        <div className="baseWord"> 45 </div>
                        <InputWords idArr={8} changeCheck={checkAnswer} ok={okInput8} err={errInput8} m="0.5em 0" p="0.4em 0.6em" w={8} />                        
                        <InputWords idArr={9} changeCheck={checkAnswer} ok={okInput9} err={errInput9} m="0.5em 0" p="0.4em 0.6em" w={8} />
                        <InputWords idArr={10} changeCheck={checkAnswer} ok={okInput10} err={errInput10} m="0.5em 0" p="0.4em 0.6em" w={8} />
                        <InputWords idArr={11} changeCheck={checkAnswer} ok={okInput11} err={errInput11} m="0.5em 0" p="0.4em 0.6em" w={8} />
                    </div>
                </ICol>

                <ICol py={1.5} px={1}  w={18}>
                    <Subtitle color={Ilex.violeta2} p={0}>Ocupation</Subtitle>
                    <div className="wordsContainer">   
                        <InputWords idArr={12} changeCheck={checkAnswer} ok={okInput12} err={errInput12} m="0.5em 0" p="0.4em 0.6em" w={8} />
                        <InputWords idArr={13} changeCheck={checkAnswer} ok={okInput13} err={errInput13} m="0.5em 0" p="0.4em 0.6em" w={8} />
                        <div className="baseWord"> Police Officer </div>
                        <InputWords idArr={14} changeCheck={checkAnswer} ok={okInput14} err={errInput14} m="0.5em 0" p="0.4em 0.6em" w={8} />
                        <InputWords idArr={15} changeCheck={checkAnswer} ok={okInput15} err={errInput15} m="0.5em 0" p="0.4em 0.6em" w={8} />                        
                        <InputWords idArr={16} changeCheck={checkAnswer} ok={okInput16} err={errInput16} m="0.5em 0" p="0.4em 0.6em" w={8} />
                        <div className="baseWord"> Student </div>
                        <InputWords idArr={17} changeCheck={checkAnswer} ok={okInput17} err={errInput17} m="0.5em 0" p="0.4em 0.6em" w={8} />
                    </div>
                </ICol>

                <ICol py={1.5} px={1}  w={18}>
                    <Subtitle color={Ilex.violeta2} p={0}> Relationship </Subtitle>
                    <div className="wordsContainer">   
                        <InputWords idArr={18} changeCheck={checkAnswer} ok={okInput18} err={errInput18} m="0.5em 0" p="0.4em 0.6em" w={8} />
                        <InputWords idArr={19} changeCheck={checkAnswer} ok={okInput19} err={errInput19} m="0.5em 0" p="0.4em 0.6em" w={8} />
                        <InputWords idArr={20} changeCheck={checkAnswer} ok={okInput20} err={errInput20} m="0.5em 0" p="0.4em 0.6em" w={8} />
                        <InputWords idArr={21} changeCheck={checkAnswer} ok={okInput21} err={errInput21} m="0.5em 0" p="0.4em 0.6em" w={8} />                        
                        <InputWords idArr={22} changeCheck={checkAnswer} ok={okInput22} err={errInput22} m="0.5em 0" p="0.4em 0.6em" w={8} />
                        <div className="baseWord"> Niece </div>
                        <InputWords idArr={23} changeCheck={checkAnswer} ok={okInput23} err={errInput23} m="0.5em 0" p="0.4em 0.6em" w={8} />
                        <div className="baseWord"> Brother </div>
                    </div>
                </ICol>
            </IRow>

            {/* botón footer */}
            <ICol mt={7.5}>
                <ButtonCheck onClick={checkActivity}>Check</ButtonCheck>
            </ICol>

            <Modal visible={modalFlag} ok={ok} err={err} w={25} repeatUrl={'/actividad3'} finished={ok} />
        </Container>

    )
}
const Actividad3 = styled(Actividad3_base)`${ styles }`

export default Actividad3
