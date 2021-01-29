import React from 'react';
import './App.scss';
import Header from "./components/Header/Header";

// В таком случае темная тема рендерится без мерцания
//import './scss/theme-dark.scss';

function App({theme, setTheme}) {
    // Мерцание происходит из за динамического импорта,
    // нужно сделать чтобы компонента изначально рендереилась со стилями
    if (theme === "dark") import("./scss/theme-dark.scss");
    if (theme === "light") import("./scss/theme-light.scss");

    const onChangeTheme = () => {
        if (theme === "light") setTheme("dark");
        if (theme === "dark") setTheme("light");

        document.location.reload();
    }

    return (
        <div className="app">
            <Header onChangeTheme={onChangeTheme}/>
        </div>
    );
}

export default App;
