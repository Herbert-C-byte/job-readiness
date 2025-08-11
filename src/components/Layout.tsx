import type { PropsWithChildren } from "react"

export default function Layout({children}: PropsWithChildren) {
    return(
        <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
            {children}
        </div>
    )
}