import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    useColorModeValue,
    HStack,
    Avatar,
    AvatarBadge,
    IconButton,
    Center,
    Select,
    NumberInput,
    NumberInputField

} from '@chakra-ui/react';
import { SmallCloseIcon } from '@chakra-ui/icons';
import React from 'react';
export default function UserProfileEdit() {
    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack
                spacing={4}
                w={'full'}
                maxW={'md'}
                bg={useColorModeValue('white', 'gray.700')}
                rounded={'x1'}
                boxShadow={'lg'}
                p={6}
                my={12}>
                <Heading lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }}>
                    <center> Student Profile</center>
                </Heading>
                <FormControl id="userName">
                    {/* <FormLabel>User Icon</FormLabel> */}
                    <Stack >
                        <Center>
                            <Avatar size="xl" src="studentprofilepicture.jpg">

                            </Avatar>
                        </Center>

                    </Stack>
                </FormControl>
                <FormControl id="userName" isRequired>
                    <FormLabel>Student Name</FormLabel>
                    <Input
                        placeholder="StudentName"
                        _placeholder={{ color: 'gray.500' }}
                        type="text"
                    />
                </FormControl>
     
                <FormControl id='contact' isRequired>
                    <FormLabel>Contact No.</FormLabel>
                   
                    
                    {/* <Select size='md' maxW={20}  >  <option>+91</option></Select> */}


                   
                    <Input
                        type="tel" id="Contact" pattern="[6-9]{1}[0-9]{9}" maxLength="10"
                        placeholder='Contact No.'
                        _placeholder={{ color: 'gray.500' }}
                        size='md'
                        maxW='full'>
                     
                    </Input>
                </FormControl>
                
                <FormControl id="userName" isRequired >
                    <FormLabel>Course Name</FormLabel>
                    <Input
                        placeholder="CoureseName"
                        _placeholder={{ color: 'gray.500' }}
                        type="text"
                    />
                </FormControl >
                <FormControl isRequired>
                    <FormLabel id='state' >State</FormLabel>
                    <Select placeholder='Select State'
                        _placeholder={{ color: 'gray.500' }}>
                        <option>Rajasthan</option>
                        <option>Gujrat</option>
                        <option>Uttar Pradesh</option>
                        <option>Haryana</option>
                        <option>Delhi</option>
                        <option>Maharastra</option>
                    </Select>
                </FormControl >
                <FormControl id='city' isRequired>
                    <FormLabel >City</FormLabel>
                    <Input
                        placeholder='City'
                        _placeholder={{ color: 'gray.500' }}
                        type="text"
                    />
                </FormControl>
                <FormControl id='address' isRequired>
                    <FormLabel >Address</FormLabel>
                    <Input
                        placeholder='Address'
                        _placeholder={{ color: 'gray.500' }}
                        type="text"
                    />
                </FormControl>
                <FormControl id="email" isRequired>
                    <FormLabel>Email address</FormLabel>
                    <Input
                        placeholder="your-email@example.com"
                        _placeholder={{ color: 'gray.500' }}
                        type="email"
                    />
                </FormControl>
                <FormControl id="password" isRequired>
                    <FormLabel>Password</FormLabel>
                    <Input
                        placeholder="password"
                        _placeholder={{ color: 'gray.500' }}
                        type="password"
                    />
                </FormControl>
                <Stack spacing={6} direction={['column', 'row']}>
                    <Button
                        bg={'red.400'}
                        color={'white'}
                        w="full"
                        _hover={{
                            bg: 'red.500',
                        }}>
                        Cancel
                    </Button>
                    <Button
                        bg={'blue.400'}
                        color={'white'}
                        w="full"
                        _hover={{
                            bg: 'blue.500',
                        }}>
                        Submit
                    </Button>

                </Stack>
                <Stack>

                    <Button
                        w="full"
                        color={'black'}
                        bg={'gray.100'}
                        _hover={{ bg: 'gray.200' }}
                    >Edit</Button>

                </Stack>
            </Stack>
        </Flex>
    );
}