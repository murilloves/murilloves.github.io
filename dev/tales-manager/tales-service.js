const taleContainer = document.querySelector("#tale-container");

const BACKEND_PATH = 'https://museekr.herokuapp.com/api/tales/';

const getTalesQuery = () => `{ tales { id title text } }`;

deleteTaleFn = (event) => {
  let taleId = event.currentTarget.value;
  return fetch(`${BACKEND_PATH}${taleId}`, {
    method: 'DELETE'
  })
  .then(response => response.json())
  .then(fetchTales);
}

const renderTales = ( data ) => {
  const allTales = data;

  while (taleContainer.firstChild) {
    taleContainer.removeChild(taleContainer.firstChild);
  }

  const taleFragment = document.createDocumentFragment();

  document.getElementById("taleTitle").value = '';
  document.getElementById("taleText").value = '';

  if(allTales.length) {

    allTales.forEach((tale) => {
      const talesItemColumn = document.createElement('div');

      const deleteTale = document.createElement('button');
      deleteTale.innerHTML = 'Deletar';
      deleteTale.value = tale._id;
      deleteTale.onclick = deleteTaleFn;
      deleteTale.click = deleteTaleFn;

      const talesList = document.createElement('div');
      const talesListItem = document.createElement('div');

      talesListItem.innerHTML = `${tale.title} <br><br> ${tale.text}`;

      talesItemColumn.appendChild(deleteTale);

      talesList.appendChild(talesListItem);
      talesList.appendChild(talesItemColumn);

      taleFragment.appendChild(talesList);
      taleContainer.appendChild(taleFragment);
    });

  }
}

const addTale = (event) => {
  let taleTitle = document.getElementById("taleTitle").value;
  let taleText = document.getElementById("taleText").value;

  let wasAdd = false;

  body = {
    title: taleTitle,
    text: taleText
  };

  const options = {
    method: "post",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body),
  };

  fetch(`${BACKEND_PATH}register`, options)
    .then(res => { res.json(); wasAdd = res })
    .then(fetchTales);

  return false;
}

fetchTales = () => {
  const options = {
    method: "get",
  };

  fetch(`${BACKEND_PATH}all`, options)
    .then(res => res.json())
    .then(renderTales);

};

(() => {
  fetchTales();
})();
