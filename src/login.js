import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Spacer,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import  { useState} from 'react'
import React from 'react';

export default function Login() {
    const [inputField, setInputField] = useState({
        email: '',
        password : ''    
    })
    console.log("hello", inputField)
    const inputsHandler = (event) => {
        const { id, value } = event.target;
        setInputField((prevel) => ({ ...prevel, [id]: value }))
        console.log(event.target.value)
    }
    return (
        <>
            <Flex border="1px solid black" borderRadius="lg" bg="blue.300">
                <Box p='4' bg='white' borderRadius="lg">
                    <Box colorScheme='teal' variant='outline' borderRadius={6} _hover={{ bg: "gray.100" }} border='1px solid black' pr={8} pt={2} pb={2}
                        pl={8}><b> Schoollog </b></Box>
                </Box>
                <Spacer />
                <Box p='4' bg='white' borderRadius="lg">
                    <Button colorScheme='teal' variant='outline'>
                        Please Sign Up
                    </Button>
                </Box>
            </Flex>
            <Flex
                minH={'100vh'}
                align={'center'}
                justify={'center'}
                bg={useColorModeValue('gray.50', 'gray.800')}>
                <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                    <Stack align={'center'}>
                        <Heading fontSize={'4xl'}>Sign in to your account</Heading>
                        <Text fontSize={'lg'} color={'gray.600'}>
                            to enjoy all of our cool features ✌️
                        </Text>
                    </Stack>
                    <Box
                        rounded={'lg'}
                        bg={useColorModeValue('white', 'gray.700')}
                        boxShadow={'lg'}
                        p={8}>
                        <Stack spacing={4}>
                            <FormControl id="email">
                                <FormLabel>Email address</FormLabel>
                                <Input type="email" onChange = {inputsHandler} />
                            </FormControl>
                            <FormControl id="password">
                                <FormLabel>Password</FormLabel>
                                <Input type="password" onChange = {inputsHandler} />
                            </FormControl>
                            <Stack spacing={10}>
                                <Stack
                                    direction={{ base: 'column', sm: 'row' }}
                                    align={'start'}
                                    justify={'space-between'}>
                                    <Checkbox>Remember me</Checkbox>
                                    <Link color={'blue.400'}>Forgot password?</Link>
                                </Stack>
                                <Button
                                    bg={'blue.400'}
                                    color={'white'}
                                    _hover={{
                                        bg: 'blue.500',
                                    }}>
                                    Sign in
                                </Button>
                            </Stack>
                        </Stack>
                    </Box>
                </Stack>
            </Flex>
        </>
    );
}