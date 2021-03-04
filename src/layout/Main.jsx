import React, {useState ,useEffect} from 'react'
import {Movies} from "../components/Movies";
import {Preloader} from "../components/Preloader";
import {Search} from "../components/Search";

const API_KEY = '43c722b6';

const Main = () => {

    const [movies, setMovies] = useState([])
    const [searchNull, setSearchNull] = useState(true)
    const [loading, setLoading] = useState(true)

    const searchMovies = (search, type = 'all') => {
        if (search.length > 0) {
            setLoading(true)
            fetch(
                `https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}${type !== 'all' ? `&type=${type}` : ''}`
            )
                .then(response => response.json())
                .then(data => {
                    setMovies(data.Search)
                    setLoading(false)
                    setSearchNull(false)
                })
                .catch((error) => {
                    setLoading(false)
                })
        }else{
            setSearchNull(true)
            setLoading(false)
        }
    }

    useEffect(() => {
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}`)
            .then(response => response.json())
            .then(data => {
                setMovies(data.Search)
                setLoading(false)
                setSearchNull(true)
            })
            .catch((error) => {
                setLoading(false)
            })
    }, [])

    if (searchNull){
        return (
            <main style={{padding: '30px 0'}}>
                <div className="container">
                    <Search searchMovies={searchMovies}/>
                    <div className="movies">
                        <div className="container">
                            <div className="d-flex justify-content-center"><h4>Введите название фильма</h4></div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }else {
        return (
            <main style={{padding: '30px 0'}}>
                <div className="container">
                    <Search searchMovies={searchMovies}/>
                    <div className="movies">
                        <div className="container">
                            {loading ? (
                                <Preloader/>
                            ) : (
                                <Movies movies={movies}/>
                            )}
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

export {Main}