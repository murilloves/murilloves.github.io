const talesContainer = document.querySelector("#tales-container");

const loadingDiv = document.getElementById('loading-div');

const getTalesQuery = () => `{
  tales {
    id
    title
    text
  }
}`;

const renderTales = ( data ) => {
  const allTales = data;

  while (talesContainer.firstChild) {
    talesContainer.removeChild(talesContainer.firstChild);
  }

  const taleFragment = document.createDocumentFragment();

  if(allTales.length) {

    allTales.forEach((tale) => {
      const talesCenterElement = document.createElement('center');
      const talesImg = document.createElement('img');
      talesImg.src = 'assets/img/tribal.png';

      const talesList = document.createElement('center');
      const talesListItem = document.createElement('div');

      talesListItem.textContent = `${tale.text}`;

      talesCenterElement.appendChild(talesImg);

      talesList.appendChild(talesCenterElement);
      talesList.appendChild(talesListItem);

      taleFragment.appendChild(talesList);
      talesContainer.appendChild(taleFragment);
    });

  }

  setTimeout(() => {
    talesContainer.style.display = 'block';
    loadingDiv.style.display = 'none';
  }, 1000);

}

(() => {
  body = {
    count_access: 1,
  };

  const options = {
    method: "post",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body),
  };

  fetch(`https://museekr.herokuapp.com/api/tales/all`, options)
    .then(res => res.json())
    .then(renderTales);

})();
