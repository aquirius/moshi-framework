import React, { ReactElement, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Snack } from '../../components/Snack';
import { useAPIPost } from '../../api/api';


interface StackSettingsProps {
    suid?: number
  }

const StyledStackSettingsForm = styled.div`
  max-width: 500px;
  background: linear-gradient(90deg, #f9f9f9 0%, transparent 100%);
  border-radius: 25px;
  padding: 2rem 3rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px; 
  margin:10vh auto;
`;

const StyledStackSettingsFormHeader = styled.div`
color: inherit;
`;

const StyledStackSettingsFormContent = styled.form`
`;

const StyledStackSettingsFormLabel = styled.label`
  white-space: nowrap;
`;

const StyledStackSettingsFormInput = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
`;

const StyledStackSettingsFormSubmit = styled.button`
  background: #63ac20;
  color: white;
  padding: 1rem 2rem;
  font-size: 2re m;
  border-radius: 4px;
`;
const StackSettings = ({suid} : StackSettingsProps) : ReactElement => {
  //initialize our form with empty states
  const {register, handleSubmit, formState: {errors}} = useForm();
  const state = {
    "PUID" :"",
  }
  const [data, setData] = useState(state)
  const [loading, setLoading] = useState(false)

  //const getStackSettings = useAPIPost("/user/"+uuid+"/greenhouse/"+guid+"/pot", "get", {"payload" : {"puid": puid}});


  useEffect(() => {    
  }, [loading])

  return (
    <>
      <StyledStackSettingsForm>
        <StyledStackSettingsFormHeader>
          <h2>StackSettings</h2>
        </StyledStackSettingsFormHeader>
        <StyledStackSettingsFormContent onSubmit={() => {}}>
          <StyledStackSettingsFormLabel>Display Name</StyledStackSettingsFormLabel>
          {suid}
          <StyledStackSettingsFormInput placeholder={"suid"} {...register("SUID")} type={"text"} onChange={(e) => {}}/>
          {errors.displayName && <p>Display name is required.</p>}

          <StyledStackSettingsFormSubmit type={"submit"}>submit</StyledStackSettingsFormSubmit>
        </StyledStackSettingsFormContent>
      </StyledStackSettingsForm>
    </>
  );
}
export { StackSettings }