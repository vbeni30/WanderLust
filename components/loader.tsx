import { Loader2 } from "lucide-react"

export function Loader() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-black">
      <Loader2 className="h-12 w-12 animate-spin text-white" />
    </div>
  )
}

