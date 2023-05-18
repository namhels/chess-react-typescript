import { FaMoon, FaSun } from "react-icons/fa";
import { IconButton, useColorMode } from "@chakra-ui/react";

const ToggleTheme = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <IconButton
      // p={2}
      variant="outline"
      colorScheme="teal"
      aria-label="toggle theme"
      // color="white"
      fontSize="25px"
      onClick={toggleColorMode}
      icon={colorMode === "dark" ? <FaSun /> : <FaMoon />}
    />
  );
};

export default ToggleTheme;
