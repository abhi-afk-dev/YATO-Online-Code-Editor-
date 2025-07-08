import axios from "axios"
import { Language_Versions } from "../constants";

const API = axios.create({
    baseURL: "https://emkc.org/api/v2/piston"
})
async function executeCode(lang, value) {
    const response = await API.post("/execute", {
        "language": lang,
        "version": Language_Versions[lang],
        "files": [
            {
                "content": value,
            }
        ],
    })
    return response.data
}

export default executeCode;