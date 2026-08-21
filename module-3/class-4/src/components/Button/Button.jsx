import { forwardRef } from "react"
import "./Button.css"

const Button = forwardRef(function Button(
  { children, className = "", href, iconOnly = false, type = "button", variant = "primary", ...props },
  ref,
) {
  const buttonClassName = [
    "button",
    `button--${variant}`,
    iconOnly ? "button--icon-only" : "",
    className,
  ].filter(Boolean).join(" ")

  if (href) {
    return (
      <a className={buttonClassName} href={href} ref={ref} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button className={buttonClassName} ref={ref} type={type} {...props}>
      {children}
    </button>
  )
})

export default Button