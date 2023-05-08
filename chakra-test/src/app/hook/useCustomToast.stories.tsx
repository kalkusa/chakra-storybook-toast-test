import { AlertProps, Button, VStack, useToast } from "@chakra-ui/react";
import { Meta, StoryFn } from "@storybook/react";
import { useCustomToast } from "./useCustomToast";

const Template: StoryFn<AlertProps> = () => {
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
    <VStack>
      <Button onClick={handleClick}>Show standard toast</Button>
      <Button onClick={handleCustomToastClick}>Show custom toast</Button>
    </VStack>
  );
};

export const storyToast = Template.bind({});
storyToast.storyName = "Toast";

export default {
  title: "Components/Feedback",
} as Meta;
