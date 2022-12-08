import { FC } from 'react';
import { motion } from "framer-motion";

interface myProps {
  darkThemeBtn: boolean,
} 

const Contacts: FC<myProps> = ({ darkThemeBtn }) => {

  return (
    <section className="section-contacts">
      <div className="section-contacts__inner">
        <p className={!darkThemeBtn ? "section-contacts__inner__title" : "section-contacts__inner__title dark-theme"}>
          Свяжитесь со мной!
        </p>
        <div className="section-contacts__inner__links">
          <motion.div
            whileHover={{ scale: 1.2 }}
                whileTap={{
                  scale: 1.4
                }}
          >
            <a href="https://wa.me/19302917889" className="section-contacts__inner__links__link">
              <img src="./images/whatsapp.webp" alt="Whatsapp" />
              <p>Whatsapp</p>
            </a>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.2 }}
                whileTap={{
                  scale: 1.4
                }}
          >
            <a href="https://vk.com/thrash52" className="section-contacts__inner__links__link">
              <img src="./images/vk-logo.png" alt="VK" />
              <p>VK</p>
            </a>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.2 }}
                whileTap={{
                  scale: 1.4
                }}
          >
            <a href="https://t.me/webmasterKB" className="section-contacts__inner__links__link">
              <img src="./images/telegram-logo.svg" alt="Telegram" />
              <p>Telegram</p>
            </a>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.2 }}
                whileTap={{
                  scale: 1.4
                }}
          >
            <a href="viber://chat?number=+79302917889" className="section-contacts__inner__links__link">
              <img src="./images/viber-logo.png" alt="Viber" />
              <p>Viber</p>
            </a>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.2 }}
                whileTap={{
                  scale: 1.4
                }}
          >
            <a href="tel:+79302917889" className="section-contacts__inner__links__link">
              <img src="./images/telephone.png" alt="Телефон" />
              <p>Телефон</p>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contacts