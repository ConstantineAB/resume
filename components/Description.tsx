import { FC } from 'react';
import { motion } from "framer-motion";

interface myProps {
    darkThemeBtn: boolean,
}

const Description: FC<myProps> = ({ darkThemeBtn }) => {

return (
    <section className="section-description">
        <div className="section-description__inner">
            <div className={!darkThemeBtn ? "section-description__inner__right" : "section-description__inner__right dark-theme"}>
                <img src="./images/portrait.jpg" alt="portrait" />
                <p className={!darkThemeBtn ? "section-description__inner__left__title" : "section-description__inner__left__title dark-theme"}>
                    Навыки
                </p>
                <p className={!darkThemeBtn ? "section-description__inner__right__subtitle" : "section-description__inner__right__subtitle dark-theme"}>
                    TypeScript<br/>
                    JavaScript<br/>
                    React JS<br/>
                    Redux<br/>
                    Node JS<br/>
                    Next JS<br/>
                    HTML5<br/>
                    CSS3<br/>
                    SCSS<br/>
                    Less<br/>
                    Адаптивная верстка<br/>
                    Кроссбраузерная верстка<br/>
                    БЭМ<br/>
                    Составление ТЗ<br/>
                    Умею разбираться в чужом коде
                </p>
                <p className={!darkThemeBtn ? "section-description__inner__left__title" : "section-description__inner__left__title dark-theme"}>
                    Языки
                </p>
                <p className={!darkThemeBtn ? "section-description__inner__right__subtitle" : "section-description__inner__right__subtitle dark-theme"}>
                    Английский(b1)
                </p>
                <p className={!darkThemeBtn ? "section-description__inner__left__title" : "section-description__inner__left__title dark-theme"}>
                    Другие навыки
                </p>
                <p className={!darkThemeBtn ? "section-description__inner__right__subtitle" : "section-description__inner__right__subtitle dark-theme"}>
                    Слепая печать десятью пальцами (русский, английский)<br/>
                    Google
                </p>
            </div>
            <div className="section-description__inner__left">
                <p className={!darkThemeBtn ? "section-description__inner__left__title" : "section-description__inner__left__title dark-theme"}>
                    Константин Александрович Белкин.<br/>
                </p>
                <p className={!darkThemeBtn ? "section-description__inner__left__title" : "section-description__inner__left__title dark-theme"}>Frontend разработчик.</p>
                <p className={!darkThemeBtn ? "section-description__inner__left__subtitle" : "section-description__inner__left__subtitle dark-theme"}>Возраст: 21 год</p>
                <div className={!darkThemeBtn ? "section-description__inner__left__subtitle" : "section-description__inner__left__subtitle dark-theme"}>
                    <p>Опыт&#160;работы</p><div className={!darkThemeBtn ? "subline" : "subline dark-theme"}></div>
                </div>
                <div className="section-description__inner__left__characterize">
                    <p className={!darkThemeBtn ? "section-description__inner__left__characterize__left__date" : "section-description__inner__left__characterize__left__date dark-theme"}>
                        2022-08-04&#160;—<br/>
                        н.в..
                    </p>
                    <div className="section-description__inner__left__characterize__left">
                        <p className={!darkThemeBtn ? "section-description__inner__left__characterize__left__title" : "section-description__inner__left__characterize__left__title dark-theme"}>
                            freelance.ru
                        </p>
                        <p className={!darkThemeBtn ? "section-description__inner__left__characterize__left__subtitle" : "section-description__inner__left__characterize__left__subtitle dark-theme"}>
                            Выполняю заказы по фронтенд разработке и верстке.
                        </p>
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 1.2 }}
                        >
                            <button className="section-description__inner__left__characterize__left__button">
                                <a href="https://freelance.ru/webmasterkb" className={!darkThemeBtn ? "section-description__inner__left__characterize__left__button__a" : "section-description__inner__left__characterize__left__button__a dark-theme"}>
                                    Мой профиль на freelance.ru
                                </a>
                            </button>
                        </motion.div>
                    </div>
                </div>
                <div className={!darkThemeBtn ? "section-description__inner__left__subtitle" : "section-description__inner__left__subtitle dark-theme"}>
                    <p>Образование</p><div className={!darkThemeBtn ? "subline" : "subline dark-theme"}></div>
                </div>
                <div className="section-description__inner__left__characterize">
                    <p className={!darkThemeBtn ? "section-description__inner__left__characterize__left__date" : "section-description__inner__left__characterize__left__date dark-theme"}>
                        2020-05&#160;—<br/>
                        н.в..
                    </p>
                    <div className="section-description__inner__left__characterize__left">
                        <p className={!darkThemeBtn ? "section-description__inner__left__characterize__left__title" : "section-description__inner__left__characterize__left__title dark-theme"}>
                            Frontend
                        </p>
                        <p className={!darkThemeBtn ? "section-description__inner__left__characterize__left__subtitle" : "section-description__inner__left__characterize__left__subtitle dark-theme"}>
                            Учусь самостоятельно по видео курсам на YouTube, официальной документации и книгам.
                        </p> 
                    </div>
                </div>
                <div className="section-description__inner__left__characterize">
                    <p className={!darkThemeBtn ? "section-description__inner__left__characterize__left__date" : "section-description__inner__left__characterize__left__date dark-theme"}>
                        2020-09-7&#160;—<br/>
                        н.в.. 
                    </p>
                    <div className="section-description__inner__left__characterize__left">
                        <p className={!darkThemeBtn ? "section-description__inner__left__characterize__left__title" : "section-description__inner__left__characterize__left__title dark-theme"}>
                            НГИЭУ<br/>
                            (Неоконченное высшее образование)
                        </p>
                        <p className={!darkThemeBtn ? "section-description__inner__left__characterize__left__subtitle" : "section-description__inner__left__characterize__left__subtitle dark-theme"}>
                            Нижегородский Государственный Инженерно-экономический университет. Кафедра "Электрификация и автоматизация" Учусь заочно на третьем курсе.
                        </p> 
                    </div>
                </div>
                <div className={!darkThemeBtn ? "section-description__inner__left__subtitle" : "section-description__inner__left__subtitle dark-theme"}>
                    <p>О&#160;себе</p><div className={!darkThemeBtn ? "subline" : "subline dark-theme"}></div>
                </div>
                <p className={!darkThemeBtn ? "section-description__inner__left__subtitle" : "section-description__inner__left__subtitle dark-theme"}>
                    С легкостью вливаюсь в коллектив. Хорошо читаю на английском и отлично понимаю устную речь.<br/>
                    Проживаю в Санкт-Петербурге.<br/>
                    Не имею вредных привычек.
                </p>
            </div>
        </div>
    </section>
  )
}

export default Description