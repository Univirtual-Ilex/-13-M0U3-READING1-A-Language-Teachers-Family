//Import
import React from 'react'
import styled from 'styled-components'
import styles from './Actividad3_styles'
import Container from '../Container'
import Ilex from '../../App/variables'
import ProgressBar from '../ProgressBar'
import MainTitle from '../MainTitle'
import InputWords from '../InputWords'
import ButtonCheck from '../ButtonCheck'
// styles from styled
import { ProgressbarContainer } from '../Actividad1/Actividad_styles'
// import {Olist} from './Actividad3_styles'
// import {Item}from './Actividad3_styles'
// import ButtonModal from '../ButtonModal'
import { IRow, ICol } from '../Grid'


// Componente base
const Actividad3_base = ({staticContext, ...props}) => {
    return (
        <Container {...props} bgImage='./src/bg_actividad1.png' w={69} h={38.8}>
            <ProgressbarContainer>
                <ProgressBar progress={75} />
            </ProgressbarContainer>
            <div className='container-content'>
                <MainTitle color={Ilex.violeta2}> COMPLETE THE SENTENCES WITH THE CORRECT WORDS FROM THE CONVERSATION </MainTitle>
            </div>

            <IRow>                
                <ICol py={1.5}>
                    <InputWords />

                </ICol>
            </IRow>

            {/* botón footer */}
            <ICol mt={7.5}>
                <ButtonCheck>NEXT</ButtonCheck>
            </ICol>

        </Container>

    )
}
const Actividad3 = styled(Actividad3_base)`${ styles }`

export default Actividad3
