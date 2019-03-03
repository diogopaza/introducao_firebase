uploader = document.getElementById( 'uploader' )
fileButton = document.getElementById( 'fileButton' )

//Ouvir o evento change

fileButton.addEventListener('change', function(e){
    var file = e.target.files[0]
    console.log( file )
})