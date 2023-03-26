import { Toaster } from "react-hot-toast";
import Navigation from "../navigation";


const Layout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col">
            <Toaster 
                position="top-center" 
                reverseOrder={false} 
                gutter={8} 
            />
            <Navigation />
            {children}
        </div>
    )
}

export default Layout;
