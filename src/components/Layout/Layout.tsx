import * as React from "react";
import Helmet from "react-helmet";
import * as PropTypes from "prop-types"

import { Header } from "./partials/Header";
import { Footer } from "./partials/Footer";
import { SectionMain } from "../Sections";

export interface LayoutProps {
    domain: string;
}

export const LayoutPropTypes: {[P in keyof LayoutProps]: PropTypes.Validator<any>} = {
    domain: PropTypes.string.isRequired
};

export class Layout extends React.Component<LayoutProps> {
    public static readonly propTypes = LayoutPropTypes;

    public render(): React.ReactNode {
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="UTF-8" />
                    <meta name="viewport" content="width=device-width,initial-scale=1" />
                    <title>React Layout</title>
                </Helmet>
                <Header />
                <SectionMain />
                <Footer />
            </React.Fragment>
        );
    }
}
