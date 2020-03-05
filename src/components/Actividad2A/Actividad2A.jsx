
//Import
import React, {useState} from 'react'
import styled from 'styled-components'
import styles from './Actividad2A_styles'
import Container from '../Container'

// Variables
import Ilex from '../../App/variables'
// Components
import {ICol, IRow} from '../Grid'
import ProgressBar from '../ProgressBar'
import MainTitle from '../MainTitle'
import ButtonCheck from '../ButtonCheck'
import ButtonInfo from '../ButtonInfo'
import InputWords from '../InputWords'
import Tooltip from '../Tooltip'
import Data from './Actividad2A_data'
import Modal from '../Generales/Modal'
// Componente base
// 530 517 video player

const Actividad2A_base = ({staticContext, ...props}) => {
    const [tooltipVisible, setTooltipVisible] = useState(false)
    const [okInput0, setInput0] = useState(false)
    const [okInput1, setInput1] = useState(false)
    const [okInput2, setInput2] = useState(false)
    const [okInput3, setInput3] = useState(false)
    const [okInput4, setInput4] = useState(false)
    const [okInput5, setInput5] = useState(false)
    const [okInput6, setInput6] = useState(false)
    const [okInput7, setInput7] = useState(false)
    const [errInput0, setErrInput0] = useState(false)
    const [errInput1, setErrInput1] = useState(false)
    const [errInput2, setErrInput2] = useState(false)
    const [errInput3, setErrInput3] = useState(false)
    const [errInput4, setErrInput4] = useState(false)
    const [errInput5, setErrInput5] = useState(false)
    const [errInput6, setErrInput6] = useState(false)
    const [errInput7, setErrInput7] = useState(false)

    const [modalFlag, setModal] = useState(false)
    const [ok, setOk] = useState(false)
    const [err, setErr] = useState(false)


    const checkAnswer = (id, text) => {
        var data = Data[id]

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
        <Container  { ...props } bgImage='./src/arbol.png'>
            <IRow w={80} align="center">
                <ICol mt={2}>
                    <ProgressBar progress={50}/>
                </ICol>
            </IRow>
            <IRow>
                <ICol>
                <MainTitle color={Ilex.violeta2} size={1.5}>
                    READ THE DESCRIPTION OF A TEACHER’S FAMILY AND COMPLETE THE FAMILY TREE.
                </MainTitle>  
                </ICol>
            </IRow>

            <IRow className="contenido" justify="center" pt={1} >

                    <ButtonInfo imgUrl="./src/SVG/camara.svg" onClick={ () => setTooltipVisible(!tooltipVisible) } > 
                        CLICK HERE TO READ AGAIN THE DESCRIPTION
                    </ButtonInfo>

            </IRow>

            {/* Fila */}
            <IRow justify="center" pt={2.5} gutters={0.8}>
                    <InputWords w={7.3} ok={okInput0} err={errInput0} changeCheck={checkAnswer} idArr={0} p="0.3em 0.5em"/>
                    <InputWords w={7.3} ok={okInput1} err={errInput1} changeCheck={checkAnswer} idArr={1} p="0.3em 0.5em"/>
            </IRow>
            {/* Fila */}

            {/* Fila */}
            <IRow justify="center" pt={1.5} gutters={0.8}>
                    <InputWords w={7.3} ok={okInput2} err={errInput2} changeCheck={checkAnswer} idArr={2} p="0.3em 0.8em"/>
                    <InputWords w={7.3} ok={okInput3} err={errInput3} changeCheck={checkAnswer} idArr={3} p="0.3em 0.8em"/>
                    <InputWords w={7.3} ok={okInput4} err={errInput4} changeCheck={checkAnswer} idArr={4} p="0.3em 0.8em"/>
                    <InputWords w={7.3} ok={okInput5} err={errInput5} changeCheck={checkAnswer} idArr={5} p="0.3em 0.8em"/>
                    <InputWords w={7.3} ok={okInput6} err={errInput6} changeCheck={checkAnswer} idArr={6} p="0.3em 0.8em"/>
            </IRow>
            {/* Fila */}

            {/* Fila */}
            <IRow justify="center" pt={1.5} gutters={0.8}>
                    <InputWords w={7.3} ok={okInput7} err={errInput7} changeCheck={checkAnswer} idArr={7} p="0.3em 0.8em"/>
            </IRow>
            {/* Fila */}

            {/* botón footer */}
            <ICol mt={7.5}>
                <ButtonCheck onClick={checkActivity}>CHECK</ButtonCheck>
            </ICol>

                <Tooltip visible={tooltipVisible} closebtn = { () => setTooltipVisible(!tooltipVisible) } fz = {1} w={ 50 } pos="9em, 6em">
                    <IRow p={1}>
                        <ICol>
                            Hello, everyone! This is my family. As you can see in the photo, we’re eating together. We’re celebrating a Christmas dinner at home. I’m going to describe my family to you.  Well, let me start with my sister. Her name is Sofia. She’s the oldest in the family. She’s a nurse and she’s 45.  She is married too. Her husband’s name is Juan Pablo and he’s 48. He’s a doctor. They have a child and her name is Mariana. She’s only 5 years old. She’s a student in kindergarten. My mother’s name is Rosario and she is 72. She doesn’t work. She’s retired. I love her so much! My father isn’t in the picture because unfortunately, he died last year. His name was Mario. He was 76 years old and he was a Police officer.  I have two young brothers. Their names are Cristian and Paulo. Cristian is 23 and Paulo is 27.  Cristian studies Mechanical Engineering at UTP and Paulo works as a chef in a local restaurant. As for me, my name is Andrés. I’m 36 years old and I’m an English teacher at a public school. I love my job. What can you tell me about your family? 
                        </ICol>
                    </IRow>
                </Tooltip>
            <Modal visible={modalFlag} ok={ok} err={err} w={25} repeatUrl={'/actividad2a'} nxtUrl={'/actividad3'} />
        </Container>

    )
}
const Actividad2A = styled(Actividad2A_base)`${ styles }`
export default Actividad2A
