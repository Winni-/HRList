import React from 'react';
import { Heading, Table, TableHead, SearchTableHeaderCell, TextTableHeaderCell, TableBody, TableRow, TextTableCell} from "evergreen-ui";
import styled from "styled-components";
import {SendHr} from "./SendHr";


const Grid = styled.div`
  display: grid;
  grid-template-columns: auto 300px;
  padding: 1em 5em;
  grid-gap: 1em;
`

export const Index = () => {
  const profiles = [
    {
      id: 1,
      phone: '+7 920 300 20 10',
      organization: 'OOO "dsfagfds"',
      name: 'Name Name Jon'
    },{
      id: 2,
      phone: '+7 920 300 20 10',
      organization: 'OOO "dsfagfds"',
      name: ''
    },{
      id: 3,
      phone: '+7 920 300 20 10',
      organization: 'OOO "dsfagfds"',
      name: 'Name Name Jon'
    }
  ];
  return <Grid>
    <main>
      <Heading size={ 800 } marginBottom={24}>HR List</Heading>
      <Table>
        <TableHead>
          <SearchTableHeaderCell />
          <TextTableHeaderCell isSortable sortOrder="descending">
            Organization
          </TextTableHeaderCell>
          <TextTableHeaderCell borderRight={null}>
            Name
          </TextTableHeaderCell>
        </TableHead>
        <TableBody height={240}>
          {profiles.map(profile => (
            <TableRow key={profile.id} isSelectable>
              <TextTableCell>{profile.phone}</TextTableCell>
              <TextTableCell>{profile.organization}</TextTableCell>
              <TextTableCell borderRight={null}>
                {profile.name}
              </TextTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </main>
    <SendHr/>
  </Grid>
};