const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)

  /*Abaixo está como adicionar na biblioteca um dia que não é o de hoje (Obs: Devemos prencher no mínimo um dos hábitos desse dia passsado para guardar os que foram prenchidos)*/
  /*const today = "18/01"*/
  /*const today = "19/01"*/
  /*Para cada navegador e sua máquina há um progresso e localstorage de marcações para fazer ou feitas na última vez  que esta página foi acessada*/

  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert("Esse dia já está incluso ❌")
    return
  }

  alert("Dia adicionado com sucesso ✔️")
  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
}
/*const data = {
  banhogelado: ["01-01", "01-02", "01-03", "01-04", "01-05"],
  banhodesol: ["01-02", "01-03", "01-05"],
  treino: ["01-01", "01-03", "01-04"],
  leitura: ["01-02", "01-03", "01-05"],
  programação: ["01-02", "01-04", "01-05"],
  sonodequalidade: ["01-01", "01-03"],
}*/

const data = JSON.parse(localStorage.getItem("NLWSetup@habits"))
nlwSetup.setData(data)
nlwSetup.load()
