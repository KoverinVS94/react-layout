import * as React from "react";

const hashClasses = require("main.scss");

export class SectionReceipt extends React.Component {

    public render(): React.ReactNode {
        return (
            <React.Fragment>
                <div className={`${hashClasses["section"]} ${hashClasses["section-receipt"]}`}>
                    <div className={hashClasses["container"]}>
                        <h2 className={hashClasses["title"]}>Условия получения</h2>
                        <ul className={`${hashClasses["list"]} ${hashClasses["list-receipt"]}`}>
                            <li className={hashClasses["list-item"]}>
                                <i
                                    className={`
                                        ${hashClasses["icon"]}
                                        ${hashClasses["icon-user"]}
                                        ${hashClasses["bordered"]}
                                    `}
                                />
                                <span>Вы должны быть <br/> старше 18 лет</span>
                            </li>
                            <li className={hashClasses["list-item"]}>
                                <i
                                    className={`
                                        ${hashClasses["icon"]}
                                        ${hashClasses["icon-id-card"]}
                                        ${hashClasses["bordered"]}
                                    `}
                                />
                                <span>Паспорт гражданина <br/> Украины</span>
                            </li>
                            <li className={hashClasses["list-item"]}>
                                <i
                                    className={`
                                        ${hashClasses["icon"]}
                                        ${hashClasses["icon-credit-card"]}
                                        ${hashClasses["bordered"]}
                                    `}
                                />
                                <span>Банковская карта <br/> банка Украины</span>
                            </li>
                            <li className={hashClasses["list-item"]}>
                                <i
                                    className={`
                                        ${hashClasses["icon"]}
                                        ${hashClasses["icon-inn"]}
                                        ${hashClasses["bordered"]}
                                    `}
                                />
                                <span>Идентификационный <br/> код</span>
                            </li>
                        </ul>
                        <p>
                            При появлении финансовых трудностей, вы в любое
                            время можете подать заявку на кредит в наше сервисе,
                            независимо от цели, наличия справки с работы,
                            справки о доходах и кредитной истории,
                            от цели, наличия справки с
                            <strong> несколько простых шагов:</strong>
                        </p>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
