export let postgresDatetime = () : String => {
    let dateToStringConversion = new Date()
        .toISOString()
        .slice(0, 19)
        .replace('T', ' ');
    return dateToStringConversion;
}
