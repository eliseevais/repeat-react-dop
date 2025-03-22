import React, {ButtonHTMLAttributes} from "react";
import s from "./SuperButton.module.css"

// type SuperButtonProps = {
//   title?: string
//   onClick: () => void
//   color: string
//   color2: string
//   children?: React.ReactNode
// }

type ColorProps = {
  color1?: string
  color2?: string
  color3?: string
  color4?: string
  color5?: string
}

type SuperButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  backGround?: string
} & Omit<ColorProps, "color4" | "color5">

export const SuperButton = (props: SuperButtonProps) => {
  const {title, onClick, children, className, disabled, color, ...restProps} = props

  // const finalClassName = s.button
  // + (disabled
  //     ? " " + s.disabled
  //     : color === "red"
  //   ? " " + s.red
  //       : color === "secondary"
  //   ? " " + s.secondary
  //         : " " + s.default)
  // + (className ? " " + className : "")

  // const finalClassName = s.button+" "+s.red

  // const finalClassName = `
  // ${s.button}
  // ${color === 'red' ? s.red : s.secondary}
  // ${disabled === true ? s.disabled : ""}
  // `

  const finalClassName = `
  ${s.button}
  ${color === 'red'
    ? s.red
    : color === 'secondary'
      ? s.secondary
      : s.default}
  ${disabled ? s.disabled : ""}
  `

  return (
    <button className={finalClassName}>{children}</button>
  )
}
