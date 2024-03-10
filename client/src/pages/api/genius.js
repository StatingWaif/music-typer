import axios from "axios"

const token = "Bearer " + process.env.GENIUS_TOKEN

export default async function handler(req, res) {
  if (req.query.url.includes("api.genius.com")) {
    try {
      const response = await fetch(req.query.url, {
        headers: {
          Authorization: token,
        },
      })
      const data = await response.json()
      res.status(200).json({ data })
    } catch (error) {
      console.error("Error fetching data:", error)
      res.status(500).json({ error: "Internal Server Error" })
    }
  } else {
    try {
      const { data } = await axios.get(req.query.url)
      res.status(200).json(data)
    } catch (error) {
      console.error("Error fetching data:", error)
      res.status(500).json({ error: "Internal Server Error" })
    }
  }
}
