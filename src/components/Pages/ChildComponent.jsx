const ChildComponent = ({ childMessage }) => {

    const handleClick = () => {
        childMessage("You clicked the button");
    }
    return (
        <div>
            <h2>Child Component</h2>
            <button onClick={handleClick}>Click Me</button>
        </div>
    )
}

export default ChildComponent;