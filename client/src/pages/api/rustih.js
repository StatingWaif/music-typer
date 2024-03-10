import axios from "axios"

export default async function handler(req, res) {
  try {
    const num = req.query?.num || 10
    const url = `https://www.googleapis.com/customsearch/v1`
    const query = `${url}?key=${process.env.GOOGLE_CSE_TOKEN}&q=${req.query.q}&cx=${process.env.GOOGLE_CX}&num=${num}`
    const { data } = await axios.get(query)
    res.status(200).json(data)
  } catch (error) {
    console.error("Error fetching data:", error)
    res.status(500).json({ error: "Internal Server Error" })
  }
}
