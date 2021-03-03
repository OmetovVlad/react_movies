import React from 'react'

class Search extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            search: '',
            type: 'all'
        }
    }

    handleKey = (event) => {
        if (event.key === 'Enter'){
            this.props.searchMovies(this.state.search, this.state.type);
        }
    }

    handleFilter = (event) => {
        this.setState( () => ({type: event.target.value}), () => {
            this.props.searchMovies(this.state.search, this.state.type);
        })
    }

    render() {
        return (
            <div className="container">
                <div className="form-row">
                    <div className="col-12">
                        <input
                            type="search"
                            className="form-control"
                            placeholder="Search"
                            onChange={(e) => this.setState({search: e.target.value})}
                            onKeyDown={this.handleKey}
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
                                        onChange={this.handleFilter}
                                        checked={this.state.type === 'all'}
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
                                        onChange={this.handleFilter}
                                        checked={this.state.type === 'movie'}
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
                                        onChange={this.handleFilter}
                                        checked={this.state.type === 'series'}
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
}

export {Search}
