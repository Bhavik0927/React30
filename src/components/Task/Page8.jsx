import UserCard from "./UserCard";

const Page8 = () => {
    const user = {
        name: 'Bhavik',
        profession: 'Software Developer',
    }
    return (
        <>
            <h1>Its spread operator  </h1>
            <UserCard {...user} />
        </>
    )
}

export default Page8;