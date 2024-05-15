import "../styles/pages/about.css"
import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGit, faGithub, faReact} from "@fortawesome/free-brands-svg-icons";
import {BlockLink} from "../components/link";
import store from "../games/TTFE/store/store";

export const AboutPage = () => {
    const [panel, setPanel] = useState(0);


    return (
        <div className="about">
            <section className={"about-header"}>
                <div className={"about-headline"}>
                    <h2>О проекте</h2>
                    <span>Узнайте все подробности о проете и разработчике</span>
                </div>
                <section className={"about-header-background"}>
                    <div className={"about-header-block"}></div>
                    <div className={"about-header-block"}></div>
                    <div className={"about-header-block"}></div>
                    <div className={"about-header-block"}></div>
                    <div className={"about-header-block"}></div>
                    <div className={"about-header-block"}></div>
                    <div className={"about-header-block"}></div>
                    <div className={"about-header-block"}></div>
                    <div className={"about-header-block"}></div>
                    <div className={"about-header-block"}></div>
                    <div className={"about-header-block"}></div>
                    <div className={"about-header-block"}></div>
                    <div className={"about-header-block"}></div>
                    <div className={"about-header-block"}></div>
                    <div className={"about-header-block"}></div>
                </section>
            </section>

            <section className={"about-main"}>
                <div className={"about-panel"}>
                    <button
                        className={(panel === 0) ? "activated-button" : ""}
                        onClick={() => setPanel(0)}
                    >О проекте
                    </button>
                    <button
                        className={(panel === 1) ? "activated-button" : ""}
                        onClick={() => setPanel(1)}
                    >О разработчике
                    </button>
                    <button
                        className={(panel === 2) ? "activated-button" : ""}
                        onClick={() => setPanel(2)}
                    >2048
                    </button>
                    <button
                        className={(panel === 3) ? "activated-button" : ""}
                        onClick={() => setPanel(3)}
                    >Сапёр
                    </button>
                </div>
                <div className={"about-info-container"}>
                    <div className={(panel === 0) ? "about-info" : "about-info about-info-hidden"}>
                        <h3>Проект Playground</h3>
                        <p className={"p-main"}>Playgound - это веб-платформа для гиперказуальных игр</p>
                        <p className={"attention"}><FontAwesomeIcon icon={faReact}/> Гиперказуальные игры — это
                            мобильные игры с простыми механиками
                            (например, складывание предметов, броски, поворачивание элементов), которые можно запустить
                            или закрыть в любой момент</p>
                        <p>Целью явлается исследование популярности таких популярных гиперказуальных игр, как "Змейка"
                            "2048" и "Сапёр" - это известные игры о которых слышал каждый
                            и многие в них играли. Платформа предовставляет ститистику для каждой игры и общую
                            статистику, поэтому пользователь может сам отследживать сколько
                            времени он провел времени играя в игры и сделать выводы.</p>
                        <p>
                            Playground предоставляет возможность выбрать одну из игр на выбор:
                            <ul>
                                <li><FontAwesomeIcon icon={faReact}/> 2048</li>
                                <li><FontAwesomeIcon icon={faReact}/> Змейка</li>
                                <li><FontAwesomeIcon icon={faReact}/> Сапёр</li>
                            </ul>
                        </p>
                        <p>
                            Как показывает практика большинство игроков предпочитают играть в 2048 и именно эта игра
                            затягивает больше всего, соответсвенно, именно в ней пользователи
                            проводят больше всего времени. Причиной этого является простой но захватывающий геймплей и
                            возможность остановиться и подумать над каждым ходом.
                            Рандомная герерация чисел так же создает некоторый азарт. Одним из минусов является то, что
                            можно не думая, ходить хаотично и поставить новый рекорд.
                        </p>
                        <p>Второй по популярности игрой идёт Сапёр. Несмотря на то что многие не умают играть в него,
                            научиться можно за пару секунд и потратив несколько попыток
                            игрок может уже попробовать разминировать поле полностью. Лично для меня именно сапёр
                            вызывает наибольший интерес из-за новой случайной генерации поля и
                            простоты геймпеля</p>
                        <p>
                            Змейка стоит на последнем месте из-за медленного и однообразного геймплея. Однако можно
                            добавлять модификации, чтобы играть становилось интереснее.
                        </p>
                        <p className={"attention"}><FontAwesomeIcon icon={faReact}/> Игра Крестики-нолики была добавлена
                            из-за простоты разработки, статистика по игре не предоставляется.</p>
                    </div>

                    <div className={(panel === 1) ? "about-info" : "about-info about-info-hidden"}>
                        <h3>О разработчике</h3>
                        <p className={"p-main"}>Разработчик - Дубровский Артём</p>
                        <p>
                            Я - чистый frontend разработчик, разрабатываю приложения на React(JSX), в перспективе
                            разработка на Angular и React(TSX) использованием языка
                            со строкой типизацией TypeScript.
                            Занимаюсь разработкой на React с использованием всевозможный библиотек по типу:
                            <ul>
                                <li><FontAwesomeIcon icon={faReact}/> MobX</li>
                                <li><FontAwesomeIcon icon={faReact}/> React-router-dom</li>
                                <li><FontAwesomeIcon icon={faReact}/> expressJS (backend)</li>
                                <li><FontAwesomeIcon icon={faReact}/> Redux</li>
                                <li><FontAwesomeIcon icon={faReact}/> React-chart-js2</li>
                                <li><FontAwesomeIcon icon={faReact}/> material-ui</li>
                                <li><FontAwesomeIcon icon={faReact}/> font-awesome for React</li>
                                <li><FontAwesomeIcon icon={faReact}/> прочее</li>
                            </ul>
                        </p>
                        <p className={"attention"}><FontAwesomeIcon icon={faReact}/>
                            Под понятием "чистый" имеется ввиду что я не интересуюсь ничем кроме fontend разработке,
                            поэтому я работаю только над созданием веб-приложений
                        </p>
                        <p>
                            В общей сложности занимаюсь программированием с 6 класса на Python, через 1.5 года перешёл
                            на JavaScript и начал заниматься разработкой на React.
                            Часть проектов можно увидеть в моих репозиториях на <a href={"https://github.com/2ADA2"} target={"_blank"}>GitHub</a>.
                            Так же я веду статистику на <a href={"https://wakatime.com/@ada2"} target={"_blank"}> Wakatime</a> - сервис, который отслеживает
                            время, которое программист
                            провёл за написанием кода и составляет статистику. На проект Playground я потратил 80 часов
                            написания кода, если переводить в рабочие дни то я бы потратил
                            около 2х недель написания кода по 5 часов в день с нуля.
                        </p>
                        <p className={"attention"}><FontAwesomeIcon icon={faReact}/> Playground - не солжный для меня
                            проект, он скорее просто объемный, самое сложное заключается в дизайне, а я - разработчик, я
                            не
                            дизайнер. Я имею опыт в создании проектов на React, поэтому всю логику написать часов 20
                            составляет.</p>
                        <p>Проект Playground доставлял мне удовольствие при создании, т.к. он предствляет собой
                            платформу для игр, которые интересно и создавать и играть.
                            Пока я занимался разработкой я упел наиграть несколько часов в каждую из игр (кроме
                            крестиков-ноликов). В перспективе к проекту можно добавить базу данных,
                            реализовать backend сервер на expressJS и mongoDB, создать вкладку с таблицей пользователей.
                            Если серьёзно взяться за проект то он может стать реальной игровой соревновательной
                            платформой для игроков по всему миру.</p>
                    </div>

                    <div className={(panel === 2) ? "about-info" : "about-info about-info-hidden"}>
                        <h3>2048</h3>
                        <p className={"p-main"}>Создание игры 2048</p>
                        <p className={"attention"}><FontAwesomeIcon icon={faReact}/> Раньше я уже разрабатывал отдельное веб-приложение с главной страницей, страницей статистики и самой игрой 2048, поэтому
                        разрабатывать было проще.</p>
                        <p>2048 - одна из самый сложных игр в плане реализации. Если знать алгоритмы то придумать как реализовать сложение плиток не составит труда. Одна из проблем
                        заключается в способе реализации, я выбрал самый простой, но он не позволяет создать анимацию движения плиток, можно только сделать анимацию появления и сложения</p>
                        <p>Идея создания пришла мне в голову когда я со своим одноклассником сидели на мероприятии в актовом зале гомельского обсластного лицея, где мы и учимся и он
                        играл на своих часах в 2048. Так мне и пришла идея создать эту игру в браузере, так как в то время для меня это было непростой задачей. Позже я добавил статистику
                        к своему приложению с игрой, но потом проект к сожалению откатился до очень старой версии, я его переделал и на платформе Playground вы можете увидеть похожий
                        дизайн. <a href={"https://github.com/2ADA2/2048"} target={"_blank"}>Репозиторий</a> с игрой есть на моём <a href={"https://github.com/2ADA2"} target={"_blank"}>GitHub</a>.
                        </p>
                        <p>Итоговый дизайн всех блоков игры 2048:</p>
                        <div className={"about-block"}>
                            <div className={`number number2`}>2</div>
                            <div className={`number number4`}>4</div>
                            <div className={`number number8`}>8</div>
                            <div className={`number number16`}>16</div>
                            <div className={`number number32`}>32</div>
                            <div className={`number number64`}>64</div>
                            <div className={`number number128`}>128</div>
                            <div className={`number number256`}>256</div>
                            <div className={`number number512`}>512</div>
                            <div className={`number number1024`}>1024</div>
                            <div className={`number number2048`}>2048</div>
                            <div className={`number number4096`}>4096</div>
                        </div>
                        <p className={"attention"}>
                            Можете попробовать игру 2048 <a href={"http://localhost:3000/playground/ttfe"}>здесь</a>
                        </p>
                        <p>По итогу 2048 - это лучшая по мнению многих игра в проекте Playground по причинам описанным
                            во вкладке
                            <a onClick={() => setPanel(0)}> О проекте</a>.
                            Так же я считаю что на самая лучшая в плане дизайна и ее было сложнее и интереснее всего
                            разрабатывать. Опытные разарбочики говорят, что каждый программист должен попробовать
                            сделать если не эту, то другую подобную игру ради опыта.
                            <p className={"p-main"}>Важно! Никуда не подсматривать и писать код самому, нет смысла, если ты не научишься писать даже такое простой код сам!</p>
                        </p>

                    </div>

                    <div className={(panel === 3) ? "about-info" : "about-info about-info-hidden"}>
                        <h3>Сапёр</h3>
                        <p className={"p-main"}>Создание игры Сапёр</p>
                        <p>Я сам люблю играть в сапёра, поэтому решил реализовать его в проекте. Игра сама имеет очень
                            простой геймплей но сложна в реализации на ряду с 2048.
                            Логика игры поделена на несоклько этапов:</p>
                        <ul>
                            <li>Начало</li>
                            <li>Старт</li>
                            <li>основная часть</li>
                            <li>Конец</li>
                        </ul>
                        <p className={"attention"}>Сапёр имеет несколько вариантов реализации, я так же взял самый
                            простой. Часть идея я взял с сапёра от Google, подробности ниже</p>

                        <p className={"p-main"}>1. начало</p>
                        <p>Особенность версии от Google является то, что первым ходом нельзя проиграть и это логично, то же реализовал и я. Генерируется полностью пустое поле,
                        поэтому куда бы не кликнул игрок он гарантированно попадает в пустую ячейку.</p>

                        <p className={"p-main"}>2. старт</p>
                        <p>После клика генерируется поле, учитывая место куда кликнул игрок, одна клетка не может иметь более 5 бомб в радиусе одной клетки, а первый клик не может
                        попасть в бомбу, очень редко может попастьв  цифру, чаще всего попадает в пустую ячейку и открывается часть п</p>

                        <p className={"p-main"}>3. основная часть</p>
                        <p>34324</p>

                        <p className={"p-main"}>4. конец</p>
                        <p>34324</p>

                    </div>
                </div>
            </section>
        </div>
    )
}
