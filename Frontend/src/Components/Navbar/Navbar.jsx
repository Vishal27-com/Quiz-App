import {
  Avatar,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import Logo from "../Logo/Logo";
const Navbar = () => {
  const {isAuth,setIsAuth}=useContext(AuthContext);
  const navigate=useNavigate();
  return (
    <Flex
      justify="space-between"
      align="center"
      p="0 20px"
      h="60px"
      boxShadow="0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)"
    >
      <Logo />
      <Menu>
        <MenuButton as={Button} h="50px" w="50px" p="0" borderRadius="50%">
          <Avatar name={isAuth?.user?.name} />
        </MenuButton>
        <MenuList>
          <MenuItem onClick={()=>navigate("/profile")}>Profile</MenuItem>
          <MenuItem onClick={()=>navigate("/leaderboard")}>LeaderBoard</MenuItem>
          <MenuItem onClick={()=>setIsAuth({isAuth:false,user:{}})}>Logout</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default Navbar;
