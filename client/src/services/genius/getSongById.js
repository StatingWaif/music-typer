import usedLanguages from "../../utils/usedLanguages"
import getSongLyricsByUrl from "./getSongLyricsByUrl"
export default async function getSongById(songId, signal) {
  const data = await fetch(
    `/api/genius?url=https://api.genius.com/songs/${songId}`,
    { signal }
  ).then((data) => data.json())

  const result = data.data.response.song

  const img = result.song_art_image_url
  const thumbnail = result.song_art_image_thumbnail_url
  const name = result.full_title
  const rawLyrics = await getSongLyricsByUrl(result.url)
  const lyrics = rawLyrics.split("\n").filter((line) => line.trim())
  const gameId = songId
  const pageViews = result.stats.pageviews
  let date = result.release_date.split("-")
  date = `${date[2]}.${date[1]}.${date[0]}`
  const isPoem = false
  const additionalInfo = { pageViews, date }
  const languages = usedLanguages(lyrics)

  return {
    gameId,
    img,
    thumbnail,
    name,
    lyrics,
    isPoem,
    languages,
    additionalInfo,
  }
}
