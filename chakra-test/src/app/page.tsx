"use client";
import styles from "./page.module.css";
import { Box, Button, Text, useToast } from "@chakra-ui/react";

export default function Home() {
  const toast = useToast();
  const handleClick = () => {
    toast({
      title: "Title of the toast",
      description: "Description of the toast.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

  return (
    <main className={styles.main}>
      <Box>
        <Text>Chakra UI test</Text>
        <Button onClick={handleClick}>Click me</Button>
      </Box>
    </main>
  );
}
