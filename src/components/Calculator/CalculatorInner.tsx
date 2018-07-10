import * as React from "react";
import {
    CalculatorControlWrapper,
    CalculatorControlTypes,
    CalculatorInput
} from "react-credit-calculator";
import { OnMobile, OnTabletDesktop } from "react-breakpoint";

const hashClasses = require("main.scss");

export class CalculatorInner extends React.Component {
    public render(): React.ReactNode {
        return (
            <React.Fragment>
                <div className={hashClasses["total-wrap"]}>
                    <CalculatorControlWrapper type={CalculatorControlTypes.amount}>
                        <div className={hashClasses["form-group"]}>
                            <label className={hashClasses["form-label"]}>
                                <OnTabletDesktop>Сумма кредита:</OnTabletDesktop>
                                <OnMobile>Сумма:</OnMobile>
                            </label>
                            <div className={`${hashClasses["input-group"]} ${hashClasses["total-sum"]}`}>
                                <CalculatorInput
                                    type="number"
                                    className={hashClasses["form-control"]}
                                />
                            </div>
                        </div>
                    </CalculatorControlWrapper>
                    <CalculatorControlWrapper type={CalculatorControlTypes.term}>
                        <div className={hashClasses["form-group"]}>
                            <label className={hashClasses["form-label"]}>
                                <OnTabletDesktop>Срок кредита:</OnTabletDesktop>
                                <OnMobile>Срок:</OnMobile>
                            </label>
                            <div className={`${hashClasses["input-group"]} ${hashClasses["total-term"]}`}>
                                <CalculatorInput
                                    type="number"
                                    className={hashClasses["form-control"]}
                                />
                            </div>
                        </div>
                    </CalculatorControlWrapper>
                </div>
                <div className={hashClasses["time-receipt"]}>
                    <span>Получить деньги в:</span>
                    <span>{this.time}</span>
                </div>
            </React.Fragment>
        );
    }

    protected get time(): string {
        const date = new Date();
        return [date.getHours(), date.getMinutes() + 25].join(":");
    }
}
