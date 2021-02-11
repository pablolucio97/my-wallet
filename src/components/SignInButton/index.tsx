import React, {ButtonHTMLAttributes} from 'react';

import { SignInBtn} from './styles';

type IButton = ButtonHTMLAttributes<HTMLButtonElement>;

const SignInButton: React.FC<IButton> = ({...rest}) => {
  return <SignInBtn {...rest} />;
}

export default SignInButton;