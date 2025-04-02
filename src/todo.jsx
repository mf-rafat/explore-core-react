export default function ToDo(props){
    return(
        <div className="card-style">
            <h2>ToDo Here</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus veritatis incidunt corporis voluptatum. Eligendi, rem debitis voluptas veritatis molestiae quis explicabo? Expedita magni sapiente dolorem itaque, et est iusto quo?</p>
            <button>here me </button>
            <p>{props.task}</p>

        </div>
    )
}