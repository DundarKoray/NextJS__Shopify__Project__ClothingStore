import { FC, ReactNode, ComponentType, HTMLAttributes } from "react"
import style from "./Container.module.css"

interface Props {
    children: ReactNode | ReactNode[],
    element?: ComponentType<HTMLAttributes<HTMLElement>>
}

const Container:FC<Props> = ({children, element: Component = "div"}) => {
  return (
    <Component className={style.container}>{children}</Component>
  )
}

export default Container