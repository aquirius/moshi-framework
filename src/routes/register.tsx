
import React, { ReactElement} from 'react';
import styled from 'styled-components';
import { Background } from '../components/Background';
import { Register } from '../features/form/Register'

const StyledRegisterPage = styled.div`
`;


interface RegisterPageProps {
}

//Register page does import our form component and is bound to our react routing system
const RegisterPage = ({} : RegisterPageProps) : ReactElement => {
return (
    <>
    <Register/>
    <Background expand/>
    </>
);
}
  
  export { RegisterPage }
  