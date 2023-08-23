import Link from 'next/link';

import Header from './components/Header';
const Home = () => {
    return (
        <main>
            <Header />
            <h1>Home Page</h1>
            <Link href="/login">
                <span>Login</span>
            </Link>
        </main>
    );
};

export default Home;
