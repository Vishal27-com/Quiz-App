import {
  Avatar,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";
import Logo from "../Logo/Logo";
const Navbar = () => {
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
          <Avatar name="Vishal" />
        </MenuButton>
        <MenuList>
          <MenuItem>Profile</MenuItem>
          <MenuItem>Logout</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default Navbar;
