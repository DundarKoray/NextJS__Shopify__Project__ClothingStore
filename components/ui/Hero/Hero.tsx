import { FC } from "react"
import style from "./Hero.module.css"

interface Props {
    headline: string
    description: string
}

const Hero: FC<Props> = ({headline, description}) => {
  return (
    <div className="bg-black">
        <div className={style.root}>
            <h1>{headline}</h1>
            <h2>{description}</h2>
        </div>
    </div>
  )
}

export default Hero