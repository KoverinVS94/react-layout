import * as React from "react";
import Helmet from "react-helmet";
import * as PropTypes from "prop-types";
import { ExpandController } from "react-expand";
import { Calculator as ReactCreditCalculator } from "react-credit-calculator";

import { Preloader } from "../Preloader";

import { Footer } from "./Footer";
import { SectionMain, SectionReceipt, SectionHowItWork, SectionService } from "../Sections";

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
            <ExpandController>
                <Preloader>
                    <Helmet>
                        <meta charSet="UTF-8" />
                        <meta name="viewport" content="width=device-width,initial-scale=1" />
                    </Helmet>
                    <ReactCreditCalculator {...this.conditions}>
                        <SectionMain />
                        <SectionReceipt />
                        <SectionHowItWork />
                        <SectionService />
                        <Footer />
                    </ReactCreditCalculator>
                </Preloader>
            </ExpandController>
        );
    }

    public get conditions() {
        return {
            term: {
                min: 5,
                max: 30,
            },
            amount: {
                min: 250,
                max: 4000
            },
            interest: 0.0175
        };
    }
}
