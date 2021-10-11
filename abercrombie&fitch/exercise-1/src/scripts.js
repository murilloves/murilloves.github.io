const data = {}
const toggleShowMore = (id) => {
  const updatedList = data?.list.map(listItem => {
    if(listItem.id == id) {
      listItem.showMore = !listItem.showMore
    }
    return listItem
  })

  data.list = updatedList
  fillTemplate(data)
}

const fillTemplate = (data) => {
  const template = Handlebars.compile(document.querySelector('#template').innerHTML);
  const filled = template(data);
  document.querySelector('#output').innerHTML = filled;
}

const fetchData = () => {
  const assessmentUrl = 'https://615485ee2473940017efaed3.mockapi.io/assessment'

  fetch(assessmentUrl)
    .then(response => response.json())
    .then(list => {
      data.list = list
      fillTemplate(data)
    });
}

const registerHelpers = () => {
  Handlebars.registerHelper("formatDate", function(dateTime) {
    return new Date(dateTime).toLocaleDateString("en-US");
  });
}

window.onload = () => {
  registerHelpers()
  fetchData()
}
