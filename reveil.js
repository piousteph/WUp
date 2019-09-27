let HOUR

updateTime = () => {
    HOUR = setInterval(() => {
        let newHour = new Date()
        let newTime = newHour.getHours() + ':' + newHour.getMinutes() + ':' + newHour.getSeconds()
        document.getElementById('hour').innerText = newTime
    }, 1000);
}


(function() {
    console.log('INIT')
    updateTime()
})();