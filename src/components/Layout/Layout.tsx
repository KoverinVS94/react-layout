import * as React from "react";
import Helmet from "react-helmet";
import * as PropTypes from "prop-types";
import { Route, Switch, Link } from "react-router-dom";

import { Input } from "./Input";
import { Preloader } from "../Preloader";
import { StyledInput } from "./StyledInput";
import { NotFoundRoute } from "./NotFoundRoute";
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
            <Preloader>
                <Helmet>
                    <meta charSet="UTF-8" />
                    <meta name="viewport" content="width=device-width,initial-scale=1" />
                </Helmet>
                <SectionMain />
            </Preloader>
        );
    }
}
