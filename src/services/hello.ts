import axios from "axios";
import { BACKEND_URL } from "../constants";

export async function hello() {
  const { data } = await axios.get<ServerMessage>(`${BACKEND_URL}/api/hello`)
  return data
}
