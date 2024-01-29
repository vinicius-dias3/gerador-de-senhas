const pwdContent = document.getElementById('pwd-content')
const btnGenerate = document.getElementById('btn-generate')
const btnCopy = document.getElementById('btn-copy')

const pwdRange = document.getElementById('pwd-range')
const pwdRangeStatus = document.getElementById('pwd-range-status')
const pwdInputChars = document.getElementById('pwd-input-chars').getElementsByTagName('input') //corresponde a todos os inputs


const password = {
    value: '',
    length: 15,
    characters: {
        numbers: '0123456789',
        lowercase: 'abcdefghijklmnopqrstuvwxyz',
        uppercase: 'ABCDEFGHIJKLMNOPQRSTUWXYZ',
        special: '?/~^{}[]!@#$%¨&*()_-+=.,:;'
    },
    generate(chars){
        let pwd = ''; //Receberá a senha aleatória
        this.length = this.length < 5 || this.length > 30 ? 15 : this.length;
        chars = chars || Object.values(this.characters).join() 
        
        for (let i = 0; i < this.length; i++) {
            // debugger
            pwd += chars[Math.floor(Math.random() * chars.length)]
        }

        this.value = pwd;
        return pwd;
    }
}


function pwdGenerator(){
    let chars = ''
    for (let i = 0; i < pwdInputChars.length; i++) {//acessa a quantidade de inputs (4)
        if(pwdInputChars[i].checked){ //acessa cada input checked
            chars += password.characters[pwdInputChars[i].name]
        }
    }

    password.length = pwdRange.value;
    pwdContent.textContent = password.generate(chars)
}

pwdRange.addEventListener('input', (event) => {
    pwdRangeStatus.textContent = event.currentTarget.value
})

btnGenerate.addEventListener('click', ()=> {
    pwdGenerator()
    btnGenerate.classList.add('btn-animation')
    setTimeout(()=>{
        btnGenerate.classList.remove('btn-animation')
    },1000)
})

btnCopy.addEventListener('click', () => {
    navigator.clipboard.writeText(password.value)
    btnCopy.textContent = 'Copiado!'
    btnCopy.classList.add('btn-animation')
    
    setTimeout(() => {
        btnCopy.classList.remove('btn-animation')
        btnCopy.textContent = 'Copiar'
    },2000)
})