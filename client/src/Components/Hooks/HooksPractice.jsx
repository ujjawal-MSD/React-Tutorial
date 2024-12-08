import React, { useState } from 'react'

// const HooksPractice = () => {
//     let [greet, setGreet] = useState("Hello World")
//     return (
//         <>
//             <h1>{greet}</h1>
//             <button onClick={() => setGreet(greet === "Hello World" ? "GoodBye World" : "Hello World")}>
//                 Greet
//             </button>
//         </>
//     )
// }

// export default HooksPractice






// const HooksPractice = () => {
//     let [name, setName] = useState()
//     return (
//         <>
//             <h1>Hello {name}</h1>
//             <input type="text" onChange={(e)=> setName(e.target.value)} />
//         </>
//     )
// }

// export default HooksPractice





// const HooksPractice = () => {
//     let [click, setClick] = useState("Click Me")
//     return (
//         <>
//             <button onClick={()=>setClick(()=>click = "Disabled")}
//             disabled={click === "Disabled"} >
//                 {click}
//             </button>
//         </>
//     )
// }

// export default HooksPractice







// const HooksPractice = () => {
//     const container = {
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "center",
//         height: "100vh"
//     }
//     const button = {
//         padding: "10px 20px",
//         fontSize: "1rem",
//         color: "white",
//         backgroundColor: "blue",
//         border: "none",
//         borderRadius: "5px",
//         cursor: "pointer",
//         margin: "10px"
//     }

//     let [count, setCount] = useState(0)
//     if (count >= 10) {
//         alert("Maximum value reached!")
//     }
//     return (
//         <>
//             <div style={container}>
//                 <h1>{count}</h1>
//                 <div>
//                     <button style={button} onClick={() => setCount(() => count == 10 ? count : count+1)}>Increment</button>
//                     <button style={button} onClick={() => setCount(() => count == 0 ? count : count-1)}>Decrement</button>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default HooksPractice




// const HooksPractice = () => {
//     let [color, setColor] = useState("red")
//     return (
//         <>
//             <div style={{ height: "100vh", background: [color], display: "flex", alignItems: "center", justifyContent: "center" }}>
//                 <button style={{ padding: "20px", fontSize: "20px" }} onClick={() => setColor(() => color === 'red' ? 'blue' : 'red')}> Click me</button>
//             </div>
//         </>
//     )
// }

// export default HooksPractice



// const HooksPractice = () => {
//     let [toggle, setToggle] = useState("visible")
//     let [text, setText] = useState("show")
//     return (
//         <>
//             <div style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
//                 <h1 style={{ visibility: [toggle] }}> Welcome User</h1>
//                 <button style={{ padding: "20px", fontSize: "20px" }} onClick={() => (setText(() => text === 'show' ? 'hidden' : 'show')) || (setToggle(()=>toggle==="visible"?"hidden":"visible"))}> {text}</button>
//             </div>
//         </>
//     )
// }



// const HooksPractice = () => {
//     let [toggle, setToggle] = useState("visible")
//     return (
//         <>
//             <div style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
//                 <h1 style={{ visibility: [toggle] }}> Welcome User</h1>
//                 <button style={{ padding: "20px", fontSize: "20px" }} onClick={() => setToggle(() => toggle === "visible" ? "hidden" : "visible")}> {toggle === "visible" ? "Hide" : "Show"}</button>
//             </div>
//         </>
//     )
// }




// const HooksPractice = () => {
//     let [color, setColor] = useState("white")
//     return (
//         <>
//             <div style={{ background: [color], height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
//                 <h1> {color}</h1>
//                 <input placeholder='input color name' type="text" onChange={(e) => setColor(e.target.value)} />
//             </div>
//         </>
//     )
// }




const HooksPractice = () => {

    let [items, setItems] = useState([])
    return (
        <div
            style={{
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <button
                style={{
                    padding: "10px 20px",
                    marginBottom: "20px",
                    fontSize: "16px",
                }}
                onClick={() => setItems([...items, `Item ${items.length + 1}`])}
            >
                ADD ITEMS
            </button>

            <ul>
                {items.map((items, index) => (

                    <li key={index} style={{ fontSize: "18px", margin: "5px 0" }}> {items}</li>

                ))}
            </ul>

        </div>
    );
};

export default HooksPractice
