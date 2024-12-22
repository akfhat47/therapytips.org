import { VIDEOS } from "../data/data.js";
import { createVideoCardTemplate } from "./videoCard.js";
const createVideoTemplate = () => `
${VIDEOS.map((video)=>createVideoCardTemplate(video))}
`
export default createVideoTemplate;