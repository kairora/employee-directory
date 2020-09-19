import React from 'react';

export default function () {
    return (
        <>
            <form>
                <div className="form-group">
                    <label id="searchLabel" htmlFor="searchInput">Search</label>
                    <input type="search" className="form-control" placeholder="Search Employees" id="searchInput" aria-describedby="searcher" />
                </div>
            </form>
        </>
    )
}