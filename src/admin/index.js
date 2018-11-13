import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: auto 300px;
  padding: 1em 5em;
  grid-gap: 1em;
`

export const Admin = () => {
  return <Grid>
    <main>
      <Heading size={ 800 } marginBottom={24}>Мне позвонили, узнать hr ли это</Heading>
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
}