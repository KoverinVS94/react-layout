import * as React from "react";

const hashClasses = require("main.scss");

export class SectionHowItWork extends React.Component {

    public render(): React.ReactNode {
        return (
            <React.Fragment>
                <div className={`${hashClasses["section"]} ${hashClasses["section-how-it-work"]}`}>
                    <div className={hashClasses["container"]}>
                        <h2 className={hashClasses["title"]}>
                            Простое взятие кредита
                        </h2>
                        <p>
                            При появлении финансовых трудностей,
                            вы в любое время можете подать заявку
                            на кредит в наше сервисе, независимо от цели,
                            наличия справки с работы,
                            справки о доходах и кредитной истории,
                            от цели, наличия справки с
                            <strong> несколько простых шагов</strong>:
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
                                <span>Выберите срок и сумму</span>
                                <p>
                                    При появлении финансовых трудностей,
                                    вы в любое время можете кредитной
                                    истории, от цели, наличия справки.
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
                                <span>Заполните заявку</span>
                                <p>
                                    При появлении финансовых трудностей,
                                    вы в любое время можете кредитной истории,
                                    от цели, наличия справки.
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
                                <span>Деньги на карте</span>
                                <p>
                                    При появлении финансовых трудностей,
                                    вы в любое время можете кредитной истории,
                                    от цели, наличия справки.
                                </p>
                            </li>
                        </ul>
                        <h2 className={hashClasses["title"]}>
                            Способы оплаты кредита
                        </h2>
                        <p>
                            При появлении финансовых трудностей,
                            вы в любое время можете подать заявку
                            на кредит в наше сервисе, независимо от цели,
                            наличия справки с работы, справки о доходах
                            и кредитной истории, от цели, наличия справки с
                            <strong> несколько простых шагов</strong>:
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
                                <span>Кредитной картой <br />в личном кабинете сервиса</span>
                            </li>
                            <li className={hashClasses["list-item"]}>
                                <i
                                    className={`
                                        ${hashClasses["icon"]}
                                        ${hashClasses["icon-ibox"]}
                                        ${hashClasses["bordered"]}
                                    `}
                                />
                                <span>Через терминалы <br />iBox, TYME, EasyPay, City24 </span>
                            </li>
                            <li className={hashClasses["list-item"]}>
                                <i
                                    className={`
                                        ${hashClasses["icon"]}
                                        ${hashClasses["icon-bank"]}
                                        ${hashClasses["bordered"]}
                                    `}
                                />
                                <span>В отделении любого <br />банка Украины</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
