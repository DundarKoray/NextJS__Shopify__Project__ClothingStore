import { FC, ReactNode } from "react"
import style from "./Container.module.css"

interface Props {
    children: ReactNode | ReactNode[],
    Element?: any
}

const Container:FC<Props> = ({children, Element = "div"}) => {
  return (
    <Element className={style.container}>{children}</Element>
  )
}

export default Container