const themeLocalStorage = {
    setTheme: (theme) => {
        localStorage.setItem("theme", theme);
    },
    getTheme: function () {
        localStorage.getItem("theme")
            ? localStorage.getItem("theme")
            : this.setTheme("light");

        return localStorage.getItem("theme")
    }
}


export default themeLocalStorage;