import * as React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";

import { PreloaderMarkup } from "./PreloaderMarkup";

const LoaderOverlay = styled.div`
    position: absolute;
    font-size: 4em;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    z-index: 9999;
    opacity: 1;
    transition: all .2s ease;
`;

const SpinnerAnimation = styled(PreloaderMarkup) `
@keyframes lds-ripple {
    0% {
        top: 96px;
        left: 96px;
        width: 0;
        height: 0;
        opacity: 1;
    }
    100% {
        top: 18px;
        left: 18px;
        width: 156px;
        height: 156px;
        opacity: 0;
    }
}

@-webkit-keyframes lds-ripple {
    0% {
        top: 96px;
        left: 96px;
        width: 0;
        height: 0;
        opacity: 1;
    }
    100% {
        top: 18px;
        left: 18px;
        width: 156px;
        height: 156px;
        opacity: 0;
    }
}

.lds-ripple {
    position: relative;
}

.lds-ripple div {
    box-sizing: content-box;
    position: absolute;
    border-width: 4px;
    border-style: solid;
    opacity: 1;
    border-radius: 50%;
    -webkit-animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
    animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}

.lds-ripple div:nth-child(1) {
    border-color: #65bc1f;
}

.lds-ripple div:nth-child(2) {
    border-color: #65bc1f;
    -webkit-animation-delay: -0.5s;
    animation-delay: -0.5s;
}

.lds-ripple {
    width: 200px !important;
    height: 200px !important;
    -webkit-transform: translate(-100px, -100px) scale(1) translate(100px, 100px);
    transform: translate(-100px, -100px) scale(1) translate(100px, 100px);
}

#preloader {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    background: #fff;
}

.lds-css {
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    position: absolute;
    width: 200px;
    height: 200px;
}
`;

export class Preloader extends React.Component {
    public static readonly staticStyleLoader = () => {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = `/static/styles.v${document.documentElement.getAttribute("data-version")}.css`;
        link.onload = () => document.body.setAttribute("data-loaded", "true");

        document.addEventListener("DOMContentLoaded", () => document.body.appendChild(link));
    }

    public static readonly show = () => document.body.setAttribute("data-loaded", "true");
    public static readonly hide = () => document.body.removeAttribute("data-loaded");

    public render(): React.ReactNode {
        return (
            <React.Fragment>
                <Helmet>
                    <style>{`
                        body {
                            height: 100%;
                            overflow: hidden;
                        }
                        body[data-loaded="true"] {
                            overflow-y: inherit;
                        }
                    `}
                    </style>
                </Helmet>
                <div id="preloader">
                    <LoaderOverlay>
                        <SpinnerAnimation />
                    </LoaderOverlay>
                </div>
                {this.props.children}
            </React.Fragment>
        );
    }
}
