import axios from "axios"
import { GOOGLE_CSE_TOKEN, GOOGLE_CX } from "../../config"

export default async function handler(req, res) {
  try {
    const num = req.query?.num || 10
    const url = `https://www.googleapis.com/customsearch/v1`
    const query = `${url}?key=${GOOGLE_CSE_TOKEN}&q=${req.query.q}&cx=${GOOGLE_CX}&num=${num}`
    const { data } = await axios.get(query)
    res.status(200).json(data)
  } catch (error) {
    console.error("Error fetching data:", error)
    res.status(500).json({ error: "Internal Server Error" })
  }
}
