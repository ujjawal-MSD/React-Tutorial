const Dynamic = () => {
    const fname = "Ujjawal"
    const lname = "Solanki"

    const age = 21
    const caste = "OBC"
    const add = () => {
        return fname + " " + lname
    }
    return (
        <>
            <h1>First Name : {fname}</h1>
            <h1>Last Name : {lname}</h1>
            <h1>{add()}</h1>
            <h1>Age : {age}</h1>
            <h1>Caste: {caste}</h1>
        </>
    )
}

export default Dynamic;