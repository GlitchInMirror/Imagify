import React, {Component} from 'react';
import './SearchBar.css';

class SearchBar  extends Component {

    state = {query : ''};

    onFormSubmit=(event) => {
        
        event.preventDefault();
        this.props.onSubmit(this.state.query);
    }
    render() {
        return (
            
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                <div className="field">
                    <div className="ui icon input">
                        <input  type="text" 
                        value= {this.state.query} 
                        placeholder="Search images..."
                        onChange={(e)=>{this.setState({query : e.target.value})}}
                        />
                        <i className="search icon"></i>
                    </div>
                </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;
