import Axios from "axios";
import * as React from "react";
import { ExpandContextTypes, ExpandContext } from "react-expand";
import {
    Hint,
    Form,
    Input,
    Checkbox,
    FormGroup,
    OnValidate,
    SubmitButton,
    AutoValidate,
    TransformTypes
} from "react-context-form";
import { MaskInput } from "react-context-form-mask";
import { CalculatorContextTypes, CalculatorContext } from "react-credit-calculator";
import { AutoRequestProvider, PhoneValidator, TimerButton } from "react-context-form-timer";

const hashClasses = require("main.scss");

import { CalculatorInner, Calculator } from "../Calculator";
import { RegisterFormModel } from "./RegisterFromModel";
import { SmsTokenField } from "./SmsTokenField";

export interface RegisterFormState {
    shouldRenderSmsTokenField: boolean;
}

declare const PERSONAL_AREA: string;
export class RegisterForm extends React.Component<{}, RegisterFormState> {
    public static readonly contextTypes = {
        ...ExpandContextTypes,
        ...CalculatorContextTypes
    };
    public static readonly expandKey = "registerForm";

    public readonly context: ExpandContext & CalculatorContext;
    public readonly state: RegisterFormState = {
        shouldRenderSmsTokenField: false
    };

    public model: RegisterFormModel;

    public instantiateRegisterStageModel = (): RegisterFormModel => {
        this.model = new RegisterFormModel();

        return this.model;
    }

    public componentDidMount() {
        this.context.changeExpandState(Calculator.expandKey, false)();
    }

    public render(): React.ReactNode {
        return (
            <React.Fragment>
                <div className={hashClasses["register"]}>
                    <div className={hashClasses["credit-info"]}>
                        <CalculatorInner />
                    </div>
                    <Form
                        instantiate={this.instantiateRegisterStageModel}
                        onSubmit={this.handleSubmit as any}
                        className={hashClasses["form-register"]}
                    >
                        <div className={hashClasses["form-wrap"]}>
                            <OnValidate
                                onValidate={this.changeSmsTokenVisibility}
                                groups={["firstName", "lastName", "middleName", "email", "phone"]}
                            >
                                <div className={`${hashClasses["half"]} ${hashClasses["half-left"]}`}>
                                    <FormGroup name="lastName" className={hashClasses["form-group"]}>
                                        <AutoValidate groupName="lastName">
                                            <Input
                                                transform={TransformTypes.capitalize}
                                                className={hashClasses["form-control"]}
                                                placeholder="Фамилия"
                                            />
                                        </AutoValidate>
                                        <Hint className={hashClasses["form-group-hint"]} />
                                    </FormGroup>
                                    <FormGroup name="firstName" className={hashClasses["form-group"]}>
                                        <AutoValidate groupName="firstName">
                                            <Input
                                                className={hashClasses["form-control"]}
                                                transform={TransformTypes.capitalize}
                                                placeholder="Имя"
                                            />
                                        </AutoValidate>
                                        <Hint />
                                    </FormGroup>
                                    <FormGroup name="middleName" className={hashClasses["form-group"]}>
                                        <AutoValidate groupName="middleName">
                                            <Input
                                                className={hashClasses["form-control"]}
                                                transform={TransformTypes.capitalize}
                                                placeholder="Отчество"
                                            />
                                        </AutoValidate>
                                        <Hint className={hashClasses["form-group-hint"]} />
                                    </FormGroup>
                                </div>
                                <div className={`${hashClasses["half"]} ${hashClasses["half-right"]}`}>
                                    <FormGroup name="email" className={hashClasses["form-group"]}>
                                        <AutoValidate groupName="email">
                                            <Input
                                                type="email"
                                                className={hashClasses["form-control"]}
                                                placeholder="Email"
                                            />
                                        </AutoValidate>
                                        <Hint className={hashClasses["form-group-hint"]} />
                                    </FormGroup>
                                    <FormGroup name="phone" className={hashClasses["form-group"]}>
                                        <AutoRequestProvider groupName="phone" request={this.handleRequestSms}>
                                            <div className={hashClasses["input-group"]}>
                                                <PhoneValidator>
                                                    <MaskInput
                                                        type="tel"
                                                        mask="+380 (99) 999-99-99"
                                                        className={hashClasses["form-control"]}
                                                        placeholder="+380 (__) ___-__-__"
                                                    />
                                                </PhoneValidator>
                                                <TimerButton
                                                    className={hashClasses["btn-sms"]}
                                                    disabled={!this.state.shouldRenderSmsTokenField}
                                                    timerIcon={this.timerIcon}
                                                />
                                            </div>
                                        </AutoRequestProvider>
                                        <Hint className={hashClasses["form-group-hint"]} />
                                    </FormGroup>
                                    {this.state.shouldRenderSmsTokenField && <SmsTokenField />}
                                </div>
                            </OnValidate>
                        </div>
                        <div className={hashClasses["confirm"]}>
                            <FormGroup name="agreed" className={hashClasses["checkbox-group"]}>
                                <AutoValidate groupName="agreed" onChange>
                                    <Checkbox className={hashClasses["register-checkbox"]} activeClassName="active" />
                                </AutoValidate>
                                <p>
                                    Даю&nbsp;
                                    <a href="https://private.pozichka.ua/agreement.pdf" target="_blank">
                                        согласие на обработку моих личных данных
                                    </a>
                                </p>
                                <Hint className={hashClasses["form-group-hint"]} />
                            </FormGroup>
                            <SubmitButton loadingComponent={<span>...</span>} className={hashClasses["btn-action"]}>
                                Зарегистрироваться
                            </SubmitButton>
                        </div>
                    </Form>
                </div>
            </React.Fragment>
        );
    }

    protected changeSmsTokenVisibility = (shouldRenderSmsTokenField: boolean): void => {
        if (this.state.shouldRenderSmsTokenField === shouldRenderSmsTokenField) {
            return;
        }

        this.model.validateSmsTokenField = shouldRenderSmsTokenField;
        this.setState({ shouldRenderSmsTokenField });
    }

    protected handleRequestSms = async (): Promise<void> => {
        const RegistrationInformationForm = {
            firstName: this.model.firstName,
            lastName: this.model.lastName,
            middleName: this.model.middleName,
            email: this.model.email,
            phone: this.model.phone.replace(/\D/g, ""),
            amount: this.context.Credit.amount,
            term: 30
        };

        try {
            await Axios.post("/landing/information", { RegistrationInformationForm });
        } catch (error) {
            this.setState({ shouldRenderSmsTokenField: false });
            throw error;
        }
    }

    protected handleSubmit = async (): Promise<void> => {
        const RegistrationConfirmForm = {
            phone: this.model.phone.replace(/\D/g, ""),
            token: this.model.token.replace(/\D/g, "")
        };

        const response = await Axios.post("/landing/confirm", { RegistrationConfirmForm });

        location.href = `${PERSONAL_AREA}?token=${response.data.accessToken}`;
    }

    protected get timerIcon() {
        return <i className={`${hashClasses["icon"]} ${hashClasses["icon-sms"]}`} />;
    }
}

// tslint:disable-next-line
