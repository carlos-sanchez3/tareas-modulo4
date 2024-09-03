const url = 'https://randomuser.me/api/';
const boton = document.getElementById('boton')
const contenido = document.querySelector('#contenido');

function mostrarData(){
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data,'data');
            console.log(data.results[0].name,'nombre')
             console.log(data,results[0].phone,'phone')
             console.log(data,results[0].gener,'genero')
             console.log(data,results[0].email,'email')
            
            contenido.innerHTML = `<img src='${data.results[0].picture.large}'>
                                    <p>${data.results[0].name.first}</p>
                                    <p>${data.results[0].gener}</p>
                                    <p>${data.results[0].phone}</p>
                                    <p>${data.results[0].email}</p>`

                                    
                                    
        })
}





boton.addEventListener('click', mostrarData);