import * as React from "react";
import { ControlledExpandElement } from "react-expand";

const hashClasses = require("main.scss");

export class SectionMain extends React.Component {
    public render(): React.ReactNode {
        return (
            <React.Fragment>
                <div className="section-main">
                   Main Content
                </div>
            </React.Fragment>
        );
    }
}
