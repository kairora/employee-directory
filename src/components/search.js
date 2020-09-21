import React, { useState } from 'react';



export default function (props) {
    

    return (
        <>
            <div className="form-group">
                <label id="searchLabel" htmlFor="searchInput">Search</label>
                <input type="search" className="form-control" placeholder={props.pillow} id="searchInput" aria-describedby="searcher" onChange={e => props.onSearchChanged(e)}/>
            </div>
        </>
    )
}

// onChange={(e)=>this.searchSpace(e)}
