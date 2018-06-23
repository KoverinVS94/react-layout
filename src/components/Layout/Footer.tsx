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
                                    Ведущий сервис онлайн кредитования.
                                    Получить деньги можно всего за 7 минут.
                                </h3>
                                <p>
                                    С нашим сервисом Вы можете получить первый
                                    кредит на сумму до 2 000 гривен на срок
                                    от 65 до 70 дней. Мы работаем круглосуточно,
                                    без перерывов и выходных.
                                    Наша APR (максимальная годовая процентная ставка,
                                    без учета акционных предложений) составляет 635,57%.
                                    Если вы впервые обращаетесь к нашему сервису и на
                                    данный момент в нем отсутствуют акционные предложения,
                                    общая сумма к оплате по кредиту в размере 1000 грн на
                                    65 дней составит 1175 грн. Стандартная ставка для
                                    постоянных клиентов может снижаться.
                                    Сумму к оплате вместе с процентами можно
                                    узнать в Личном кабинете.
                                </p>
                                <p>
                                    Кредиты предоставляются компанией «Деньги365»,
                                    зарегистрированной в ГРФУ
                                    (Государственном реестре финансовых учреждений)
                                    распоряжением НКРРФП №1406 от 15 мая 2014 года,
                                    под регистрационном номером 16102980.
                                    Место расположения: 02000,
                                    Киевская область, г. Киев, улица Жилянская, 41, 1-ый этаж.
                                </p>
                            </div>
                            <div className={hashClasses["footer-aside"]}>
                                <div className={hashClasses["contacts"]}>
                                    <a href="tel:+380444708555">(044) 470-85-55</a>
                                    <a href="mailto:info@zanimaj.org.ua">info@zanimaj.org.ua</a>
                                    <a href="mailto:zanimaj.org.ua">zanimaj.org.ua</a>
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
                                <span>Украина, Киев 01135, ул. Жилянская, 113</span>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
