uploader = document.getElementById( 'uploader' )
fileButton = document.getElementById( 'fileButton' )

//Ouvir o evento change

fileButton.addEventListener('change', function(e){
    var file = e.target.files[0]
    //Referenciar o storage
    var storageRef = firebase.storage().ref('arquivos/'+file.name)
    var task = storageRef.put(file)
   
    //Atualizar o progress
    task.on('state_changed',
        function progress(snapshot){
            var percentage = (snapshot.bytesTransferred / snapshot.totalBytes ) * 100
            uploader.value = percentage
        },
        function(err){
            console.log(err)
        },
        function complete(){
            alert('envio completo')
        } 

    )

        })
    
