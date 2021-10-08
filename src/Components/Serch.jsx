import React from 'react'
import {SearchFilter} from './SearchFilter'

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            videoType: 'all',
        }
    }

    handleChange = (event) => {
        this.setState(()=>({[event.target.name]: event.target.value}))
    }

    render() {
        return <div className="row">
            <div className="col s12">
                <div className="input-field">
                    <form action="#" onSubmit={(e) => {
                        e.preventDefault();
                        this.props.searchMovies(this.state.search, this.state.videoType);
                    }
                    }>
                        <input
                            placeholder="Search"
                            type="search"
                            className="validate"
                            value={this.state.search}
                            onChange={(e) => this.setState({search: e.target.value})}
                        />
                        <button className="btn search-btn" type="Submit">Ok</button>
                        <div className="videoType">
                            <p>
                                <label>
                                    <input name="videoType" type="radio" value="all" onClick={this.handleChange}
                                           checked={this.state.videoType === "all"}/>
                                    <span>All</span>
                                </label>
                            </p>
                            <p>
                                <label>
                                    <input name="videoType" type="radio" value="movie" onClick={this.handleChange}
                                           checked={this.state.videoType === "movie"}/>
                                    <span>Movies</span>
                                </label>
                            </p>
                            <p>
                                <label>
                                    <input name="videoType" type="radio" value="series" onClick={this.handleChange}
                                           checked={this.state.videoType === "series"}/>
                                    <span>Series</span>
                                </label>
                            </p>
                        </div>

                    </form>

                    <SearchFilter/>

                </div>
            </div>
        </div>
    }
}

export {Search}