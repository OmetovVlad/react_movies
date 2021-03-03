import React from 'react'
import {Movies} from "../components/Movies";
import {Preloader} from "../components/Preloader";
import {Search} from "../components/Search";

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            movies: [],
            loading: true
        }

        this.searchMovies = this.searchMovies.bind(this)
    }

    searchMovies (search, type = 'all'){
        fetch(
            `https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}${type !== 'all' ? `&type=${type}` : ''
            }`
        )
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search, loading: false}))
    }


    componentDidMount() {
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search, loading: false}))
    }

    render() {
        const {movies, loading} = this.state

        return (
            <main style={{padding: '30px 0'}}>
                <div className="container">
                    <Search searchMovies={this.searchMovies}/>
                    {loading ? (
                        <Preloader />
                    ) : (
                        <Movies movies={movies}/>
                    )}
                </div>
            </main>
        )
    }
}

export {Main}