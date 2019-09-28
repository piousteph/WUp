let TIME
let DATE
let ALARM = []


refreshData = () => {
    let data = setInterval(() => {
        TIME = moment().format("HH:mm:ss")
        DATE = moment().format("DD MM YYYY")
        displayUpdate()
    }, 1000)
}

displayUpdate = () => {
    document.getElementById('hour').innerText = TIME
    document.getElementById('date').innerText = DATE
}


(function() {
    console.log('INIT')
    refreshData()
})();