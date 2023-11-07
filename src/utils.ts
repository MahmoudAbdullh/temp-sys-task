export const getRemainingDate = (timeStamp:number)=>{
    const now = new Date().getTime();
    const upcomming = new Date(timeStamp*1000).getTime();
    const timeleft = upcomming - now;

    const days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    return `${days}d: ${hours}h: ${minutes}m`
}