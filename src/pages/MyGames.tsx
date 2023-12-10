import { Box, Card, Container, Image, Loader, SimpleGrid, Text, Title } from "@mantine/core";
import { getGames } from "../services/api";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

export function MyGames() {
  const { data: games, isLoading } = useQuery({
    queryKey: ["games"],
    queryFn: getGames
  })

  if (isLoading) return <Loader />

  return (
    <Box my="xl" mih="400px" style={{ position: "relative" }}>
      <Image
        src="/my-games-background.webp"
        style={{ position: "absolute", zIndex: 0, height: "100%", opacity: "25%" }}
      />
      <Container>
        <Title c="white" ta="center">Mis Partidas</Title>
        <SimpleGrid cols={{ base: 1, md: 2 }}>
          {games && games.results.length === 0 ? (
            <Text c="white">Todavía no tenés partidas cargadas</Text>
          ) : null}
          {games?.results.map(game => (
            <Card
              key={game.id}
              component={Link}
              to={`/games/${game.id}`}
              radius="md"
              style={{
                aspectRatio: "16/9",
                backgroundImage: `url(${game.heatmap})`,
                backgroundSize: "cover",
                objectFit: "cover",
              }}
              shadow="md"
            >
              <Title order={2} c="white" style={{ textShadow: "2px 2px 2px black" }}>
                {game.name}
              </Title>
            </Card>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}
