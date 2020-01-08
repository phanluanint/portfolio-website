import {NextPage} from 'next'
import '../styles/index.css'
import Button from "../components/Button";

const Home: NextPage<{ userAgent: string }> = ({userAgent}) => (
    <body className="bg-blue-500 p-12">
        <div className="p-4 shadow rounded bg-white">
            <h1 className="text-purple-500 leading-normal">Next.js</h1>
            <p className="text-gray-500">with Tailwind CSS</p>
            <Button onClick={(e) => alert('asd')}>
                Child
            </Button>
        </div>
    </body>
);
Home.getInitialProps = async ({req}) => {
    const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
    return {userAgent};
};

export default Home;