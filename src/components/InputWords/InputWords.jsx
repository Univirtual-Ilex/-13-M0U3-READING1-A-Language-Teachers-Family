
//Import
import React from 'react'
import styled from 'styled-components'
import styles from './InputWords_styles'
import { Input } from './InputWords_styles'

// Componente base
const InputWords_base = ({w,m,p, ...props}) => {
    return (
        <div {...props}>
           <Input className='btn-clean input-words' />
        </div>
    )
}
const InputWords = styled(InputWords_base)`${ styles }`
export default InputWords
