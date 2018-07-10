import { registerDecorator, ValidationOptions } from "class-validator";

export function Condition(conditionValue: boolean, validationOptions?: ValidationOptions) {
    return function(object: object, propertyName: string) {
        registerDecorator({
            target: object.constructor,
            propertyName,
            options: validationOptions,
            validator: {
                validate(value?: boolean): boolean {
                    return value === conditionValue;
                }
            }
        });
    }
}
