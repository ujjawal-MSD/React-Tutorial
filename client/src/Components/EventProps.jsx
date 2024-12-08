export const EventProps = () => {
    const HandelWelcomeUser = (name) => {
        alert(`Welcome ${name}`);
    }

    const HandelHover = () => {
        alert(`Welcome ${name}`);
    }

    return (
        <>
            <WelcomeUser onClick={() => HandelWelcomeUser('Ujjawal')}
                onMouserEnter={HandelHover}
            />
        </>
    )
}

const WelcomeUser =(props)=>{
    const handelGreeting =()=>{
        console.log("Hello");
        props.onClick();
        
    }
    return (
        <>
        <button onClick={props.onClick}> Click Me</button>
        <button onMouseEnter={props.onClick}>Hover</button>
        <button onClick={handelGreeting}>Greeting </button>
        </>
    )
}

