import AuthenticatedHome from "./AuthenticatedHome";
import UnauthenticatedHome from "./UnauthenticatedHome";

const Home = ({}) => {
    const signedIn = true;
    return signedIn ? <AuthenticatedHome /> : <UnauthenticatedHome />;
};

export default Home;
