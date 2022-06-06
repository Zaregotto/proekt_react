import React from 'react';

import {useParams} from "react-router";

import {moviesCategory as cate} from "../../Services/movies.service";

import {PageHeader} from "../../components/page-header";
import Pagination from "../../components/pagination/Pagination";

const Catalog = () => {

    const { category } = useParams();

    return (
        <>
            <PageHeader>
                {category === cate.movie ? 'Movies' : 'TV Series'}
            </PageHeader>
            <div className="container">
                <div className="section mb-3">
                    <Pagination category={category}/>
                </div>
            </div>
        </>
    );
}

export {Catalog};
