import { FC, ReactNode } from "react"
import Ticker from "react-ticker"
import style from "./Marquee.module.css"
import classNames from "classnames"

interface Props {
  children: ReactNode[]
  variant?: "primary" | "secondary"
}

const Marquee:FC<Props> = ({children, variant = "primary"}) => {
  const rootClassName = classNames(
    style.marquee,
    {
      [style.secondary]: variant === "secondary"
    }
  )
  return (
    <div className={rootClassName}>
      <Ticker offset={80}>
        { () =>
          <div className={style.container}>
            {children}
          </div>
        }
      </Ticker>
    </div>
  )
}
export default Marquee