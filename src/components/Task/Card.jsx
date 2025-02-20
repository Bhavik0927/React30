
const Card = ({ data }) => {

    const { name, email, body, id } = data;
    return (
        <div className="card card-border bg-base-200 drop-shadow-lg w-96 m-2">
            <div className="card-body">
                <div className="w-7 h-7 rounded-full bg-amber-500 flex justify-center items-center font-bold ">{id} </div>
                <h2 className="card-title text-orange-300">{name}  </h2>
                <div className="card-actions font-bold ">
                    <h2>{email}</h2>
                </div>
                <p>{body}</p>
            </div>
        </div>
    )
}

export default Card