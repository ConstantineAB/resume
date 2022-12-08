import { FC } from 'react';

interface myProps {
  darkThemeBtn: boolean,
}

const Footer: FC<myProps> = ({ darkThemeBtn }) => {
  return (
    <footer className={!darkThemeBtn ? "footer" : "footer dark-theme"}></footer>
  )
}

export default Footer