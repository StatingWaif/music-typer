import { $host } from "."

export const getPopular = async () => {
  return $host.get("api/text/popular")
}
