import * as React from "react";

const hashClasses = require("main.scss");

export class Footer extends React.Component {

    public render(): React.ReactNode {
        return (
            <React.Fragment>
                <div className={hashClasses["footer"]}>
                    <div className={hashClasses["footer-top"]}>
                        <div className={hashClasses["container"]}>
                            <div className={hashClasses["footer-main"]}>
                                <h3 className={hashClasses["title"]}>
                                    Простые онлайн кредиты за 7 минут
                                </h3>
                                <p>
                                    Любой клиент может получить кредит на сумму до
                                    4000 гривен и срок на 65-70 дней. Займы выдаются
                                    24 часа в сутки, 7 дней в неделю, поэтому вы
                                    можете рассчитывать на финансовую помощь
                                    сервиса в любое время.
                                </p>
                                <p>
                                    Годовая процентная ставка без учета акций и специальных
                                    предложений — 630,85%. Ставка может быть снижена для клиентов,
                                    которые хорошо себя зарекомендовали. Все данные по кредиту
                                    или активной заявке можно посмотреть
                                    в личном кабинете пользователя.
                                </p>
                            </div>
                            <div className={hashClasses["footer-aside"]}>
                                <div className={hashClasses["contacts"]}>
                                    <a href="tel:+380444707565">(044) 470-75-65</a>
                                    <a href="mailto:info@pozichka.org">info@pozichka.org</a>
                                    <a href="https://pozichka.org">pozichka.org</a>
                                </div>
                                <div className={hashClasses["working-hours"]}>
                                    <span>Ответим на ваши вопросы</span>
                                    <span>с 9.00 до 20.00, с Пн по Вс,</span>
                                    <span>без перерывов и выходных</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={hashClasses["footer-bottom"]}>
                        <div className={hashClasses["container"]}>
                            <i className={`${hashClasses["icon"]} ${hashClasses["icon-adress"]}`} />
                            <div className={hashClasses["adress"]}>
                                <span>Фактический адрес:</span>
                                <span>Украина, Киев 03045, ул. Охотская, 4</span>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
