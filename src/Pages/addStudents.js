import * as React from 'react'
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  HStack,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
// import { useState } from 'react';

export default function AddStudents() {
//   const [showPassword, setShowPassword] = useState(false);

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Add Student
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            Create your account
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
            </HStack>
            <Box>
                <FormControl id="number" isRequired >
                  <FormLabel>Contact no.</FormLabel>
                  <Input type="tel" minLength={10} maxLength={10} pattern='[6-9]{1}[0-9]{9}' required />
                </FormControl>
              </Box>
              <Box>
              <HStack>
              <Box>
                <FormControl id="father">
                  <FormLabel>Father's Name</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="mother">
                  <FormLabel>Mother's Name</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
              </HStack>
              <Box>
                <FormControl id="address">
                  <FormLabel>Address</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
            
              <Box>
                <FormControl id="city">
                  <FormLabel>City</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
                <FormControl id="state">
                  <FormLabel>State</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
              
              <Box>
                <FormControl id="pincode">
                  <FormLabel>Pin code</FormLabel>
                  <Input type="value" />
                </FormControl>
              </Box>
            
            <FormControl id="email" >
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            
        
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={'blue.200'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Save
              </Button>
            </Stack>
            
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}