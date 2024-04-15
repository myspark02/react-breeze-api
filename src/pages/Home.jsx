import useAuthContext from "../context/AuthContext";

const Home = () => {
  const { user } = useAuthContext();

  return <div className="mx-auto mt-12 max-w-7xl">{user?.name}</div>;
};

export default Home;
