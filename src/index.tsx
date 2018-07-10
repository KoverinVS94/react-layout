import "../styles/main.scss"

import Axios from "axios";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { Layout } from "./components";

declare const BASE_URL: string;
declare const DEVELOPMENT: boolean;

const container = document.getElementById("content-overlay");
const renderMethod = DEVELOPMENT ? ReactDOM.render : ReactDOM.hydrate;

Axios.defaults.baseURL = BASE_URL;

if (!container) {
    // tslint:disable-next-line
    console.error("Can not found element for mounting Layout!");
} else {
    renderMethod(
        <BrowserRouter>
            <Layout domain={location.origin} />
        </BrowserRouter>,
        container
    );
}
