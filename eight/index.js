const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];

function handleAddItem(e) {
  e.preventDefault();

  const text = (this.querySelector('[name=item]')).value;
  const newItem = {
    text,
    done: false
  };

  items.push(newItem);
  addItems.reset();

  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);

};


function populateList(plates = [], platesList) {

  platesList.innerHTML = plates.map((plate, idx) => {
    return `
      <li class="plates-lists" key=${idx}>
        <input type="checkbox" data-index=${idx} id='item${idx}' ${plate.done ? 'checked' : ''}>
        <label for='item${idx}'>${plate.text}</label>
      </li>
    `;
  }).join('')
};


function toggleDone(e) {
  if(!e.target.matches('input')) return;
  const el = e.target;
  const index = el.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);
}


addItems.addEventListener('submit', handleAddItem);
itemsList.addEventListener('click', toggleDone);

populateList(items, itemsList);