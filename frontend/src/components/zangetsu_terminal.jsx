import { useState } from "react"
import executeCode from "./api"

function ZangetsuTerminal({ lang, value }) {
    const [output, setOutput] = useState("")
    const [isloading, setIsLoading] = useState(false)
    const runcode = async () => {
        setIsLoading(true)
        const { run: result } = await executeCode(lang, value)
        setOutput(result.output)
        setIsLoading(false)
    }
    return (
        <div className="w-full flex flex-col gap-8  h-screen ">
            <div className="w-full flex flex-row justify-between">
                <p className="text-xl">Output:</p>
                <button
                    onClick={runcode}
                    className="px-8 py-1 text-green-600 hover:bg-green-600 hover:text-black border border-green-600 w-fit rounded-lg">
                    {isloading ? "Running.." : "Run"}
                </button>
            </div>
            <div className="w-full h-[75vh] p-8 border border-zinc-700 rounded-lg bg-zinc-900 text-white">
                <p>{output ? output : 'Click "Run" to see the output here'}</p>
            </div>

        </div>
    )
}

export default ZangetsuTerminal