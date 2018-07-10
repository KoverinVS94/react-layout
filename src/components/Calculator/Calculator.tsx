import * as React from "react";
import {
    CalculatorControlWrapper,
    CalculatorControlTypes,
    CalculatorContextTypes,
    CalculatorLabelTypes,
    CalculatorContext,
    CalculatorSlider,
    CalculatorInput,
    CalculatorLabel
} from "react-credit-calculator";
import { OnMobile, OnMobileTablet, OnTabletDesktop, OnDesktop } from "react-breakpoint";
import { ExpandControl, ControlledExpandElement, ExpandContextTypes, ExpandContext } from "react-expand";

import { RegisterForm } from "../RegisterForm";

const hashClasses = require("main.scss");

export class Calculator extends React.Component {
    public static readonly contextTypes = {
        ...CalculatorContextTypes,
        ...ExpandContextTypes
    };
    public static readonly expandKey = "mainCalc";

    public readonly context: CalculatorContext & ExpandContext

    public componentDidMount() {
        this.context.changeExpandState(Calculator.expandKey, true)();
    }

    public render(): React.ReactNode {
        return (
            <ControlledExpandElement expandId={Calculator.expandKey}>
                <div className={hashClasses["calc-main"]}>
                    <div className={hashClasses["calc-content"]}>
                        <CalculatorControlWrapper type={CalculatorControlTypes.amount}>
                            <div className={hashClasses["form-group"]}>
                                <div className={hashClasses["wrap-label"]}>
                                    <label className={hashClasses["form-label"]}>
                                        Сумма:
                                    </label>
                                </div>
                                <OnMobile>
                                    <div className={`${hashClasses["input-group"]} ${hashClasses["credit-sum"]}`}>
                                        <div className={hashClasses["input-wrap"]}>
                                            <CalculatorInput type="number" className={hashClasses["form-control"]} />
                                        </div>
                                    </div>
                                </OnMobile>
                                <div className={hashClasses["wrap-rc-slider"]}>
                                    <CalculatorSlider />
                                    <span className={`${hashClasses["dot"]} ${hashClasses["dot-left"]}`}>
                                        {this.context.Conditions.Amount.min}
                                    </span>
                                    <span className={`${hashClasses["dot"]} ${hashClasses["dot-right"]}`}>
                                        {this.context.Conditions.Amount.max}
                                    </span>
                                </div>
                                <OnTabletDesktop>
                                    <div className={`${hashClasses["input-group"]} ${hashClasses["credit-sum"]}`}>
                                        <div className={hashClasses["input-wrap"]}>
                                            <CalculatorInput type="number" className={hashClasses["form-control"]} />
                                        </div>
                                    </div>
                                </OnTabletDesktop>
                            </div>
                        </CalculatorControlWrapper>
                        <CalculatorControlWrapper type={CalculatorControlTypes.term}>
                            <div className={hashClasses["form-group"]}>
                                <div className={hashClasses["wrap-label"]}>
                                    <label className={hashClasses["form-label"]}>
                                        На срок:
                                    </label>
                                </div>
                                <OnMobile>
                                    <div className={`${hashClasses["input-group"]} ${hashClasses["credit-term"]}`}>
                                        <div className={hashClasses["input-wrap"]}>
                                            <CalculatorInput type="number" className={hashClasses["form-control"]} />
                                        </div>
                                    </div>
                                </OnMobile>
                                <div className={hashClasses["wrap-rc-slider"]}>
                                    <CalculatorSlider />
                                    <span className={`${hashClasses["dot"]} ${hashClasses["dot-left"]}`}>
                                        {this.context.Conditions.Term.min}
                                    </span>
                                    <span className={`${hashClasses["dot"]} ${hashClasses["dot-right"]}`}>
                                        {this.context.Conditions.Term.max}
                                    </span>
                                </div>
                                <OnTabletDesktop>
                                    <div className={`${hashClasses["input-group"]} ${hashClasses["credit-term"]}`}>
                                        <div className={hashClasses["input-wrap"]}>
                                            <CalculatorInput type="number" className={hashClasses["form-control"]} />
                                        </div>
                                    </div>
                                </OnTabletDesktop>
                            </div>
                        </CalculatorControlWrapper>
                    </div>
                    <div className={hashClasses["calc-aside"]}>
                        <ExpandControl
                            expandId={RegisterForm.expandKey}
                            className={hashClasses["btn-action"]}
                        >
                            Получить деньги
                        </ExpandControl>
                        <p>Мы гарантируем прозрачные условия работы. Скрытые платежи и комиссии отсутствуют.</p>
                    </div>
                </div>
                <div className={hashClasses["calc-bottom"]}>
                    <div className={hashClasses["sum-return"]}>
                        <OnDesktop>
                            <span>Сумма к возврату:</span>
                            <CalculatorLabel labelType={CalculatorLabelTypes.total} /> грн.
                        </OnDesktop>
                        <OnMobileTablet>
                            <span>К возврату:</span>
                            <CalculatorLabel labelType={CalculatorLabelTypes.total} /> грн.
                        </OnMobileTablet>
                    </div>
                    <div className={hashClasses["text-percent"]}>
                        <i className={`${hashClasses["icon"]} ${hashClasses["icon-info"]}`} />
                        <p>Наша APR (максимальная годовая процентная ставка) составляет 630,85%.</p>
                    </div>
                </div>
            </ControlledExpandElement>
        );
    }
}
