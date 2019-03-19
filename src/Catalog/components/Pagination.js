import React from "react";
import { NavLink } from "react-router-dom";

const Pagination = ({ location, page = 1, count, perPage = 10 }) => {
    const pagesCount = Math.ceil(count / perPage);
    const pages = [];

    for (let i = 1; i < pagesCount; i++) {
        pages.push(i);
    }

    const getSearchWithPage = page => {
        const urlParams = new URLSearchParams(location.search);
        urlParams.set("page", page);
        return urlParams.toString();
    };

    return (
        <div className="Pagination">
            <nav data-pagination>
                <ul>
                    {pages.map(page => (
                        <li className="current">
                            <NavLink
                                key={page}
                                to={{
                                    pathname: location.pathname,
                                    search: getSearchWithPage(page)
                                }}
                            >
                                {page}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default Pagination;
