import { Button, Card, Container, Flex, List, SimpleGrid, Stack, Title } from "@mantine/core";
import { IconShoppingCart } from "@tabler/icons-react";

export function Subscriptions() {
  return (
    <Container my="xl">
      <Title c="white" ta="center" mb="xl">Modelos</Title>
      <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
        <Card bg="#AD8BF7" shadow="md" h="100%" c="white">
          <Stack gap="md">
            <Title ta="center">Beta</Title>
            <List fw="bold">
              <List.Item>Visualización de la información</List.Item>
              <List.Item>Mapa de calor</List.Item>
              <List.Item>1 hora de análisis</List.Item>
              <List.Item>Soporte 24/7</List.Item>
            </List>
            <Title order={2} ta="center">USD 1500</Title>
            <Button color="violet">
              Contratar
            </Button>
          </Stack>
        </Card>
        <Card bg="#AD8BF7" shadow="md" h="100%" c="white">
          <Stack gap="md">
            <Title ta="center">Premium</Title>
            <List fw="bold">
              <List.Item>Visualización de la información</List.Item>
              <List.Item>Mapa de calor</List.Item>
              <List.Item>1 hora de análisis</List.Item>
              <List.Item>Soporte 24/7</List.Item>
            </List>
            <Title order={2} ta="center">USD 1500</Title>
            <Button disabled color="violet">
              Contratar
            </Button>
          </Stack>
        </Card>
      </SimpleGrid>
      <Flex justify="center">
        <Card mt="xl" bg="#AD8BF7" shadow="md" h="100%" c="white">
          <Stack gap="md">
            <Title ta="center">Horas</Title>
            <List fw="bold">
              <List.Item>Adquirir 1 hora extra de análisis</List.Item>
            </List>
            <Title order={2} ta="center">USD 500</Title>
            <Button leftSection={<IconShoppingCart />} color="violet">
              Adquirir
            </Button>
          </Stack>
        </Card>
      </Flex>
    </Container>
  )
}
