import {Movie} from "./Movie";

function Movies (props) {
    const {movies = []} = props;

    return(
        <div className="movies">
            <div className="container">
                <div className="row">
                    {movies.length ? movies.map(movie => (
                            <Movie key={movie.imdbId} {...movie}/>
                        )) : <h4>Пусто</h4>
                    }
                </div>
            </div>
        </div>
    )
}

export {Movies}