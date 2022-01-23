import React from 'react';
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import SideBar from './Pages/sidebar';
import Signup from "./Pages/home";
// import Login from './login';
import AddStudents from "./Pages/addStudents";
import StudentDataTable from './Pages/studentTable';
import AddCourse from "./Pages/addCourse";
import UserProfileEdit from './Pages/profile';
import './App.css';
import { Box , Flex, Link } from "@chakra-ui/react";
import { PlusSquareIcon, EditIcon, AttachmentIcon} from "@chakra-ui/icons";

function App() {
  return (
    <Flex id="mainPage" h="100vh" w="100vw" justifyContent="space-between">
      <ChakraProvider>
        <BrowserRouter>
          <SideBar />
          <Flex w="85vw">
          <Routes>
            <Route path="/" element={<Signup />} />
            {/* <Route path="/login" element={<Login />} /> */}
            <Route path="addStudents" element={<AddStudents />} />
            <Route path="studentTable" element={<StudentDataTable />} />
            <Route path="addCourse" element={<AddCourse />} />
            <Route path="profile" element={<UserProfileEdit />} />
          </Routes>
          </Flex>
        </BrowserRouter>
      </ChakraProvider>
    </Flex>
  );
}
// export const Home = props => {
//   return (
//     <h1>Home</h1>
//   )
// }
export const SideBar = props => {
  return(
  <Box id="sidebar" h="100vh" w="15%" border="2px solid black"  alignItems="center">
      <h1 mb="30px">Schoollog</h1>
      <Flex className="icons">
        {/* <Box><HomeIcon/></Box> */}
        <Flex><Link to="/" textDecoration="none">Home</Link></Flex>
      </Flex>
      <Flex className="icons">
        <Box><PlusSquareIcon/></Box>
        <Link to="/addStudents" textDecoration="none">Add Students</Link>
      </Flex>
      <Flex className="icons">
        <Box><AttachmentIcon/></Box>
        <Box><Link to="/studentTable" textDecoration="none">Students List</Link></Box>
      </Flex>
      <Flex className="icons">
        <Box><EditIcon/></Box>
        <Box><Link to="/addCourse" textDecoration="none">Add Course</Link></Box>
      </Flex>
      <Flex className="icons">
        <Box><AttachmentIcon/></Box>
        <Box><Link to="#" textDecoration="none">Course List</Link></Box>
      </Flex>
      <Flex className="icons">
        <Box><AttachmentIcon/></Box>
        <Box><Link to="#" textDecoration="none">Logout</Link></Box>
      </Flex>
    </Box>
  );
}

export default App;
