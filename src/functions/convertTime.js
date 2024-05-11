export const convertTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time - hours*3600) / 60);
    const seconds = (time - hours*3600 - minutes*60);
    return `${hours}h ${minutes}m ${seconds}s`;
}