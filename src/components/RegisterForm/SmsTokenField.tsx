import * as React from "react";
import { MaskInput } from "react-context-form-mask";
import { FormGroup, Hint } from "react-context-form";

const hashClasses = require("main.scss");

export const SmsTokenField: React.SFC<{}> = (): JSX.Element => (
    <FormGroup name="token" className={hashClasses["form-group"]}>
        <MaskInput
            className="form-control"
            placeholder="SMS-пароль"
            mask="99-99-99"
        />
        <Hint />
    </FormGroup>
)
