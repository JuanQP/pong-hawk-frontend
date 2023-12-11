import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"
import { getGame } from "../services/api"
import { Box, Container, Image, Stack, Tabs, Text, Title } from "@mantine/core"

export function GameDetail() {
  const { id } = useParams()
  const { data: game } = useQuery({
    queryKey: ["games", id],
    queryFn: () => getGame(Number(id))
  })

  if (game?.status !== "FI") {
    return (
      <Text c="white" ta="center">
        El video todavía no se procesó. Volvé más tarde!
      </Text>
    )
  }

  return (
    <Stack>
      <Box my="xl" style={{ position: "relative" }}>
        <Image
          src="/abstract-background.webp"
          style={{ position: "absolute", zIndex: 0, height: "100%", opacity: "50%" }}
        />
        <Container my="xl" c="white" style={{ zIndex: 0, position: "relative" }}>
          <Title>Tu Partida</Title>
          <Tabs defaultValue="video">
            <Tabs.List>
              <Tabs.Tab value="video">Video</Tabs.Tab>
              <Tabs.Tab value="heatmap">Mapa de calor</Tabs.Tab>
            </Tabs.List>
            <Tabs.Panel value="video">
              <video src={game.video} controls width="100%" />
            </Tabs.Panel>
            <Tabs.Panel value="heatmap">
              <video src={game.processed_video ?? undefined} controls width="100%" />
            </Tabs.Panel>
          </Tabs>
        </Container>
      </Box>
      <Container mb="xl">
        <Stack>
          <Title c="white">Análisis</Title>
          <Text c="white">Donde se disputó más el partido</Text>
          <Image src={game.heatmap} width="100%" />

          <Title c="white">Resumen</Title>
          <Text c="white">
            En base al video analizado sugerimos devolución hacia:
            <Text span fw="bold"> {game.strategy}</Text>
          </Text>
        </Stack>
      </Container>
    </Stack>
  )
}
