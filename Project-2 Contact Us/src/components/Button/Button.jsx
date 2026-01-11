import styles from './Button.module.css'

const Button = ({ isOutline, icon, text, ...rest }) => {
  return (
    <button {...rest}
      className={!isOutline ? styles.primary_btn : styles.outline_btn}>
      {icon}
      {text}
    </button>
  )
}

export default Button
