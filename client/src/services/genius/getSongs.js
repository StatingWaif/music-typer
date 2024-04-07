import getSongLyricsByUrl from "./getSongLyricsByUrl"
export default async function getSongs(songQuery, signal) {
  const data = await fetch(
    `/api/genius?url=https://api.genius.com/search?q=${songQuery}`,
    { signal }
  ).then((data) => data.json())
  const hits = data.data.response.hits.slice(0, 10)

  const songs = await Promise.all(
    hits.map(async (hit) => {
      const data = hit.result

      const thumbnail = data.song_art_image_thumbnail_url
      const img = data.song_art_image_url
      const name = data.full_title
      const gameId = data.id
      const date = data.release_date_components
      const pageViews = data.stats.pageviews
      const rawLyrics = (await getSongLyricsByUrl(data.url)) || ""
      const lyrics = rawLyrics.split("\n").filter((line) => line.trim())
      const isPoem = false
      const additionalInfo = { pageViews, date }

      return { gameId, name, thumbnail, img, lyrics, isPoem, additionalInfo } //возвращать внутри объект с additional инфой(date, pageViews)
    })
  )
  return songs
}
