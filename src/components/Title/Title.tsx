import React, {PropsWithChildren} from "react";

const Title: React.FC<PropsWithChildren> = ({children}) => {
    return <h1 className="text-2xl font-bold underline">{children}</h1>
}

export default Title
