// Création d'une classe
class Client {
  constructor(name, surname, birthYear, balance, account_number) {
    this.name = name,
      (this.surname = surname),
      (this.birthYear = birthYear),
      (this.balance = balance),
      (this.account_number = account_number);
  }

  addMoney(money) {
    this.balance += money
  }

  removeMoney(money) {
    this.balance -= money
  }
}

// déclaration des éléments en amont
let tbody = document.getElementById("tbody")
let allModals = document.getElementById('allModals')

// Creation des 10 clients à l'aide de la classe Clients
let client1 = new Client("Efosa", "Omorodion", 1998, 50, 150150255);
let client2 = new Client("Samir", "Santana", 1990, 60, 10015011);
let client3 = new Client("Nina", "Simone", 1940, 70, 15015444);
let client4 = new Client("Tina", "Timon", 1950, 80, 1500044);
let client5 = new Client("Pumba", "Mufasa", 1960, 80, 800514);
let client6 = new Client("Patrick", "Star", 1970, 90, 8577599);
let client7 = new Client("Spongebob", "Bikini", 2001, 100, 1587466);
let client8 = new Client("Naruto", "Uzumaki", 1998, 258, 1507789);
let client9 = new Client("Sasuke", "Uchiha", 2004, 211, 874669);
let client10 = new Client("Aang", "Katara", 2000, 100, 5000004);

// Création d'un tableau d'objet avec nos clients
let clients = [
  client1,
  client2,
  client3,
  client4,
  client5,
  client6,
  client7,
  client8,
  client9,
  client10
]

// on détermine une variable qui nous permettra d'avoir des clients et modales uniques à l'aide d'une concatenation
let clientNb = 0

// Nous parcourons le tableau clients à l'aide d'une boucle forEach
clients.forEach(element => {

  // Création de notre tr
  let myTr = document.createElement('tr')

  // Création de nos 3 td qui contiendront les infos du client et les boutons d'action

  // Num de compte
  let tdAccount = document.createElement('td')
  tdAccount.innerText = element.account_number

  // Nom du client
  let tdName = document.createElement('td')
  tdName.innerText = element.name

  // Les actions sur clients
  let tdActions = document.createElement('td')

  // Creation du bouton à insérer dans notre td actions
  let myButton = document.createElement('button')
  // mise en place des classes et du texte
  myButton.classList.add('btn', 'btn-secondary', 'btn-sm')
  // ajout de data sur le bouton
  myButton.setAttribute('data-bs-toggle', 'modal')
  myButton.setAttribute('data-bs-target', '#modal-' + clientNb)
  // ajout du texte du bouton
  myButton.innerText = '+ infos'

  // on ajoute le bouton dans le td à l'aide d'un appendchild
  tdActions.appendChild(myButton)

  // nous insérons les td dans le tr à l'aide d'un appendchild
  myTr.appendChild(tdAccount)
  myTr.appendChild(tdName)
  myTr.appendChild(tdActions)

  // nous insérons le tr dans le tbody du document toujours avec un appendchild
  tbody.appendChild(myTr)


  // Nous allons créer une modale contenant les infos respectifs du client version et l'insérer dans allModals à l'aide de innerHTML
  // cf. bootstrap : https://getbootstrap.com/docs/5.3/components/modal/#how-it-works
  allModals.innerHTML += `
    <div class="modal fade" id="modal-${clientNb}" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header text-white bg-secondary">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Client</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    Numéro de compte : ${element.account_number}<br>
                    Nom : ${element.name}<br>
                    Prénom : ${element.surname}<br>
                    Année de naissance : ${element.birthYear}<br>
                    Solde : ${element.balance}€
                </div>
            </div>
        </div>
    </div>
  `
  // On incrémente la valeur à chaque passage pour avoir des id uniques pour nos modales
  clientNb++

});




