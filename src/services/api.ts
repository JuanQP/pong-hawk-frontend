import axios from "axios";
import { BACKEND_URL } from "../constants";

type UploadVideoData = {
  video: File;
}

export async function getGames() {
  const { data } = await axios.get<Paginated<Game>>(`${BACKEND_URL}/games/`)
  return data;
}

export async function getGame(id: number) {
  const { data } = await axios.get<Game>(`${BACKEND_URL}/games/${id}/`)
  return data;
}

export async function createGame(values: UploadVideoData) {
  const formData = new FormData()
  formData.append("name", "Nueva partida")
  formData.append("video", values.video)
  const { data } = await axios.post<Game>(`${BACKEND_URL}/games/`, formData)
  return data;
}
