import * as React from "react";
const hashClasses = require("main.scss");

import { Calculator } from "../../Calculator";

export class SectionMain extends React.Component {

    public render(): React.ReactNode {
        return (
            <React.Fragment>
                <div className={hashClasses["section-main"]}>
                    <div className={hashClasses["container"]}>
                        <div className={hashClasses["overlay"]}>
                            <h1 className={hashClasses["title"]}>
                                Кредиты на карту до 4 000 гривен
                            </h1>
                            <p className={hashClasses["sub-title"]}>
                                Получите деньги в банке Украины или на карту за 7 минут
                            </p>
                        </div>
                    </div>
                    <div className={hashClasses["calc"]}>
                        <Calculator />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
