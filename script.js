const tabLinks = document.querySelectorAll('.tab-links')
const tabContents = document.querySelectorAll('.tab-contents')


let sideMenu = document.getElementById('sideMenu')

const openMenu = ()=>{
    sideMenu.style.right = '0'
}
const closeMenu = ()=>{
    sideMenu.style.right = '-200px'
}

const openTab  = (tabName)=>{


    for(let tabLink of tabLinks){
        tabLink.classList.remove('active-link')
    }
    for(let tabContent of tabContents){
        tabContent.classList.remove('active-tab')
    }
    event.target.classList.add('active-link')
    console.log(document.getElementById(tabName));
    document.getElementById(tabName).classList.add('active-tab')
    
}


  const scriptURL = 'https://script.google.com/macros/s/AKfycbwgBdDPw_edQemQFDMsjqnRsyzNzbw22ikQyYFXPeQVpUtShu8YRv45gPN9ZDh4vjo/exec'
  const form = document.forms['submit-to-google-sheet' ]
  
    const alertMsg = document.getElementById('alert') 
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        alertMsg.innerText = 'Message Sent Successfully'
        setTimeout(()=>alertMsg.innerText='',5000)

      })
      .catch(error => {
        alertMsg.innerText = 'Message Sendding Failed'
        alertMsg.style.color = 'red'
        setTimeout(()=>alertMsg.innerText='',5000)

      })
      form.reset()
  })
