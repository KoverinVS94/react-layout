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
                                <span>Возраст старше <br /> 18 лет.</span>
                            </li>
                            <li className={hashClasses["list-item"]}>
                                <i
                                    className={`
                                        ${hashClasses["icon"]}
                                        ${hashClasses["icon-id-card"]}
                                        ${hashClasses["bordered"]}
                                    `}
                                />
                                <span>Наличие паспорта <br />гражданина Украины.</span>
                            </li>
                            <li className={hashClasses["list-item"]}>
                                <i
                                    className={`
                                        ${hashClasses["icon"]}
                                        ${hashClasses["icon-credit-card"]}
                                        ${hashClasses["bordered"]}
                                    `}
                                />
                                <span>Наличие банковской <br /> карты.</span>
                            </li>
                            <li className={hashClasses["list-item"]}>
                                <i
                                    className={`
                                        ${hashClasses["icon"]}
                                        ${hashClasses["icon-inn"]}
                                        ${hashClasses["bordered"]}
                                    `}
                                />
                                <span>Наличие <br /> ИНН.</span>
                            </li>
                        </ul>
                        <p>
                            Сервис характеризуется лояльным отношениям к
                            клиентам и высоким процентом одобрений.
                            У нас вы можете получить до 4000 гривен на
                            любые цели, независимо от уровня дохода
                            и трудоустройства.
                        </p>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
