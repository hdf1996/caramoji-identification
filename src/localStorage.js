const itemName = 'caramoji'
const read = () => {
  const store = localStorage.getItem(itemName);
  return store ? JSON.parse(store) : []
}

const write = content => {
  localStorage.setItem(itemName, JSON.stringify(content))
}

const update = (id, content) => {
  const tmp = [...read()];
  const index = tmp.findIndex(item => item.id === id)
  tmp[index] = {
    ...tmp[index],
    ...content
  }
  write(tmp)
}

const destroy = id => {
  const tmp = [...read()];
  const index = tmp.findIndex(item => item.id === id)
  tmp.splice(index, 1);
  write(tmp)
}

export {
  read,
  write,
  update,
  destroy
}
