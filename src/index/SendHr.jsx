import React from "react";
import {Heading, TextInputField, Button, Checkbox, Label} from "evergreen-ui";
import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 300px 300px 50px;
  grid-gap: 2em;
`
const Page = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const SendHr = () => {
  const handleSubmit = e => {
    e.preventDefault()
  };
  return <Page>
    <Heading size={ 600 } marginBottom={16}>Я знаю HR</Heading>
    <form onSubmit={handleSubmit}>
      <Grid>
        <div>
          {/*TODO: phone formatter*/}
          <TextInputField
            label="Phone Number"
            placeholder="+7 999 000 00 00"
            type='phone'
          />
        </div>
        <div>
          <TextInputField
            label="Organization"
          />
        </div>
        <div>
          <Label>Agency?</Label>
          <Checkbox/>
        </div>
      </Grid>
      <Button type='submit'>Send</Button>
    </form>
  </Page>
}