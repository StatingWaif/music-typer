import axios from "axios"

export default async function handler(req, res) {
  try {
    const url = req.query.url
    const { data } = await axios.get(url)
    res.status(200).json(data)
  } catch (error) {
    console.error("Error fetching data:", error)
    res.status(500).json({ error: "Internal Server Error" })
  }
}
