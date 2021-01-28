import './App.scss';

function App({theme}) {
    if (theme === "dark") import("./scss/dark-theme.scss")
    if (theme === "light") import("./scss/light-theme.scss")

    return (
        <div>
            <header>
                <h1>Weather application</h1>
            </header>
        </div>
    );
}

export default App;
