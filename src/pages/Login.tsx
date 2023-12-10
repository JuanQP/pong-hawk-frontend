import { Anchor, Box, Button, Center, PasswordInput, Stack, TextInput, Title } from "@mantine/core";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Login() {
  const navigate = useNavigate()
  const [loggingIn, setLoggingIn] = useState(false)

  function handleLoginClick() {
    setLoggingIn(true)
    setTimeout(() => {
      navigate("/profile")
    }, 1000)
  }

  return (
    <Box p="xs" w={"100vw"} h="100vh" bg="rgb(6,21,81)">
      <Center mt="15vh">
        <Stack gap="lg" miw="20vw">
          <Title c="white" ta="center">Iniciar sesión</Title>
          <TextInput placeholder="Nombre de usuario" />
          <PasswordInput placeholder="Contraseña" />
          <Anchor c="white" underline="always" ta="center" fz="sm">
            Olvidé mi contraseña
          </Anchor>
          <Button
            disabled={loggingIn}
            loading={loggingIn}
            color="violet.5"
            onClick={handleLoginClick}
          >
            Ingresar
          </Button>
        </Stack>
      </Center>
    </Box>
  )
}
