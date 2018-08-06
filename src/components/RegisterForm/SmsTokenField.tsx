import * as React from "react";
import { MaskInput } from "react-context-form-mask";
import { FormGroup, Hint, AutoValidate } from "react-context-form";

const hashClasses = require("main.scss");

export const SmsTokenField: React.SFC<{}> = (): JSX.Element => (
    <FormGroup name="token" className={hashClasses["form-group"]}>
        <AutoValidate groupName="token" onBlur>
            <MaskInput
                className={hashClasses["form-control"]}
                placeholder="SMS-пароль"
                mask="99-99-99"
            />
        </AutoValidate>
        <Hint />
    </FormGroup>
)
