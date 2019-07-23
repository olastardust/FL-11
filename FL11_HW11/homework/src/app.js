let rootNode = document.getElementById("root");
let text = document.getElementById('text');
let add = document.getElementById('add');
let container = document.querySelector('#container');
let list = container.children;
let dragSrcEl = null;
let limit = document.body.children[0].children[1];
const maxCount = 10;
const two = 2;

limit.setAttribute('hidden', 'true');

function validAdd() {
    if (text.value === '' || list.length === maxCount) {
        add.setAttribute('disabled', 'disabled');
    } else {
        add.removeAttribute('disabled');
    }
}

function validInputText() {
    if (list.length === maxCount) {
        text.setAttribute('disabled', 'disabled');
        limit.removeAttribute('hidden');
    } else {
        text.removeAttribute('disabled');
        limit.setAttribute('hidden', 'true');
    }
}

function createItem() {
    let item = document.createElement('div');
    item.className = 'items';
    item.draggable = 'true';

    let sub = document.createElement('div');
    sub.className = 'sub';

    let check = document.createElement('i');
    check.className = 'iconSize material-icons';
    check.innerText = 'check_box_outline_blank';

    let p = document.createElement('p');

    let change = document.createElement('i');
    change.className = 'iconSize iconChange material-icons';
    change.innerText = 'create';

    let iconDel = document.createElement('i');
    iconDel.className = 'iconSize material-icons';
    iconDel.innerText = 'delete';

    let label = document.createElement('label');
    label.appendChild(check);
    label.appendChild(p);
    label.appendChild(change);

    sub.appendChild(label);
    sub.appendChild(iconDel);

    item.appendChild(sub);

    return item;
}

function addItem() {
    let item = createItem();
    let p = item.children[0].children[0].children[1];

    p.innerHTML = text.value;
    text.value = '';
    add.setAttribute('disabled', 'disabled');

    container.appendChild(item);

    validInputText();
    initEvents(item);
}

function delItem(event) {
    let k = -1;
    for (let i = 0; i < list.length; i++) {
        if (list[i].children[0].children[1] === event.target) {
            k = i;
        }
    }

    if (k >= 0) {
        container.removeChild(list[k]);
    }

    validInputText();
}

function changeItem(event) {
    let box = document.createElement('div');
    box.className = 'box';

    let inpChange = document.createElement('input');
    inpChange.className = 'inputChange';

    let save = document.createElement('i');
    save.className = 'iconSize iconSave material-icons';
    save.innerText = 'save';

    box.appendChild(inpChange);
    box.appendChild(save);

    let k = -1;
    for (let i = 0; i < list.length; i++) {
        if (list[i].children[0].children[0].children[two] === event.target) {
            k = i;
        }
    }

    if (k >= 0 && list[k].children.length === 1) {
        list[k].appendChild(box);
    }
}

function disabledChek(event) {
    let k = -1;
    for (let i = 0; i < list.length; i++) {
        if (list[i].children[0].children[0].children[0] === event.target) {
            k = i;
        }
    }

    if (k >= 0) {
        event.target.innerText = 'done';
    }
}

function saveItem(event) {
    let k = -1;
    for (let i = 0; i < list.length; i++) {
        if (list[i].firstChild !== list[i].lastChild) {
            if (list[i].children[1].children[1] === event.target) {
                k = i;
            }
        }
    }

    if (k >= 0) {
        list[k].children[0].children[0].children[1].innerHTML = list[k].children[1].children[0].value;
        list[k].removeChild(list[k].children[1])
    }
}

document.addEventListener('keyup', validAdd);
add.addEventListener('click', addItem);
container.addEventListener('click', delItem);
container.addEventListener('click', disabledChek);
container.addEventListener('click', changeItem);
container.addEventListener('click', saveItem);

function handleDragStart(e) {
    dragSrcEl = this;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
}

function handleDragOver(e) {
    if(e.preventDefault) {
        e.preventDefault();
    }

    return false;
}

function handleDrop(e) {
    if(e.preventDefault) {
        e.preventDefault();
    }

    if (dragSrcEl !== this && dragSrcEl !== null) {
        dragSrcEl.innerHTML = this.innerHTML;
        this.innerHTML = e.dataTransfer.getData('text/html');
    }

    return false;
}

function initEvents(e) {
    e.addEventListener('dragstart', handleDragStart, false);
    e.addEventListener('dragover', handleDragOver, false);
    e.addEventListener('drop', handleDrop, false);
}
