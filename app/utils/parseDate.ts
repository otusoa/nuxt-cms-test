export const parseDate = (date: string) => {
    if (!date) {
        return '日時: 不明';
    }
    const parsed = new Date(date);
    if (isNaN(parsed.getTime())) {
        return '不明';
    }
    const year = parsed.getFullYear();
    const month = parsed.getMonth() + 1;
    const day = parsed.getDate();
    return `${year}年${month}月${day}日`;
};