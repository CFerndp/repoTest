import React, {PropsWithChildren} from "react";
import Header from "./partials/Header/Header.tsx";
import Footer from "./partials/Footer/Footer.tsx";


const PageTemplate: React.FC<PropsWithChildren> = ({children}) => {
    return <>
        <Header />
            <div className="container m-6">
                {children}
            </div>
        <Footer />
    </>
}

export default PageTemplate
