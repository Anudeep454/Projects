function Movie(){

    const movies=()=>{

    }
    return(
        <div>
            <h1>child</h1>
            <ul>
                {
                    movies.map((m, index) =>(
                        <li key={index}>
                            <img
                                src={m.image}
                                alt={m.title}
                            />
                            <h1>{m.title}</h1>
                            <p>Year:</p>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
export default Movie;