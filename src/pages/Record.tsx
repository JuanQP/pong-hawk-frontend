import { Box, Button, Container, FileButton, Flex, Group, Loader, Text, ThemeIcon } from "@mantine/core";
import { useMutation, useQuery } from "@tanstack/react-query";
import { createGame, getGame } from "../services/api";
import { Link } from "react-router-dom";
import { useState } from "react";
import { IconCheck, IconPlayerRecordFilled } from "@tabler/icons-react";

const statuses: Record<VideoStatus, string> = {
  PE: "En espera",
  PR: "Procesando",
  FI: "Finalizado"
}

export function Record() {

  const [createdGameId, setCreatedGameId] = useState<null | number>(null)
  const { data: newGame } = useQuery({
    queryKey: ["videos", createdGameId],
    queryFn: () => getGame(createdGameId!),
    refetchInterval: 10000,
    enabled: !!createdGameId
  })
  const gameMutation = useMutation({
    mutationFn: createGame
  })

  async function handleUploadVideo(video: File | null) {
    if (!video) return

    const newGame = await gameMutation.mutateAsync({ video })
    setCreatedGameId(newGame.id)
  }

  const isWaiting = gameMutation.isPending

  return (
    <Container mt="xl">
      {createdGameId ? (
        <Flex c="white" gap="md" align="center">
          {newGame?.status === "FI" ? (
            <ThemeIcon color="green" size="xl" variant="light"><IconCheck /></ThemeIcon>
          ) : (
            <Loader size="xl" />
          )}
          <Box>
            <Text>
              El video ya fue subido. En este momento su estado es
              <Text span fw="bold"> {statuses[newGame?.status ?? "PE"]}</Text>
            </Text>
            <Button
              disabled={newGame?.status !== "FI"}
              component={Link}
              to={`/games/${newGame?.id}`}
            >
              Ir a la partida
            </Button>
          </Box>
        </Flex>
      ) : (
        <Group justify="center">
          <FileButton onChange={handleUploadVideo} accept="video/*">
            {(props) => (
              <Button
                {...props}
                disabled={isWaiting}
                loading={isWaiting}
                leftSection={<IconPlayerRecordFilled />}
                size="xl"
              >
                Grabar o subir partida
              </Button>
            )}
          </FileButton>
        </Group>
      )}
    </Container>
  )
}
