import { auth } from "@/auth"

export default async function PerfilPage() {
  const session = await auth()
  return (
    <div>
      {JSON.stringify(session)}
    </div>
  )
}
