import { useState } from "react"
export default function Counter() {
    const container = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh"
    }
    const button = {
        padding: "10px 20px",
        fontSize: "1rem",
        color: "white",
        backgroundColor: "blue",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        margin: "10px"
    }


    // let value = 0;
    // const handelInc = () => {
    //     value++
    //     console.log(value)
    // }

    let [count, setCount] = useState(0)
    return (
        <>
            <div style={container}>
                <h1>{count}</h1>
                <div>
                    <button style={button} onClick={()=> setCount(()=>count++)}>Increment</button>
                    <button style={button} onClick={()=> setCount(()=>count--)}>Decrement</button>
                    <button style={button} onClick={()=> setCount(()=>count=0)}>Reset</button>
                </div>
            </div>
        </>
    )
}   