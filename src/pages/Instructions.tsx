import { Box, Button, Center, Image, Stack, Text, Title } from "@mantine/core";
import { IconVideo } from "@tabler/icons-react";
import { Link } from "react-router-dom";

export function Instructions() {
  return (
    <Box my="xl" mih="400px" style={{ position: "relative" }}>
      <Image
        src="/instructions-background.webp"
        style={{ position: "absolute", zIndex: 0, height: "100%", opacity: "25%" }}
      />
      <Center mih="50svh" py="xl">
        <Stack gap="xl" style={{ zIndex: 0 }}>
          <Title c="white" ta="center" style={{ zIndex: "inherit" }}>
            Grabar nueva partida
          </Title>
          <Text c="white" style={{ zIndex: "inherit" }}>
            Recordá que la cámara tiene que estar en una posición fija y
            debe poder visualizarse correctamente la mesa y los jugadores.
          </Text>
          <Text c="white" style={{ zIndex: "inherit" }}>
            Para más instrucciones sobre cómo obtener la mejor toma
            posible consultá el apartado de instrucciones.
          </Text>
          <Center>
            <Button
              component={Link}
              to="/record"
              size="xl"
              color="cyan"
              radius="xl"
              leftSection={<IconVideo />}
            >
              Empezar a grabar
            </Button>
          </Center>
        </Stack>
      </Center>
    </Box>
  )
}
