import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
            <Link
                style={{ backgroundColor: match ? "rgba(32, 117, 255, 0.214)" : "" }}
                to={to}
                {...props}
            >
                {children}
            </Link>
        </div>
    );
}