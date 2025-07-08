import { Editor } from "@monaco-editor/react"
import LanguageSelector from "./language_selector"
import ZangetsuTerminal from "./zangetsu_terminal"
import { useRef, useState } from "react"
import { Code_Snippets } from "../constants"

const ZangetsuEditor = () => {
    const [lang, setLang] = useState("javascript")
    const [value, setValue] = useState(Code_Snippets.javascript)

    return (
        <div className="flex flex-col lg:flex-row gap-10 w-full p-10">
            <div className="flex flex-col lg:w-1/2 w-full h-1/2 lg:h-full gap-6 text-white">
                <LanguageSelector lang={lang} setLang={setLang} setValue={setValue} />
                <Editor
                    height="75vh"
                    theme="vs-dark"
                    language={lang}
                    value={value}
                    onChange={(newValue) => setValue(newValue)}
                />
            </div>

            <div className="flex flex-col gap-10 lg:w-1/2 w-full text-white">
                <ZangetsuTerminal lang={lang} value={value} />
            </div>

        </div>
    )
}

export default ZangetsuEditor