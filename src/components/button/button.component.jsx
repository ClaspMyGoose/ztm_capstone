import './button.styles.scss'; 

const  BUTTON_TYPE_CLASSES  = {
  google: 'google-sign-in',
  inverted: 'inverted'
}

const Button = ({ children, buttonType, ...otherProps}) => (

  <button className={`${buttonType ? BUTTON_TYPE_CLASSES[buttonType] : ''} button-container`} {...otherProps} >{children}</button> 
)

export default Button