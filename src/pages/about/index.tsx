import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function AboutPage() {
  const [login, isLogin] = useState(false);
  const { push } = useRouter();
  useEffect(() => {
    if (!login) push("/auth/login");
  }, []);
  return (
    <div>
      <h1>About Page</h1>
    </div>
  );
}
