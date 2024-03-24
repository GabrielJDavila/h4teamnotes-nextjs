"use client"

import { useSearchParams, usePathname, useRouter } from "next/navigation"
import { useReducer } from "react"

export default function Search({placeholder}: {placeholder: string}) {
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const { replace } = useRouter()

    function handleSearch(term: string) {
        console.log(term)
        const params = new URLSearchParams(searchParams)
        if(term) {
            params.set("query", term)
        } else {
            params.delete("query")
        }
        replace(`${pathname}?${params.toString()}`)
    }

    return (
        <div>
            <label>
                Search
            </label>
            <input
                placeholder={placeholder}
                onChange={(e) => {
                    handleSearch(e.target.value)
                }}
                defaultValue={searchParams.get("query")?.toString()}
            />
        </div>
    )
}