import { RouterLink, RouterView } from 'vue-router'
import "./index.css"

export const App = () => {
    return (
        <>
            <header>
                <div style={{width: "50", height: "50"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 261.76 226.69"><path d="M161.096.001l-30.225 52.351L100.647.001H-.005l130.877 226.688L261.749.001z" fill="#41b883"/><path d="M161.096.001l-30.225 52.351L100.647.001H52.346l78.526 136.01L209.398.001z" fill="#34495e"/></svg>
                </div>
            </header>

            <RouterView/>
        </>
    )
}