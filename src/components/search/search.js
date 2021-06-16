import React from 'react';

import iconSearch from '../../images/magnifying-glass.svg';

import './search.css';

class Search extends React.Component{
    render(){
        return (
            <div className="container-search">
                <form action="" className="content-search" onSubmit="e.preventDefault();">                    
                    <input type="search" name="search" id="search" placeholder="Buscar..." required/>
                    <button type="submit">
                        <span>
                            <img src={iconSearch} alt="search" className="icon-search" />
                        </span>
                    </button>
                </form>
            </div>
        );
    }

}
export default Search;