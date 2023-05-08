"use client";
import { useCustomToast } from "./hook/useCustomToast";
import styles from "./page.module.css";
import { Button, Text, VStack, useToast } from "@chakra-ui/react";

export default function Home() {
  const toast = useToast();
  const customToast = useCustomToast();

  const handleClick = () => {
    toast({
      title: "Title of the toast",
      description: "Description of the toast.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

  const handleCustomToastClick = () => {
    customToast({ duration: 9000, title: "Custom Toast", status: "success" });
  };

  return (
    <main className={styles.main}>
      <VStack>
        <Text>Chakra UI - storybook toast integration test</Text>
        <Button onClick={handleClick}>Show standard toast</Button>
        <Button onClick={handleCustomToastClick}>Show custom toast</Button>
      </VStack>
    </main>
  );
}
