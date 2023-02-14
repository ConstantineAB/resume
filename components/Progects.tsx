import { createRef, FC, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Commentary from './Commentary';
import { setInterval } from 'timers';

interface myProps {
  darkThemeBtn: boolean;
}

const Progects: FC<myProps> = ({ darkThemeBtn }) => {
  useEffect(() => {
    setInterval(() => {
      getNuxt('https://resume-backend-production.up.railway.app/posts/nuxt').then((data) =>
        setNuxtComments(data),
      );
      getPerekrestok('https://resume-backend-production.up.railway.app/posts/perekrestok').then(
        (data) => setPerekrestokComments(data),
      );
      getLanding('https://resume-backend-production.up.railway.app/posts/landing').then((data) =>
        setLandingComments(data),
      );
      getMebel('https://resume-backend-production.up.railway.app/posts/mebel').then((data) =>
        setMebelComments(data),
      );
      getMebelbest('https://resume-backend-production.up.railway.app/posts/mebelbest').then(
        (data) => setMebelbestComments(data),
      );
    }, 5000);
  }, []);

  //Логика перекрестка
  const [perekrestokComments, setPerekrestokComments] = useState([]);

  const [perekrestokName, setPerekrestokName] = useState('');
  const [perekrestokText, setPerekrestokText] = useState('');

  let perekrestokObj = {
    index: 'perekrestok',
    author: perekrestokName,
    content: perekrestokText,
  };

  const getPerekrestok = async (url: any) => {
    return await fetch(url).then((res) => {
      return res.json();
    });
  };

  const postPerekrestokСomments = async () => {
    fetch('https://resume-backend-production.up.railway.app/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(perekrestokObj),
    });

    setPerekrestokName('');
    setPerekrestokText('');

    getPerekrestok('https://resume-backend-production.up.railway.app/posts/perekrestok').then(
      (data) => setPerekrestokComments(data),
    );
  };

  // Логика лендинга
  const [landingComments, setLandingComments] = useState([]);

  const [landingName, setLandingName] = useState('');
  const [landingText, setLandingText] = useState('');

  let landingObj = {
    index: 'landing',
    author: landingName,
    content: landingText,
  };

  const getLanding = async (url: any) => {
    return await fetch(url).then((res) => {
      return res.json();
    });
  };

  const postLandingСomments = async () => {
    fetch('https://resume-backend-production.up.railway.app/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(landingObj),
    });

    setLandingName('');
    setLandingText('');

    getLanding('https://resume-backend-production.up.railway.app/posts/landing').then((data) =>
      setPerekrestokComments(data),
    );
  };

  // Логика Mebel65
  const [mebelComments, setMebelComments] = useState([]);

  const [mebelName, setMebelName] = useState('');
  const [mebelText, setMebelText] = useState('');

  let mebelObj = {
    index: 'mebel',
    author: mebelName,
    content: mebelText,
  };

  const getMebel = async (url: any) => {
    return await fetch(url).then((res) => {
      return res.json();
    });
  };

  const postMebelСomments = async () => {
    fetch('https://resume-backend-production.up.railway.app/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(mebelObj),
    });

    setMebelName('');
    setMebelText('');

    getMebel('https://resume-backend-production.up.railway.app/posts/mebel').then((data) =>
      setMebelComments(data),
    );
  };

  // Логика Mebelbest
  const [mebelbestComments, setMebelbestComments] = useState([]);

  const [mebelbestName, setMebelbestName] = useState('');
  const [mebelbestText, setMebelbestText] = useState('');

  let mebelbestObj = {
    index: 'mebelbest',
    author: mebelbestName,
    content: mebelbestText,
  };

  const getMebelbest = async (url: any) => {
    return await fetch(url).then((res) => {
      return res.json();
    });
  };

  const postMebelbestСomments = async () => {
    fetch('https://resume-backend-production.up.railway.app/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(mebelbestObj),
    });

    setMebelbestName('');
    setMebelbestText('');

    getMebelbest('https://resume-backend-production.up.railway.app/posts/mebelbest').then((data) =>
      setNuxtComments(data),
    );
  };

  // Логика NUXT-STORE
  const [nuxtComments, setNuxtComments] = useState([]);

  const [nuxtName, setNuxtName] = useState('');
  const [nuxtText, setNuxtText] = useState('');

  let nuxtObj = {
    index: 'nuxt',
    author: nuxtName,
    content: nuxtText,
  };

  const getNuxt = async (url: any) => {
    return await fetch(url).then((res) => {
      return res.json();
    });
  };

  const postNuxtСomments = async () => {
    fetch('https://resume-backend-production.up.railway.app/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(nuxtObj),
    });

    setNuxtName('');
    setNuxtText('');

    getNuxt('https://resume-backend-production.up.railway.app/posts/nuxt').then((data) =>
      setNuxtComments(data),
    );
  };

  const [card1, useCard1] = useState(true);
  const [card2, useCard2] = useState(true);
  const [card3, useCard3] = useState(true);
  const [card4, useCard4] = useState(true);

  return (
    <section className={!darkThemeBtn ? 'section-progects' : 'section-progects dark-theme'}>
      <div
        className={!darkThemeBtn ? 'section-progects__item' : 'section-progects__item dark-theme'}>
        <div onClick={() => useCard1(!card1)} className="card">
          <div className={card1 ? 'card__inner' : 'card__inner is-flipped'}>
            <div className="card__face card__face--front">
              <img src="./images/leaflet-app.png" alt="" className="pp" />
            </div>
            <div className="card__face card__face--back">
              <div className="card__content">
                <div className={!darkThemeBtn ? 'card__header' : 'card__header dark-theme'}>
                  <h2>leaflet-app</h2>
                </div>
                <div className="card__body">
                  <h3>Ссылки</h3>
                  <button>
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.2 }}>
                      <a
                        className={
                          !darkThemeBtn ? 'card__body__link-1' : 'card__body__link-1 dark-theme'
                        }
                        href="http://leaflet-app.zzz.com.ua/">
                        Перейти на сайт
                      </a>
                    </motion.div>
                  </button>
                  <button>
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.2 }}>
                      <a
                        className={
                          !darkThemeBtn ? 'card__body__link-2' : 'card__body__link-2 dark-theme'
                        }
                        href="https://github.com/ConstantineAB/leaflet-app/">
                        Исходный код
                      </a>
                    </motion.div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-progects__item__description">
          <div className="section-progects__item__description__inner">
            <div
              className={
                !darkThemeBtn
                  ? 'section-progects__item__description__inner__title'
                  : 'section-progects__item__description__inner__title dark-theme'
              }>
              Приложение по отображению
              <br />
              заявок на перевозку.
              <br />
            </div>
            <div
              className={
                !darkThemeBtn
                  ? 'section-progects__item__description__inner__subtitle'
                  : 'section-progects__item__description__inner__subtitle dark-theme'
              }>
              Я создал этот проект с нуля
              <br />
              на фреймворке React и библиотеке leaflet.
            </div>
            <div className="section-progects__item__description__comments">
              <h3
                className={
                  !darkThemeBtn
                    ? 'section-progects__item__description__comments__title'
                    : 'section-progects__item__description__comments__title dark-theme'
                }>
                Комментарии
              </h3>
              {perekrestokComments.map((obj: any) => (
                <Commentary key={obj.id} {...obj} darkThemeBtn={darkThemeBtn} />
              ))}
              <input
                className={
                  !darkThemeBtn
                    ? 'section-progects__item__description__comments__input-name'
                    : 'section-progects__item__description__comments__input-name dark-theme'
                }
                type="text"
                placeholder="Введите свое имя"
                value={perekrestokName}
                onChange={(e) => setPerekrestokName(e.target.value)}
              />
              <input
                className={
                  !darkThemeBtn
                    ? 'section-progects__item__description__comments__input-text'
                    : 'section-progects__item__description__comments__input-text dark-theme'
                }
                type="text"
                placeholder="Введите текст комментария"
                value={perekrestokText}
                onChange={(e) => setPerekrestokText(e.target.value)}
              />
              <button
                className={
                  !darkThemeBtn
                    ? 'section-progects__item__description__comments__button'
                    : 'section-progects__item__description__comments__button dark-theme'
                }
                onClick={postPerekrestokСomments}>
                Отправить
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          !darkThemeBtn ? 'section-progects__item-2' : 'section-progects__item-2 dark-theme'
        }>
        <div className="section-progects__item-2__container">
          <div className="section-progects__item-2__container__description">
            <div className="section-progects__item-2__container__description__inner">
              <div
                className={
                  !darkThemeBtn
                    ? 'section-progects__item-2__container__description__inner__title'
                    : 'section-progects__item-2__container__description__inner__title dark-theme'
                }>
                NUXT-STORE
              </div>
              <div
                className={
                  !darkThemeBtn
                    ? 'section-progects__item-2__container__description__inner__subtitle'
                    : 'section-progects__item-2__container__description__inner__subtitle dark-theme'
                }>
                Сайт выполнен на фреймворке Nuxt JS. В данном проекте
                <br />
                реализован поиск, изменение состояния кнопок.
                <br />
                Webpack и tsc настроил самостоятельно.
              </div>
              <div className="section-progects__item__description__comments">
                <h3
                  className={
                    !darkThemeBtn
                      ? 'section-progects__item__description__comments__title'
                      : 'section-progects__item__description__comments__title dark-theme'
                  }>
                  Комментарии
                </h3>
                {nuxtComments.map((obj: any) => (
                  <Commentary key={obj.id} {...obj} darkThemeBtn={darkThemeBtn} />
                ))}
                <input
                  className={
                    !darkThemeBtn
                      ? 'section-progects__item__description__comments__input-name'
                      : 'section-progects__item__description__comments__input-name dark-theme'
                  }
                  type="text"
                  placeholder="Введите свое имя"
                  value={nuxtName}
                  onChange={(e) => setNuxtName(e.target.value)}
                />
                <input
                  className={
                    !darkThemeBtn
                      ? 'section-progects__item__description__comments__input-text'
                      : 'section-progects__item__description__comments__input-text dark-theme'
                  }
                  type="text"
                  placeholder="Введите текст комментария"
                  value={nuxtText}
                  onChange={(e) => setNuxtText(e.target.value)}
                />
                <button
                  className={
                    !darkThemeBtn
                      ? 'section-progects__item__description__comments__button'
                      : 'section-progects__item__description__comments__button dark-theme'
                  }
                  onClick={postNuxtСomments}>
                  Отправить
                </button>
              </div>
            </div>
          </div>
          <div onClick={() => useCard2(!card2)} className="card">
            <div className={card2 ? 'card__inner' : 'card__inner is-flipped'}>
              <div className="card__face card__face--front">
                <img src="./images/nuxt-store.png" alt="" className="pp" />
              </div>
              <div className="card__face card__face--back">
                <div className="card__content">
                  <div className={!darkThemeBtn ? 'card__header' : 'card__header dark-theme'}>
                    <h2>NUXT-STORE</h2>
                  </div>
                  <div className="card__body">
                    <h3>Ссылки</h3>
                    <button>
                      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.2 }}>
                        <a
                          className={
                            !darkThemeBtn ? 'card__body__link-1' : 'card__body__link-1 dark-theme'
                          }
                          href="https://nuxt-store-production.up.railway.app/">
                          Перейти на сайт
                        </a>
                      </motion.div>
                    </button>
                    <button>
                      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.2 }}>
                        <a
                          className={
                            !darkThemeBtn ? 'card__body__link-2' : 'card__body__link-2 dark-theme'
                          }
                          href="https://github.com/ConstantineAB/nuxt-store">
                          Исходный код
                        </a>
                      </motion.div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={!darkThemeBtn ? 'section-progects__item' : 'section-progects__item dark-theme'}>
        <div onClick={() => useCard1(!card1)} className="card">
          <div className={card1 ? 'card__inner' : 'card__inner is-flipped'}>
            <div className="card__face card__face--front">
              <img src="./images/pere.png" alt="" className="pp" />
            </div>
            <div className="card__face card__face--back">
              <div className="card__content">
                <div className={!darkThemeBtn ? 'card__header' : 'card__header dark-theme'}>
                  <h2>Перекресток</h2>
                </div>
                <div className="card__body">
                  <h3>Ссылки</h3>
                  <button>
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.2 }}>
                      <a
                        className={
                          !darkThemeBtn ? 'card__body__link-1' : 'card__body__link-1 dark-theme'
                        }
                        href="https://perekrestok-production.up.railway.app/">
                        Перейти на сайт
                      </a>
                    </motion.div>
                  </button>
                  <button>
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.2 }}>
                      <a
                        className={
                          !darkThemeBtn ? 'card__body__link-2' : 'card__body__link-2 dark-theme'
                        }
                        href="https://github.com/ConstantineAB/tc-bogatyr">
                        Исходный код
                      </a>
                    </motion.div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-progects__item__description">
          <div className="section-progects__item__description__inner">
            <div
              className={
                !darkThemeBtn
                  ? 'section-progects__item__description__inner__title'
                  : 'section-progects__item__description__inner__title dark-theme'
              }>
              Интернет-магазин "Перекресток"
              <br />
              Мой первый коммерческий проект
              <br />
            </div>
            <div
              className={
                !darkThemeBtn
                  ? 'section-progects__item__description__inner__title'
                  : 'section-progects__item__description__inner__title dark-theme'
              }>
              (На данный момент этот сайт находится в разработке)
            </div>
            <div
              className={
                !darkThemeBtn
                  ? 'section-progects__item__description__inner__subtitle'
                  : 'section-progects__item__description__inner__subtitle dark-theme'
              }>
              Сайт магазина строй материалов "Перекресток". Я создал этот продукт с нуля
              <br />
              на фреймворке NextJS и стейт менеджере Redux, за отправку письма с<br />
              заказом отвечает nodemailer.
              <br />
              По понятной причине я не могу предоставить весь исходный код.
            </div>
            <div className="section-progects__item__description__comments">
              <h3
                className={
                  !darkThemeBtn
                    ? 'section-progects__item__description__comments__title'
                    : 'section-progects__item__description__comments__title dark-theme'
                }>
                Комментарии
              </h3>
              {perekrestokComments.map((obj: any) => (
                <Commentary key={obj.id} {...obj} darkThemeBtn={darkThemeBtn} />
              ))}
              <input
                className={
                  !darkThemeBtn
                    ? 'section-progects__item__description__comments__input-name'
                    : 'section-progects__item__description__comments__input-name dark-theme'
                }
                type="text"
                placeholder="Введите свое имя"
                value={perekrestokName}
                onChange={(e) => setPerekrestokName(e.target.value)}
              />
              <input
                className={
                  !darkThemeBtn
                    ? 'section-progects__item__description__comments__input-text'
                    : 'section-progects__item__description__comments__input-text dark-theme'
                }
                type="text"
                placeholder="Введите текст комментария"
                value={perekrestokText}
                onChange={(e) => setPerekrestokText(e.target.value)}
              />
              <button
                className={
                  !darkThemeBtn
                    ? 'section-progects__item__description__comments__button'
                    : 'section-progects__item__description__comments__button dark-theme'
                }
                onClick={postPerekrestokСomments}>
                Отправить
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          !darkThemeBtn ? 'section-progects__item-2' : 'section-progects__item-2 dark-theme'
        }>
        <div className="section-progects__item-2__container">
          <div className="section-progects__item-2__container__description">
            <div className="section-progects__item-2__container__description__inner">
              <div
                className={
                  !darkThemeBtn
                    ? 'section-progects__item-2__container__description__inner__title'
                    : 'section-progects__item-2__container__description__inner__title dark-theme'
                }>
                Лэндинг
              </div>
              <div
                className={
                  !darkThemeBtn
                    ? 'section-progects__item-2__container__description__inner__subtitle'
                    : 'section-progects__item-2__container__description__inner__subtitle dark-theme'
                }>
                Верстка на препроцессоре SASS в синтаксисе SCSS.
                <br />
              </div>
              <div className="section-progects__item__description__comments">
                <h3
                  className={
                    !darkThemeBtn
                      ? 'section-progects__item__description__comments__title'
                      : 'section-progects__item__description__comments__title dark-theme'
                  }>
                  Комментарии
                </h3>
                {landingComments.map((obj: any) => (
                  <Commentary key={obj.id} {...obj} darkThemeBtn={darkThemeBtn} />
                ))}
                <input
                  className={
                    !darkThemeBtn
                      ? 'section-progects__item__description__comments__input-name'
                      : 'section-progects__item__description__comments__input-name dark-theme'
                  }
                  type="text"
                  placeholder="Введите свое имя"
                  value={landingName}
                  onChange={(e) => setLandingName(e.target.value)}
                />
                <input
                  className={
                    !darkThemeBtn
                      ? 'section-progects__item__description__comments__input-text'
                      : 'section-progects__item__description__comments__input-text dark-theme'
                  }
                  type="text"
                  placeholder="Введите текст комментария"
                  value={landingText}
                  onChange={(e) => setLandingText(e.target.value)}
                />
                <button
                  className={
                    !darkThemeBtn
                      ? 'section-progects__item__description__comments__button'
                      : 'section-progects__item__description__comments__button dark-theme'
                  }
                  onClick={postLandingСomments}>
                  Отправить
                </button>
              </div>
            </div>
          </div>
          <div onClick={() => useCard2(!card2)} className="card">
            <div className={card2 ? 'card__inner' : 'card__inner is-flipped'}>
              <div className="card__face card__face--front">
                <img src="./images/landing.png" alt="" className="pp" />
              </div>
              <div className="card__face card__face--back">
                <div className="card__content">
                  <div className={!darkThemeBtn ? 'card__header' : 'card__header dark-theme'}>
                    <h2>Лэндинг</h2>
                  </div>
                  <div className="card__body">
                    <h3>Ссылки</h3>
                    <button>
                      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.2 }}>
                        <a
                          className={
                            !darkThemeBtn ? 'card__body__link-1' : 'card__body__link-1 dark-theme'
                          }
                          href="https://constantineab.github.io/travel-agency/">
                          Перейти на сайт
                        </a>
                      </motion.div>
                    </button>
                    <button>
                      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.2 }}>
                        <a
                          className={
                            !darkThemeBtn ? 'card__body__link-2' : 'card__body__link-2 dark-theme'
                          }
                          href="https://github.com/ConstantineAB/travel-agency">
                          Исходный код
                        </a>
                      </motion.div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={!darkThemeBtn ? 'section-progects__item' : 'section-progects__item dark-theme'}>
        <div onClick={() => useCard1(!card1)} className="card">
          <div className={card1 ? 'card__inner' : 'card__inner is-flipped'}>
            <div className="card__face card__face--front">
              <img src="./images/mistrium.png" alt="" className="pp" />
            </div>
            <div className="card__face card__face--back">
              <div className="card__content">
                <div className={!darkThemeBtn ? 'card__header' : 'card__header dark-theme'}>
                  <h2>Mistrium</h2>
                </div>
                <div className="card__body">
                  <h3>Ссылки</h3>
                  <button>
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.2 }}>
                      <a
                        className={
                          !darkThemeBtn ? 'card__body__link-1' : 'card__body__link-1 dark-theme'
                        }
                        href="https://constantineab.github.io/Mebelbest/">
                        Перейти на сайт
                      </a>
                    </motion.div>
                  </button>
                  <button>
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.2 }}>
                      <a
                        className={
                          !darkThemeBtn ? 'card__body__link-2' : 'card__body__link-2 dark-theme'
                        }
                        href="https://github.com/ConstantineAB/Mebelbest">
                        Исходный код
                      </a>
                    </motion.div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-progects__item__description">
          <div className="section-progects__item__description__inner">
            <div
              className={
                !darkThemeBtn
                  ? 'section-progects__item__description__inner__title'
                  : 'section-progects__item__description__inner__title dark-theme'
              }>
              Mistrium
            </div>
            <div
              className={
                !darkThemeBtn
                  ? 'section-progects__item-2__container__description__inner__subtitle'
                  : 'section-progects__item-2__container__description__inner__subtitle dark-theme'
              }>
              Адаптивная верстка на чистом CSS, без препроцессоров и фрэймворков.
              <br />
            </div>
            <div className="section-progects__item__description__comments">
              <h3
                className={
                  !darkThemeBtn
                    ? 'section-progects__item__description__comments__title'
                    : 'section-progects__item__description__comments__title dark-theme'
                }>
                Комментарии
              </h3>
              {mebelbestComments.map((obj: any) => (
                <Commentary key={obj.id} {...obj} darkThemeBtn={darkThemeBtn} />
              ))}
              <input
                className={
                  !darkThemeBtn
                    ? 'section-progects__item__description__comments__input-name'
                    : 'section-progects__item__description__comments__input-name dark-theme'
                }
                type="text"
                placeholder="Введите свое имя"
                value={mebelbestName}
                onChange={(e) => setMebelbestName(e.target.value)}
              />
              <input
                className={
                  !darkThemeBtn
                    ? 'section-progects__item__description__comments__input-text'
                    : 'section-progects__item__description__comments__input-text dark-theme'
                }
                type="text"
                placeholder="Введите текст комментария"
                value={mebelbestText}
                onChange={(e) => setMebelbestText(e.target.value)}
              />
              <button
                className={
                  !darkThemeBtn
                    ? 'section-progects__item__description__comments__button'
                    : 'section-progects__item__description__comments__button dark-theme'
                }
                onClick={postMebelbestСomments}>
                Отправить
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Progects;
