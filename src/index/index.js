import React, {useState} from 'react';
import { Heading, TextInputField} from "evergreen-ui";
import styled from "styled-components";
import {SendHr} from "./SendHr";

const Page = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Index = () => {
  const profiles = [
    {
      id: 1,
      phone: '+7 920 300 20 10',
      organization: 'OOO "dsfagfds"',
      agency: true
    },{
      id: 2,
      phone: '+7 920 300 20 11',
      organization: 'OOO "1dsfagfds"',
      agency: false
    },{
      id: 3,
      phone: '+7 920 300 20 12',
      organization: 'OOO "2dsfagfds"',
      agency: false
    }
  ];
  const [number, setNumber] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
  };
  const handleChange = e => {
    setNumber(e.target.value)
  }
  return <div>
    <Page>
      <Heading size={ 600 } marginBottom={16}>Мне позвонили, это HR?</Heading>
      <form onSubmit={handleSubmit}>
        {/*TODO: phone formater*/}
        <TextInputField
          label="Phone Number"
          type='phone'
          onChange={handleChange}
          value={number}
        />
      </form>
    </Page>
    <SendHr/>
  </div>
};