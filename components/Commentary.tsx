import { FC } from 'react';

interface myProps {
  author: string,
  content: string,
  darkThemeBtn: boolean,
}

const Commentary: FC<myProps> = ({ author, content, darkThemeBtn}) => {

  return (
    <div className='commentary'>
      <p className={!darkThemeBtn ? "commentary__author" : "commentary__author dark-theme"}>{author}</p>
      <p className={!darkThemeBtn ? "commentary__content" : "commentary__content dark-theme"}>{content}</p>
    </div>
  )
}

export default Commentary