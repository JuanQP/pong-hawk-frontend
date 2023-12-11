// This is where your types should go
type ServerMessage = {
  message: string;
}

type Paginated<T> = {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

type VideoStatus = "FI" | "PE" | "PR"

type Game = {
  id: number;
  name: string;
  video: string;
  processed_video: string | null;
  heatmap: string | null;
  status: VideoStatus;
  strategy: "Izquierda" | "Derecha" | null;
}
