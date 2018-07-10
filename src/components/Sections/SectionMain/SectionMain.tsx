import * as React from "react";
import { ControlledExpandElement } from "react-expand";

const hashClasses = require("main.scss");

import { RegisterForm } from "../../RegisterForm";
import { Calculator } from "../../Calculator";

export class SectionMain extends React.Component {
    public render(): React.ReactNode {
        return (
            <React.Fragment>
                <div className={hashClasses["section-main"]}>
                    <div className={hashClasses["container"]}>
                        <div className={hashClasses["overlay"]}>
                            <h1 className={hashClasses["title"]}>
                                Выгодные онлайн кредиты на карту
                            </h1>
                            <p className={hashClasses["sub-title"]}>
                                Уже через 7 минут вы сможете получить до 4000
                                гривен на карту, или забрать перевод
                                в отделении банка через час.
                            </p>
                        </div>
                    </div>
                    <div className={hashClasses["wrap"]}>
                        <div className={hashClasses["container"]}>
                            <div className={hashClasses["calc"]}>
                                <Calculator />
                            </div>
                            <ControlledExpandElement expandId={RegisterForm.expandKey}>
                                <RegisterForm />
                            </ControlledExpandElement>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
