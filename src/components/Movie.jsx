function Movie (props){
    const{
        Title: title,
        Year: year,
        imdbId: id,
        Type: type,
        Poster: poster
    } = props

    return(
        <div className="mb-3 col-4">
            <div className="movie card">
                {
                    poster === 'N/A'
                        ? <img src={`https://via.placeholder.com/300x428?text=${title}`}/>
                        : <img src={poster} alt={title}/>
                }
                <div className="card-body">
                    <h4 className="card-title">{title}</h4>
                    <h6 className="card-subtitle mb-2 text-muted">{year}</h6>
                </div>
            </div>
        </div>
    )
}

export {Movie}