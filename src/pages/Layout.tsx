import { Anchor, Box, Button, Flex, Image, Text } from "@mantine/core";
import { Link, Outlet } from "react-router-dom";

export function Layout() {
  return (
    <Box pt="md" w={"100vw"} mih="100vh" bg="rgb(6,21,81)">
      <Flex justify="space-between" px="md">
        <Anchor component={Link} to="/profile" underline="never">
          <Flex align="center" gap="xs">
            <Image src="/pong-hawk-brand.webp" style={{ width: "3rem" }} />
            <Text c="white" fw="bold" fz="xl">
              Pong Hawk
            </Text>
          </Flex>
        </Anchor>
        <Button component={Link} to="/profile" color="violet.9">
          Perfil
        </Button>
      </Flex>
      <Outlet />
    </Box>
  )
}
