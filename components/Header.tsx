import { FC } from "react";
import { motion } from "framer-motion";

interface myProps {
    darkThemeBtn: boolean,
    setDarkThemeBtn: Function,
}

const Header: FC<myProps> = ({ darkThemeBtn, setDarkThemeBtn }) => {
    const scrollToProgects = () => { 
        window.scrollTo({
            top: 1100,
            behavior: 'smooth',
        });
    };

    
    const scrollToContacts = () => {
        window.scrollTo({
            top: 4500,
            behavior: 'smooth',
        });
    };

    return (
        <header className={!darkThemeBtn ? "header" : "header dark-theme"}>
            <div className="header__inner">
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 1.2 }}
                >
                    <button className={!darkThemeBtn ? "header__inner__navbar__item" :   "header__inner__navbar__item dark-theme"}>
                        <a href="https://github.com/ConstantineAB/resume-kb/">Исходный код данного сайта</a>
                    </button>
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 1.2 }}
                >
                    <button onClick={() => setDarkThemeBtn(!darkThemeBtn)} className={!darkThemeBtn ? "header__inner__navbar__item" :   "header__inner__navbar__item dark-theme"}>
                        <a>Сменить тему</a>
                    </button>
                </motion.div>
                <nav className="header__inner__navbar">
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 1.2 }}
                    >
                        <button onClick={() => scrollToProgects()} className={!darkThemeBtn ? "header__inner__navbar__item" : "header__inner__navbar__item dark-theme"}>
                            <a>Мои проекты</a>
                        </button>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 1.2 }}
                    >
                        <button onClick={() => scrollToContacts()} className={!darkThemeBtn ? "header__inner__navbar__item" : "header__inner__navbar__item dark-theme"}>
                            <a>Как со мной связаться?</a>
                        </button>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 1.2 }}
                    >
                        <button className={!darkThemeBtn ? "header__inner__navbar__item" : "header__inner__navbar__item dark-theme"}>
                            <a href="https://github.com/ConstantineAB">Мой GitHub</a>
                        </button>
                    </motion.div>
                </nav>
            </div>
        </header>
    )
}

export default Header