import React, { ReactElement, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../button/Button';
import { IconButton } from '../button/IconButton';
import { faBox, faCloudSun, faHouse } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAPIPost, useAPIPut } from '../../api/api';



interface NotificationsSettingsProps {
    uuid?:number
  }

const StyledNotificationsettingsForm = styled.div`
  max-width: 500px;
  height: 100%;
  overflow-y: scroll;
  background: linear-gradient(90deg, #f9f9f9 0%, transparent 100%);
  border-radius: 25px;
  padding: 2rem 3rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px; 
`;

const StyledNotificationsettingsFormHeader = styled.div`
color: inherit;
`;

const StyledNotificationsettingsFormContent = styled.form`
`;

const StyledNotificationsettingsFormLabel = styled.label`
  white-space: nowrap;
`;

const StyledNotificationsettingsFormInput = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
`;

const NotificationsSettings = ({uuid} : NotificationsSettingsProps) : ReactElement => {
  //initialize our form with empty states
  const {register, handleSubmit, formState: {errors}} = useForm();
  const [displayName, setDisplayName] = useState("");
  const [zip, setZip] = useState("");
  const [address, setAddress] = useState("");

  const [destination, setDestination] = useState("");
  const [tempIn, setTempIn] = useState(0);
  const [tempOut, setTempOut] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [brightness, setBrightness] = useState(0);
  const [co2, setCo2] = useState(0);

  const [loading, setLoading] = useState(false)

  const postNotificationsettings = useAPIPost("/user/"+uuid+"/notifications",  "", {})

  const onSubmit = (data: any) => {
    postNotificationsettings.post({"payload" : 
    {
      "uuid": uuid,
      "display_name": displayName,
      "status" : "active", 
      "zip" : zip,
      "address" : address,
      "destination" : destination,
      "tempIn" : tempIn,
      "tempOut" : tempOut,
      "humidity" : humidity,
      "brightness" : brightness,
      "co2" : co2,
    }}, "/user/"+uuid, );
  }

  return (
    <>
      <StyledNotificationsettingsForm>
        <StyledNotificationsettingsFormHeader>
          <h2>Notificationsettings</h2>
        </StyledNotificationsettingsFormHeader>
        <StyledNotificationsettingsFormContent onSubmit={handleSubmit(onSubmit)}>
          <StyledNotificationsettingsFormLabel>Display Name</StyledNotificationsettingsFormLabel>
          <StyledNotificationsettingsFormInput placeholder={"display name"} {...register("displayName")} type={"text"} onChange={(e) => setDisplayName(e.target.value)}/>

          <StyledNotificationsettingsFormLabel>Address</StyledNotificationsettingsFormLabel>
          <StyledNotificationsettingsFormInput placeholder={"address"} {...register("address")} type={"text"} onChange={(e) => setAddress(e.target.value)}/>

          <StyledNotificationsettingsFormLabel>Zip</StyledNotificationsettingsFormLabel>
          <StyledNotificationsettingsFormInput placeholder={"zip"} {...register("zip")} type={"text"} onChange={(e) => setZip(e.target.value)}/>

          <StyledNotificationsettingsFormLabel>Temperature Inside</StyledNotificationsettingsFormLabel>
          <StyledNotificationsettingsFormInput placeholder={"temp in"} {...register("tempIn")} type={"number"} onChange={(e) => setTempIn(parseInt(e.target.value))}/>

          <StyledNotificationsettingsFormLabel>Temperature Outside</StyledNotificationsettingsFormLabel>
          <StyledNotificationsettingsFormInput placeholder={"temp out"} {...register("tempOut")} type={"number"} onChange={(e) => setTempOut(parseFloat(e.target.value))}/>

          <StyledNotificationsettingsFormLabel>Humidity</StyledNotificationsettingsFormLabel>
          <StyledNotificationsettingsFormInput placeholder={"humidity"} {...register("humidity")} type={"number"} onChange={(e) => setHumidity(parseFloat(e.target.value))}/>

          <StyledNotificationsettingsFormLabel>Brightness</StyledNotificationsettingsFormLabel>
          <StyledNotificationsettingsFormInput placeholder={"brightness"} {...register("brightness")} type={"number"} onChange={(e) => setBrightness(parseInt(e.target.value))}/>

          <StyledNotificationsettingsFormLabel>Co2</StyledNotificationsettingsFormLabel>
          <StyledNotificationsettingsFormInput placeholder={"co2"} {...register("co2")} type={"number"} onChange={(e) => setCo2(parseInt(e.target.value))}/>

          <StyledNotificationsettingsFormLabel><FontAwesomeIcon size='2x' icon={faBox as IconProp}/></StyledNotificationsettingsFormLabel>
          <StyledNotificationsettingsFormInput placeholder={"greenhouse"} {...register("destination")} type={"radio"} value={"greenhouse"} onClick={() => setDestination("greenhouse")}/>

          <StyledNotificationsettingsFormLabel><FontAwesomeIcon size='2x' icon={faHouse as IconProp}/></StyledNotificationsettingsFormLabel>
          <StyledNotificationsettingsFormInput placeholder={"indoor"} {...register("destination")} type={"radio"} value={"indoor"} onClick={() => setDestination("indoor")}/>

          <StyledNotificationsettingsFormLabel><FontAwesomeIcon size='2x' icon={faCloudSun as IconProp}/></StyledNotificationsettingsFormLabel>
          <StyledNotificationsettingsFormInput placeholder={"outdoor"} {...register("destination")} type={"radio"} value={"outdoor"} onClick={() => setDestination("outdoor")}/>

          <Button type={"submit"} content='submit'></Button>
        </StyledNotificationsettingsFormContent>
      </StyledNotificationsettingsForm>
    </>
  );
}
export { NotificationsSettings }
