import * as React from "react";
import {
    Calculator as ReactCreditCalculator,
    CalculatorControlWrapper,
    CalculatorSummaryButton,
    CalculatorControlTypes,
    CalculatorLabelTypes,
    CalculatorButton,
    CalculatorSlider,
    CalculatorInput,
    CalculatorLabel
} from "react-credit-calculator";

import { OnMobile, OnMobileTablet, OnTabletDesktop, OnDesktop } from "react-breakpoint";

const hashClasses = require("main.scss");

interface CalculatorState {
    promocode: string;
}

declare const PERSONAL_AREA: string;
export class Calculator extends React.Component<{}, CalculatorState> {

    public readonly state: CalculatorState = {
        promocode: ""
    };

    public render(): React.ReactNode {
        return (
            <React.Fragment>
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
                                        {this.conditions.amount.min}
                                    </span>
                                    <span className={`${hashClasses["dot"]} ${hashClasses["dot-right"]}`}>
                                        {this.conditions.amount.max}
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
                                        {this.conditions.term.min}
                                    </span>
                                    <span className={`${hashClasses["dot"]} ${hashClasses["dot-right"]}`}>
                                        {this.conditions.term.max}
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
                        <button className={hashClasses["btn-action"]}>Получить деньги</button>
                        <p>Сервис работает на прозрачных условиях. Мы не взимаем дополнительных комиссий и платежей.</p>
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
                        <p>Наша APR (максимальная годовая процентная ставка) составляет 638,75%.</p>
                    </div>
                </div>
            </React.Fragment>
        );
    }

    protected handlePromocodeChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        this.setState({
            promocode: event.currentTarget.value
        });
    }

    protected returnDateFormat = (date: Date): string => (
        `${date.getDate().toString().padStart(2, "0")}.` +
        `${date.getMonth().toString().padStart(2, "0")}.` +
        `${date.getFullYear()}`
    )

    protected handleSubmit = (state: { amount: number; term: number }): void => {
        const params = new URLSearchParams();

        params.append("credit-sum", state.amount.toString());
        params.append("credit-term", state.term.toString());
        this.state.promocode && params.append("promocode", this.state.promocode);

        location.href = `${PERSONAL_AREA}register/loan?${params}`;
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
