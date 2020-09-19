import React from 'react';

export default function () {
    return (
        <>
            <form>
                <div class="form-group">
                    <label id="searchLabel" for="searchInput">Search</label>
                    <input type="search" class="form-control" placeholder="Search Employees" id="searchInput" aria-describedby="searcher" />
                </div>
            </form>
        </>
    )
}