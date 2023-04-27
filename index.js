let time = document.querySelector('#time')
let currentTime ;
setInterval(()=>{
    watch()

},1000)

const week =  ['sunday','monday','tuesday','wednesday','thusday','friday','saturday']
const months = ['January','fabuary','march','april','may','june','july','august','setember','october','novimber','december']

function watch(){
    currentTime = new Date()
    const day = currentTime.getDay()
function sort(value,second){
    let p = second[value].split('')
    const u = p.shift().toUpperCase()
      p.unshift(u)
      return p.join('') 
 }


 
    const month = currentTime.getMonth()
   
    let date = currentTime.getDate()
    let clock = currentTime.getHours()
    let year = currentTime.getFullYear()
    let second = currentTime.getSeconds()
    let minut = currentTime.getMinutes()
    
    
    time.textContent = `Current date is ${date} ${sort(month,months)} ${year}  ${sort(day,week)} ${clock}:${minut}:${second}`
    
    // console.log(currentTime.getDate())
}
