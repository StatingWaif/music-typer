import getLyrics from "./getLyrics"

export default async function gameData(songId, signal) {
  const data = await fetch(
    `/api/genius?url=https://api.genius.com/songs/${songId}`,
    { signal }
  ).then((data) => data.json())
  const result = data.data.response.song
  const img = result.song_art_image_url
  const name = result.full_title
  const rawLyrics = await getLyrics(result.url)
  const lyrics = rawLyrics.split("\n").filter((line) => line.trim())
  return { img, name, lyrics }

  // const data = await fetch(
  //   `/api/genius?url=https://api.genius.com/search?q=${songQuery}`,
  //   { signal }
  // ).then((data) => data.json())
  // const hits = data.data.response.hits.slice(0, 10)

  // const songs = hits.map((hit) => {
  //   const data = hit.result
  //   const thumbnail = data.song_art_image_thumbnail_url
  //   const name = data.full_title
  //   const id = data.id
  // })

  // return { id: id, name: name, thumbnail: thumbnail }
}
