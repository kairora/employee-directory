import React from 'react';



export default function (props) {
    
    return (
        <>
            <div className="form-group">
                <label id="searchLabel" htmlFor="searchInput">Search</label>
                <input type="search" className="form-control" placeholder="Search Employees" id="searchInput" aria-describedby="searcher" onChange={e => props.onSearchChanged(e)}/>
            </div>
            <div style={{textAlign: "center"}}> Sort by Name: A-Z 
            <br />
             <button className="button" value="asc" onClick={e=>props.onSortChanged(e)}>Sort Names Asc</button>
             <button className="button" value="desc" onClick={e=>props.onSortChanged(e)}>Sort Names Desc</button>
            </div>
        </>
    )
}

