import React from "react";
import { Container, Text } from "@chakra-ui/react";
import Animation from "../../components/animation/Animation";

export default function Header() {
  return (
    <Container
      py="40"
      borderRadius="md"
      maxW="container.xl"
      display="flex"
      flexDirection="column"
      alignItems="center"
      textAlign="center"
    >
      <Animation>
        <Text fontSize="lg" fontWeight="600">
          Hola, bienvenido a mi porfolio.
        </Text>
        <Text
          fontSize="7xl"
          fontWeight="700"
          css={{
            backgroundColor: "#fff",
            color: "#3792e4",
            animation: "change-color 3s infinite",
          }}
        >
          Juan Urani
        </Text>
        <Text
          fontSize="7xl"
          fontWeight="700"
          css={{
            backgroundColor: "#fff",
            color: "#3792e4",
            animation: "change-color 3s infinite",
          }}
        >
          Frontend Developer
        </Text>
        <Text w="100%" textAlign="right" fontWeight="700">
          minimalista.
        </Text>
      </Animation>
    </Container>
  );
}
