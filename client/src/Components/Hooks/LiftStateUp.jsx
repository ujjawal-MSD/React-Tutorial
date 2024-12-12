import { useState } from 'react';

export const LiftStateUp = () => {
    let [input, setInput] = useState('')
    return (
        <>
            <InputComponent setInput={setInput} />
            <DispalyComponent input={input} />
        </>
    )
}

const InputComponent = ({ setInput }) => {


    return (
        <input type="text" onChange={(e) => setInput(e.target.value)} />
    )
}

const DispalyComponent = ({ input }) => {
    return (
        <h1>Your Name is :- {input} </h1>
    )
}