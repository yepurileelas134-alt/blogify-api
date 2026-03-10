import useAuth from "../hooks/useAuth";

function Dashboard() {

  const { user } = useAuth();

  return (

    <div>

      <h1>Dashboard</h1>

      <h3>Welcome {user?.name}</h3>

    </div>

  );
}

export default Dashboard;