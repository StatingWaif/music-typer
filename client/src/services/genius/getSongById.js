import getSongLyricsByUrl from "./getSongLyricsByUrl"
export default async function getSongById(songId, signal) {
  const data = await fetch(
    `/api/genius?url=https://api.genius.com/songs/${songId}`,
    { signal }
  ).then((data) => data.json())
  const result = data.data.response.song

  const img = result.song_art_image_url
  const name = result.full_title
  const rawLyrics = await getSongLyricsByUrl(result.url)
  const lyrics = rawLyrics.split("\n").filter((line) => line.trim())
  const id = songId
  return { id, img, name, lyrics }
}
