import formatDate from "./formatDate"
import getLyrics from "./getLyrics"

export default async function choiceMusicData(songQuery, signal) {
  // try {
  const data = await fetch(
    `/api/genius?url=https://api.genius.com/search?q=${songQuery}`,
    { signal }
  ).then((data) => data.json())
  const hits = data.data.response.hits.slice(0, 10)

  const songs = await Promise.all(
    hits.map(async (hit) => {
      const data = hit.result
      const thumbnail = data.song_art_image_thumbnail_url
      const name = data.full_title
      const id = data.id
      const date = data.release_date_components
      const pageViews = data.stats.pageviews
      //
      const rawLyrics = await getLyrics(data.url)
      const lyrics = rawLyrics.split("\n").filter((line) => line.trim())
      //

      // return { id: id, name: name, thumbnail: thumbnail, lyrics: lyrics }
      return { id, name, thumbnail, lyrics, date, pageViews }
    })
  )
  return songs
}
