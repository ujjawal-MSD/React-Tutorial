const EventHandling = () => {
    const style = {
        padding: '10px',
        background: "yellow",
        font: "500"
    }

    const handleSubmit = (event) => {
        console.log(event);
        alert("Button Clicked")
    }

    const handleGereetingUsers = (greeting) => {
        alert(`Hey ${greeting} Welcome`)
    }
    return (
        <>
            <button onClick={handleSubmit} style={style}>
                click me
            </button>
            <button onClick={(event) => handleSubmit(event)} style={style}>
                click me
            </button>

            <button onClick={() => alert("Hey Welcome")} style={style}>
                click me
            </button>


            <button onClick={() => handleGereetingUsers("Ujjawal")} style={style}>
                click me
            </button>
        </>
    )
}


export default EventHandling;