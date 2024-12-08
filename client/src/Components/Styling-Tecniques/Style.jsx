// const Style = () => {
//     return (
//         <div style={{ display: 'flex', flexDirection: "column", gap: "2rem", justifyContent: "center", alignItems: "center", background: "grey", color: 'white' }}>
//             <p>Style</p>
//             <p>CSS</p>
//         </div >
//     )
// }

// export default Style


///// Two different way to style the component


// const Style = () => {
//     const style = {
//         display: 'flex',
//         flexDirection: "column",
//         gap: "2rem",
//         justifyContent: "center",
//         alignItems: "center",
//         background: "grey",
//         color: 'white'
//     }
//     return (
//         <div style={style}>
//             <p>Style</p>
//             <p>CSS</p>
//         </div>
//     )
// }

// export default Style




// import style from './Style.module.css'

// const Style = () => {
//     return (
//         <div className={`${style['main-container']}`}>
//             <p className={`${style.containerItems}`}>Style</p>
//             <p className={`${style.items}`}>CSS</p>
//         </div>
//     )
// }

// export default Style




// use of styled component
import styled from 'styled-components'

// styled component using curly braces
const Container = styled.div({
    display:"flex",
    flexDirection:"column",
    gap:'2rem',
    justifyContent:"center",
    alignItems:"center",
    background:"grey",
    color:"white"
})

//style with template literals
const Items = styled.p`
    fontSize:"2rem";
`

const Item2 = styled.p`
    fontSize:"2rem";
    background:${(props=>{
        return props.background
    })};
`


const Style = () => {
 
    return (
        <Container>
            <Items>Style</Items>
            <Item2 background={"black"}>CSS</Item2>
        </Container>
    )
}

export default Style


