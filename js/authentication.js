//inputs
emailInput = document.getElementById('emailInput')
passwordInput = document.getElementById('passwordInput')
//Buttons
authEmailPassButton = document.getElementById('authEmailPassButton')
createUserButton = document.getElementById('createUserButton')
authGoogleButton = document.getElementById('authGoogleButton')
authGitHubButon = document.getElementById('authGitHubButon')
authFacebookButton = document.getElementById('authFacebookButton')
authTwitterButton = document.getElementById('authTwitterButton')
authAnonymouslyButton = document.getElementById('authAnonymouslyButton')
logOutButton = document.getElementById('logOutButton')

displayName = document.getElementById('displayName')

createUserButton.addEventListener('click', function(){
    
    firebase
        .auth()
        .createUserWithEmailAndPassword( emailInput.value, passwordInput.value )
        .then( function(){
            alert(" Bem vindo " + emailInput.value )
        })
        .catch(function(error){
            console.error(error.code)
            console.error(error.message)
            alert('Falha ao cadastrar, verifique o erro no console')
        })

})

authEmailPassButton.addEventListener('click', function(){

    firebase
        .auth()
        .signInWithEmailAndPassword(emailInput.value, passwordInput.value)
        .then( function(result){
            console.log(result)
            displayName.innerText = "Bem vindo " + emailInput.value
            alert('Autenticado ' + emailInput.value) 

        })
        .catch( function(error){
            console.error(error.code)
            console.error(error.message)
            alert('Falha ao autenticar, verifique o erro no console')
        })
})

logOutButton.addEventListener('click', function(){

    firebase
        .auth()
        .signOut()
        .then(function(){
            displayName.innerText = "Você não está autenticado"
        })
        .catch( function(error){
            console.log(error)
        })
})