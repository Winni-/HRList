import React from "react";
import {Heading, TextInputField, Button} from "evergreen-ui";

export const SendHr = () => {
  return <aside>
    <Heading size={ 600 } marginBottom={16}>Add HR</Heading>
    <form onSubmit={()=>{} }>
      {/*TODO: phone formater*/}
      <TextInputField
        label="Phone Number"
        placeholder="+7 999 000 00 00"
        type='phone'
      />
      <TextInputField
        label="Organization"
        description="Place of work, not the organization he/she is looking people for"
      />
      <TextInputField
        label="Name"
      />
      <Button type='submit'>Send</Button>
    </form>
  </aside>
}