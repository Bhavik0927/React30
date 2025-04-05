import userUserStore from "./store";

const MainStream = () => {
    const user = userUserStore((state) => state.user);
    return (
        <div>
            <h1>{user.name}</h1>
        </div>
    )
}

export default MainStream;