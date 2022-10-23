import { BaseButton, GoogleButton, InvertedButton, ButtonSpinner } from './button.styles.jsx'; 
import Spinner from '../spinner/spinner.component.jsx';

export const  BUTTON_TYPE_CLASSES  = {
  base: 'base',
  google: 'google',
  inverted: 'inverted'
}

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) => (
  {
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton
  }[buttonType]
)


const Button = ({ children, isLoading, buttonType, ...otherProps}) => {

  const CustomButton = getButton(buttonType)

  return (<CustomButton disabled={isLoading} {...otherProps}>
            {isLoading ? <ButtonSpinner /> : children}
          </CustomButton>)
}

export default Button