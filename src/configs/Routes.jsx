import React from "react";
import { Route, Routes } from "react-router-dom";

import {Catalog, Details, Home, NotFoundPage} from "../containers";



const AppRoutes = () => {
    return (
            <Routes>
                <Route
                    path='/:category/search/:keyword'
                    element={<Catalog/>}
                />
                <Route
                    path='/:category/:id'
                    element={<Details/>}
                />
                <Route
                    path='/:category'
                    element={<Catalog/>}
                />
                <Route
                    path="/"
                    exact
                    element={<Home/>}
                />
                <Route
                    path='*'
                    element={<NotFoundPage/>}
                    />
            </Routes>
    );
};

export {AppRoutes}