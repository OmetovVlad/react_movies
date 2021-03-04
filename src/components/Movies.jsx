import {Movie} from "./Movie";

const Movies = props => {
    const {movies = []} = props;

    return(
        <div className="row">
            {movies.length ? movies.map(movie => (
                    <Movie key={movie.imdbID} {...movie}/>
                )) : <div className="d-flex justify-content-center"><h4>Результатов поиска нет</h4></div>
            }
        </div>
    )
}

export {Movies}