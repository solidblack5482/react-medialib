import React from 'react'
import {Movies} from '../Components/Movies'
import {Preloader} from "../Components/Preloader";
import {Search} from "../Components/Serch";

const API_KEY = process.env.REACT_APP_API_KEY;
console.log(API_KEY);
console.log(process.env)

class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            movies: [],
            videoType: 'All',
            response: true,
        }
        this.searchMovies = this.searchMovies.bind(this);
    }

    componentDidMount() {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search}))
    }

    searchMovies(s, type) {
        const requestString = `http://www.omdbapi.com/?apikey=${API_KEY}&s=${s}${type!=='all' ? '&type='+type : ''}`;
        console.log(requestString);
        fetch(requestString)
            .then(response => response.json())
            .then(data => (
                data['Response']==='True' ?
                    this.setState({response: true, movies: data['Search']}) :
                    this.setState({response: false})
            ));
    }

    render(){
        const {movies, response}=this.state;
        return <main className="container content">
            <Search searchMovies={this.searchMovies} />
            {
                response ?
                    movies.length ? (
                    <Movies movies={this.state.movies} videoType={this.state}/>
                    ) : <Preloader /> :
                    <div className="notFound">
                        <h5>По вашему запросу</h5>
                        <h4>НИЧЕГО НЕ НАЙДЕНО</h4>
                    </div>


            }



        </main>
    }
}

export {Main}