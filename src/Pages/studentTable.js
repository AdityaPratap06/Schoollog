import React from 'react';
import {
    Table,
    Thead,
    Tbody,
    Button,
    Tr,
    Th,
    Td,
    TableCaption,
  } from '@chakra-ui/react'
  import UserProfileEdit from "./profile";

export default function StudentDataTable() {
  return <div>
      <Table variant='simple'>
  <TableCaption> All Registered Students</TableCaption>
  <Thead>
    <Tr>
      <Th>Name</Th>
      <Th>Last Name</Th>
      <Th isNumeric>Age</Th>
      <Th>Father's Name</Th>
      <Th>Mother's Name</Th>
      <Th>City</Th>
      <Th>Action</Th>

    </Tr>
  </Thead>
  <Tbody>
    <Tr>
      <Td>Prince</Td>
      <Td>Garg </Td>
      <Td isNumeric>21</Td>
      <Td>Nand Lal</Td>
      <Td>Sunita</Td>
      <Td>Ellenabad</Td>
      <Td> <Button onClick={UserProfileEdit}  colorScheme='twitter'>View Profile</Button></Td>
    </Tr>
  </Tbody>

</Table>
  </div>;
}