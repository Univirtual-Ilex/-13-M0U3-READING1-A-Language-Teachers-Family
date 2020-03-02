
//Import
import React from 'react'
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

// Componente base
// 530 517 video player

const Actividad2A_base = ({staticContext, ...props}) => {
    return (
        <Container  { ...props } bgImage='./src/bg_actividad1.png'>
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

            <IRow className="contenido" justify="center">

                    <ButtonInfo imgUrl="src/svg/camara.svg"> 
                        CLICK HERE TO READ AGAIN THE DESCRIPTION
                    </ButtonInfo>

            </IRow>

            <ICol mt={5.5}>
                <ButtonCheck>NEXT</ButtonCheck>
            </ICol>
        </Container>

    )
}
const Actividad2A = styled(Actividad2A_base)`${ styles }`
export default Actividad2A
