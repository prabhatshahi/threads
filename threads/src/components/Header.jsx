import { Flex, Image } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react"; // Importing useColorMode hook

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode(); // Using the useColorMode hook to get the current color mode

  return (
    <Flex justifyContent={"center"} mt={6} mb={12}>
      <Image
        cursor={"pointer"}
        alt="logo"
        w={6}
        src={colorMode === "dark" ? "/light-logo.svg" : "/dark-logo.svg"} // Assuming you have both light and dark versions of the logo
        onClick={toggleColorMode} // Clicking the logo will toggle the color mode
      />
    </Flex>
  );
};

export default Header;
