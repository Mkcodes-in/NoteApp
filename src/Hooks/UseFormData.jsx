import React, { useContext } from 'react'
import { FormContext } from '../Context/FormContext'

export default function UseFormData() {
    const { state, dispatch } = useContext(FormContext);
    return {state, dispatch};
}
