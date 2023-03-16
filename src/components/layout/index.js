import Navigation from "../navigation";


const Layout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navigation />
            {children}
        </div>
    )
}

export default Layout;
