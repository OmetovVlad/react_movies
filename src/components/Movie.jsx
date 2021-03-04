const Movie = props => {
    const{
        Title: title,
        Year: year,
        imdbID: id,
        Type: type,
        Poster: poster
    } = props

    return(
        <div className="mb-3 col-4">
            <a className="movie card" href={`https://www.imdb.com/title/${id}/`} target="_blank" rel="noreferrer">
                {
                    poster === 'N/A'
                        ? <img src={`https://via.placeholder.com/300x428?text=${title}`} alt={title}/>
                        : <img src={poster} alt={title}/>
                }
                <div className="card-body">
                    <h4 className="card-title">{title}</h4>
                    <h6 className="card-subtitle mb-2 text-muted">Год выпуска: {year}</h6>
                    <h6 className="card-subtitle mb-2 text-muted">Тип: {type}</h6>
                </div>
            </a>
        </div>
    )
}

export {Movie}