import React, { useEffect, useState } from "react";

import Layout from "../components/layout"
import SEO from "../components/seo"
import TextBlock from "../components/text-block";

const Goto = ({location}) => {
    const [urlToRedirect, setUrlToRedirect] = useState(null);
    const { search, host } = location;
    const [count, setCount] = useState(5);

    useEffect(() => {
        const searchSplitted = search.split('?url=');
        if(searchSplitted.length > 1) {
            setUrlToRedirect(searchSplitted[1]);
        } else {
            window.location = '/';
        }
        const timeout = setTimeout(() => {
            const newCount = count - 1;
            if(newCount === 0) {
                window.location = urlToRedirect;
            } else {
                setCount(newCount);
            }
        }, 1000);
        return () => clearTimeout(timeout);
    },[count]);

    const text = `La información que estás solicitando se encuentra fuera de este sitio. Vas a salir de ${host} para ver lo que estás buscando.
    Recuerda que siempre puedes volver a ${host} para seguir viendo más información.`;

    return (
        <Layout>
            <SEO title="redirecting to" />
            <div className="mb-12">
                <TextBlock heading={`Estás siendo redireccionado fuera del sitio`} text={text} headingSize={1} />
                <p className="px-4 text-xl text-textColor-500 ">Redireccionado en {count}</p>
            </div>
        </Layout>
    )
}

export default Goto
