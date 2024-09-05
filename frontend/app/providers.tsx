"use client";

import { useEffect, useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";

const Providers = ({ children }: { children: React.ReactNode }) => {
  const [mounted, setMounted] = useState<boolean>(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return <ChakraProvider>{mounted && children}</ChakraProvider>;
};

export default Providers;
