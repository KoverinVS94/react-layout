import * as React from "react";
import * as PropTypes from "prop-types";
import { CalculatorContextTypes, CalculatorContext } from "react-credit-calculator";

export class CustomSlider extends React.Component {
    public static readonly contextTypes = CalculatorContextTypes;

    public readonly context: CalculatorContext;

    public render(): React.ReactNode {
        return (
            <div className="credit-bar">
                <div className="sum-value" style={{ width: `${this.sumWidth}%` }}>
                    <div className="sum-info">
                        <span>
                            Вы берете:&nbsp;
                            <span className="text-increased">
                                <span>{this.context.Credit.amount}</span>&nbsp;
                            </span>
                            грн.
                        </span>
                    </div>
                </div>
                <div className="interest-value" style={{ width: `${this.interestWidth}%` }}>
                    <div className="interest-info">
                        <span>
                            <span className="text-increased">
                                <span>{this.context.Credit.interest}</span>&nbsp;
                            </span>
                            грн.
                        </span>
                        <span>
                            % по кредиту
                        </span>
                    </div>
                </div>
            </div>
        );
    }

    protected get interestWidth(): number {
        return this.context.Credit.interest
            * 100
            / Math.round(this.context.Credit.amount + this.context.Credit.interest);
    }

    protected get sumWidth(): number {
        return 100 - this.interestWidth;
    }
}
