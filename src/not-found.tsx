import { Link } from 'react-router-dom';

export const NotFound = () => {
    return (
        <div className="container flex min-h-screen items-center justify-center">
            <div className="relative flex items-center justify-center">
                <button className="absolute bottom-10 z-40">
                    <Link to="/">Go Home</Link>
                </button>
            </div>
        </div>
    );
};
