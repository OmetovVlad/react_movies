import React, {useState} from 'react'

const Search = props => {

    const {
        searchMovies = Function.prototype
    } = props

    const [search, setSearch] = useState('')
    const [type, setType] = useState('all')

    const handleKey = (event) => {
        searchMovies(search, type);
    }

    const handleFilter = (event) => {
        setType(event.target.value)
        searchMovies(search, event.target.value)
    }

    return (
        <div className="container">
            <div className="form-row">
                <div className="col-12">
                    <input
                        type="search"
                        className="form-control"
                        placeholder="Search"
                        onChange={(e) => setSearch(e.target.value)}
                        onKeyUp={handleKey}
                    />
                </div>
                <div className="col-12 mt-3">
                    <div className="row">
                        <div className="col-1">
                            <div className="custom-control custom-radio custom-control-inline">
                                <input
                                    type="radio"
                                    id="all"
                                    name="type"
                                    className="custom-control-input"
                                    value="all"
                                    onChange={handleFilter}
                                    checked={type === 'all'}
                                />
                                <label className="custom-control-label" htmlFor="all">All</label>
                            </div>
                        </div>
                        <div className="col-1">
                            <div className="custom-control custom-radio custom-control-inline">
                                <input
                                    type="radio"
                                    id="movie"
                                    name="type"
                                    className="custom-control-input"
                                    value="movie"
                                    onChange={handleFilter}
                                    checked={type === 'movie'}
                                />
                                <label className="custom-control-label" htmlFor="movie">Movies</label>
                            </div>
                        </div>
                        <div className="col-1">
                            <div className="custom-control custom-radio custom-control-inline">
                                <input
                                    type="radio"
                                    id="series"
                                    name="type"
                                    className="custom-control-input"
                                    value="series"
                                    onChange={handleFilter}
                                    checked={type === 'series'}
                                />
                                <label className="custom-control-label" htmlFor="series">Series</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {Search}
