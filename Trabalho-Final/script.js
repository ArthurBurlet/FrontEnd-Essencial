document.getElementById("myBtn").addEventListener("click", getData);

function getData() {
  //console.log('teste');
  fetch("https://randomuser.me/api/?results=5")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      let author = data.results;
      //console.log(author);

      let usuarios = "";

      author.forEach(function (lists) {
        usuarios += `
                <div class="col">
                    <div class="card" style="width: 100%;">
                        <img src="${lists.picture.large}">
                        <div class="card-body">
                          <h5 class="card-title">Nome: ${lists.name.first} ${lists.name.last}</h5>
                          <p class="card-text"> ${lists.location.timezone.description}</p>
                        </div>
                      <a href="Trabalho-Final.html" class="btn btn-primary">Clientes</a>   
                    </div>
                </div> 
               `;
      });
      document.getElementById("usuarios").innerHTML = usuarios;
    });
}