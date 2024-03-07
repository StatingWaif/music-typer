import axios from "axios"

export default async function handler(req, res) {
  try {
    const { data } = await axios.get(req.query.url)
    res.status(200).json(data)
  } catch (error) {
    console.error("Error fetching data:", error)
    res.status(500).json({ error: "Internal Server Error" })
  }
}
