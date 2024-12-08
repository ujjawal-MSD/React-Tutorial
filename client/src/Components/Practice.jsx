// export default Components 
const Practice = () => {
    const student = [1]
    return (
        <>
            <div>{student.length && "No Students Available"}</div>
            {/* <div>{student.length === 0 && "No Students Available"}</div> */}
            <div>
                the length of student is {student.length}
            </div>
        </>
    )
}

export default Practice





// // export named Components 
// export const Practice = () => {
//     const student = [3]
//     return (
//         <>
//             {/* <div>{student.length && "No Students Available"}</div> */}
//             <div>{student.length === 0 && "No Students Available"}</div>
//             <div>
//                 the length of student is {student.length}
//             </div>
//         </>
//     )
// }


