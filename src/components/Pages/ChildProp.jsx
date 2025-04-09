
const ChildProp = ({onButtonClick}) => {
    return (
        <div>
           
            <button className="cursor-pointer border-2" onClick={onButtonClick}>On ChildClick</button>
        </div>
    )
}

export default ChildProp