import React from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import Preloader from "./components/common/Preloader";
import Main from "./components/Main/Main";

function App({theme, setTheme, importTheme, getWeatherByCity}) {
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        importTheme()
            .then(() => setIsLoading(false));
    }, [importTheme])

    const onChangeTheme = () => {
        if (theme === "light") setTheme("dark");
        if (theme === "dark") setTheme("light");

        document.location.reload();
    }

    if (isLoading) return <Preloader/>

    return (
        <div className="app">
            <div className="container">
                <div className="app-inner">
                    <Header theme={theme} onChangeTheme={onChangeTheme}/>
                    <Main getWeatherByCity={getWeatherByCity}/>
                </div>
            </div>
        </div>
    );
}

export default App;
