import * as React from "react";

const hashClasses = require("main.scss");

export class SectionHowItWork extends React.Component {

    public render(): React.ReactNode {
        return (
            <React.Fragment>
                <div className={`${hashClasses["section"]} ${hashClasses["section-how-it-work"]}`}>
                    <div className={hashClasses["container"]}>
                        <h2 className={hashClasses["title"]}>
                            Как получить кредит
                        </h2>
                        <p>
                            Если вы столкнулись с финансовыми трудностями,
                            вы можете оформить простой онлайн займ на карту
                            всего за 7 минут. Не потребуются дополнительные
                            документы и поручители, получить кредит можно
                            за несколько шагов:
                        </p>
                        <ul className={`${hashClasses["list"]} ${hashClasses["list-step"]}`}>
                            <li className={hashClasses["list-item"]}>
                                <i
                                    className={`
                                        ${hashClasses["icon"]}
                                        ${hashClasses["icon-calc"]}
                                        ${hashClasses["bordered"]}
                                    `}
                                />
                                <span>Выберите сумму и срок кредита</span>
                                <p>
                                    На калькуляторе выберите желаемые сумму
                                    и срок кредита, вам сразу же будет
                                    показана полная сумма к оплате с учетом процентов.
                                </p>
                            </li>
                            <li className={hashClasses["list-item"]}>
                                <i
                                    className={`
                                        ${hashClasses["icon"]}
                                        ${hashClasses["icon-doc"]}
                                        ${hashClasses["bordered"]}
                                    `}
                                />
                                <span>Заполните короткую форму заявки.</span>
                                <p>
                                    Заполните короткую анкету:
                                    укажите личные данные, информацию
                                    о трудоустройстве и платежной карте.
                                </p>
                            </li>
                            <li className={hashClasses["list-item"]}>
                                <i
                                    className={`
                                        ${hashClasses["icon"]}
                                        ${hashClasses["icon-card-pay"]}
                                        ${hashClasses["bordered"]}
                                    `}
                                />
                                <span>Получите решение.</span>
                                <p>
                                    Решение по кредиту принимается за
                                    7 минут и сразу же после одобрения
                                    деньги будут переведены на вашу карту.
                                </p>
                            </li>
                        </ul>
                        <h2 className={hashClasses["title"]}>
                            Как вернуть кредит
                        </h2>
                        <p>
                            Специально для удобства клиентов, мы предлагаем
                            вернуть кредит несколькими удобными способами:
                        </p>
                        <ul className={`${hashClasses["list"]} ${hashClasses["list-pay"]}`}>
                            <li className={hashClasses["list-item"]}>
                                <i
                                    className={`
                                        ${hashClasses["icon"]}
                                        ${hashClasses["icon-card-pay-check"]}
                                        ${hashClasses["bordered"]}
                                    `}
                                />
                                <span>Через личный кабинет<br /> с помощью карты.</span>
                            </li>
                            <li className={hashClasses["list-item"]}>
                                <i
                                    className={`
                                        ${hashClasses["icon"]}
                                        ${hashClasses["icon-ibox"]}
                                        ${hashClasses["bordered"]}
                                    `}
                                />
                                <span>Через сеть<br />терминалов. </span>
                            </li>
                            <li className={hashClasses["list-item"]}>
                                <i
                                    className={`
                                        ${hashClasses["icon"]}
                                        ${hashClasses["icon-bank"]}
                                        ${hashClasses["bordered"]}
                                    `}
                                />
                                <span>Через отделение<br /> украинского банка.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
