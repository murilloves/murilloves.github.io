const taleContainer = document.querySelector("#tale-container");

const getTalesQuery = () => `{ tales { id title text } }`;

const renderTales = ( data ) => {
  const allTales = data;

  while (taleContainer.firstChild) {
    taleContainer.removeChild(taleContainer.firstChild);
  }

  const taleFragment = document.createDocumentFragment();

  // <center><img src="assets/img/tribal.png"></center>

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
      taleContainer.appendChild(taleFragment);
    });

  }

}

(() => {
  const options = {
    method: "get",
  };

  fetch(`https://museekr.herokuapp.com/api/tales/all`, options)
    .then(res => res.json())
    .then(renderTales);

})();
