"use client";

import { ReactNode } from "react";
import {
  Alert,
  AlertProps,
  AlertTitle,
  Flex,
  useToast,
} from "@chakra-ui/react";

interface IBaseToast {
  status: AlertProps["status"];
  title: ReactNode;
  alertProp?: AlertProps;
}

interface IToastProps extends IBaseToast {
  onClose: () => void;
  onCloseCallback?(): void;
}

const Toast = ({ title, status }: IToastProps) => {
  console.log("toast render");

  return (
    <Alert
      status={status}
      rounded="8px"
      maxWidth="none"
      alignItems="center"
      justifyContent="space-between"
    >
      <Flex direction="row">
        <AlertTitle ml={1} mr={2}>
          {title}
        </AlertTitle>
      </Flex>
    </Alert>
  );
};

interface IToastOption extends IBaseToast {
  duration?: number;
  buttonText?: string;
  onCloseCallback?(): void;
}

export const useCustomToast = () => {
  console.log("useWfToast");
  const toast = useToast();

  return ({ duration = 3000, ...toastProps }: IToastOption) => {
    console.log("useCustomToast function");
    const ref = toast({
      position: "top",
      duration,
      render: () => (
        <Toast {...toastProps} onClose={() => ref && toast.close(ref)} />
      ),
    });

    return ref;
  };
};
