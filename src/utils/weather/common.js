export const getIconUrl = (iconCode, zoom) => {
    return `http://openweathermap.org/img/wn/${iconCode}@${zoom}.png`
}

const getFormattedDateOrMonth = (dayOrMonth) => {
    return dayOrMonth.length === 1
        ? '0' + dayOrMonth
        : dayOrMonth
}
export const getFormattedMonth = (dateMonth) => {
    return getFormattedDateOrMonth(String(dateMonth + 1));
}
export const getFormattedDate = (date) => {
    return getFormattedDateOrMonth(String(date));
}