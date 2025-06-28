import { useEffect, useState } from "react";
import { apiService } from "@/services/apiService";

type UserInfo = {
  email: string;
  name: string;
};

const DashboardPage = () => {
  const [user, setUser] = useState<UserInfo | null>(null);

  useEffect(() => {
    apiService.get<UserInfo>("/auth/me")
      .then(setUser)
      .catch((err) => {
        console.error("Error fetching user:", err);
        setUser(null);
      });
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      {user ? (
        <div>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Name:</strong> {user.name}</p>
        </div>
      ) : (
        <p>Loading or login failed.</p>
      )}
    </div>
  );
}

export default DashboardPage;
