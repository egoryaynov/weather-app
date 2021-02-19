export const getIconUrl = (iconCode, zoom) => {
    return `http://openweathermap.org/img/wn/${iconCode}@${zoom}.png`
}

export const getFormattedMonth = (dateMonth) => {
    const monthNotFormatted = String(dateMonth + 1);
    return monthNotFormatted.length === 1
        ? '0' + monthNotFormatted
        : monthNotFormatted
}