import { Box, Button, Card, Center, Grid, Group, Image, Stack, Text } from "@mantine/core";
import { Link } from "react-router-dom";

export function Profile() {

  return (
    <Box my="xl" style={{ position: "relative" }}>
      <Image
        src="/profile-background.webp"
        style={{ position: "absolute", zIndex: 0, height: "100%", opacity: "25%" }}
      />
      <Center mih="50svh" py="xl">
        <Stack>
          <Grid gutter="xl">
            <Grid.Col span={{ xs: 12, md: 4 }} style={{ zIndex: 0, display: "flex", "justifyContent": "center" }}>
              <Image src="/user.webp" fit="contain" w="unset" style={{ borderRadius: "50%" }} />
            </Grid.Col>
            <Grid.Col span={{ xs: 12, md: 8 }}>
              <Card bg="#AD8BF7" shadow="md" h="100%">
                <Stack h="100%" justify="center">
                  <Text ta="center" fz="xl" fw="bold" c="white">
                    Lucía Juárez
                  </Text>
                  <Text ta="center" fz="lg" c="white">
                    luchi_juarez@gmail.com
                  </Text>
                  <Text ta="center" fz="lg" c="white">
                    Plan Premium
                  </Text>
                  <Text ta="center" fz="lg" c="white">
                    1 hora disponible
                  </Text>
                </Stack>
              </Card>
            </Grid.Col>
            <Grid.Col>
              <Group grow>
                <Button component={Link} to="/my-games" color="violet.9" size="xl" radius="xl">
                  Mis Partidas
                </Button>
                <Button component={Link} to="/instructions" color="cyan" size="xl" radius="xl">
                  Nueva Partida
                </Button>
                <Button component={Link} to="/subscriptions" color="violet.9" size="xl" radius="xl">
                  Modificar Plan
                </Button>
              </Group>
            </Grid.Col>
          </Grid>
        </Stack>
      </Center>
    </Box>
  )
}
