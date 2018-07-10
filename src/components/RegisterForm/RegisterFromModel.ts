import { Model, ModelGroups } from "react-context-form";
import { IsDefined, IsNotEmpty, ValidateIf } from "class-validator";

import { Matches } from "./Matches";
import { Condition } from "./Condition";

const smsTokenPattern = /^[0-9]{2}-[0-9]{2}-[0-9]{2}$/;
const wordPattern = /^[\,\.\sА-Яа-яЄЇІєїіыЫёЁъЪ`'\\-]{2,}$/;
const phonePattern = /^\+380 \([0-9]{2}\) [0-9]{3}-[0-9]{2}-[0-9]{2}$/;
// tslint:disable-next-line
const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;

export class RegisterFormModel extends Model {
    public validateSmsTokenField: boolean = false;

    @Matches(wordPattern, { groups: ["firstName"], message: "Только кириллица" })
    @IsNotEmpty({ groups: ["firstName"], message: "Обязательно для заполнения"})
    @IsDefined({ groups: ["firstName"], message: "Обязательно для заполнения" })
    public firstName: string;

    @Matches(wordPattern, { groups: ["lastName"], message: "Только кириллица" })
    @IsNotEmpty({ groups: ["lastName"], message: "Обязательно для заполнения" })
    @IsDefined({ groups: ["lastName"], message: "Обязательно для заполнения" })
    public lastName: string;

    @Matches(wordPattern, { groups: ["middleName"], message: "Только кириллица" })
    @IsNotEmpty({ groups: ["middleName"], message: "Обязательно для заполнения" })
    @IsDefined({ groups: ["middleName"], message: "Обязательно для заполнения" })
    public middleName: string;

    @Matches(emailPattern, { groups: ["email"], message: "Некорректный email" })
    @IsNotEmpty({ groups: ["email"], message: "Обязательно для заполнения" })
    @IsDefined({ groups: ["email"], message: "Обязательно для заполнения" })
    public email: string;

    @Matches(phonePattern, { groups: ["phone"], message: "Некорректный телефон" })
    @IsNotEmpty({ groups: ["phone"], message: "Обязательно для заполнения" })
    @IsDefined({ groups: ["phone"], message: "Обязательно для заполнения" })
    public phone: string;

    @Matches(smsTokenPattern, { groups: ["token"], message: "Некорректный код" })
    @IsNotEmpty({ groups: ["token"], message: "Обязательно для заполнения" })
    @IsDefined({ groups: ["token"], message: "Обязательно для заполнения" })
    @ValidateIf((instance: RegisterFormModel) => instance.validateSmsTokenField)
    public token: string;

    @Condition(true, { groups: ["agreed"], message: "Необходимо дать согласие" })
    public agreed: boolean = false;

    public attributes(): Array<string> {
        return [
            "phone",
            "email",
            "agreed",
            "token",
            "lastName",
            "firstName",
            "middleName"
        ];
    }

    public groups(): ModelGroups {
        const groups = {};
        this.attributes().forEach((field) => groups[field] = [field]);

        return groups;
    }
}
