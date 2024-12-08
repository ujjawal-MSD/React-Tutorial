// const ProfileCard = (props) => {

    // Destructure props in the function signature to access the properties.
    // const { name, age, greeting, children } = props;



// direct further destructure 
const ProfileCard = ({name, age, greeting, children}) => {
   
    return (
        <>
            <p>name : {name}</p>
            <p>age : {age}</p>
            <p>greeting : {greeting}</p>
            <div>{children}</div>

        </>
    )
};

export default ProfileCard;