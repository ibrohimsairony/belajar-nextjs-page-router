import { useSession } from "next-auth/react";

export default function ProfilPage() {
  const { data }: any = useSession();
  return (
    <div>
      <h1>Profil</h1>
      <h2>{data?.user.fullName}</h2>
    </div>
  );
}
