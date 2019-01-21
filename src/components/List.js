import React from 'react'


export default function List ({items, remove, toggle}) {
return(
  <ul> {items.map((item) => (
    <li key={item.id}>
      <span
        onClick={() => toggle && toggle(item.id)}
        style={{textDecoration: item.complete ?'line-through' : 'none'}}>
        {item.name}
      </span>
      <button onClick={()=> remove(item)}>X</button>
    </li>
  ))}
  </ul>
)
}
