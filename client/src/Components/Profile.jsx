import ProfileCard from "./ProfileCard"

const Profile = () => {
    return (
        <>
            <ProfileCard
                name="Ujjawal Solanki"
                age={25}
                greeting={
                    <strong>
                        Hello, I am Ujjawal Solanki. I am a software engineer.
                    </strong>
                }
            >
                <p>Hobbies: Listning Music , Learning New Things </p>
                <button>Contact </button>
            </ProfileCard>
        </>
    )
}

export default Profile;