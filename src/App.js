import React from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import Preloader from "./components/common/Preloader";

//В таком случае темная тема рендерится без мерцания
//import './scss/theme-dark.scss';

function App({theme, setTheme, importTheme}) {
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        importTheme().then(() => setIsLoading(false));
    })

    const onChangeTheme = () => {
        if (theme === "light") setTheme("dark");
        if (theme === "dark") setTheme("light");

        document.location.reload();
    }

    if (isLoading) return <Preloader/>

    return (
        <div className="app">
            <Header onChangeTheme={onChangeTheme}/>
        </div>
    );
}

export default App;
