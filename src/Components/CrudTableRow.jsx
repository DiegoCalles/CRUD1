import React, { useState } from "react";

export default function CrudTableRow({ el, setDataToEdit, deleteData }) {
  let {name, constellation, id} = el;

  return (
    <>
      <tr>
        <td>{el.name}</td>
        <td>{el.constellation}</td>
        <td>
          <button onClick={() => setDataToEdit(el)}>Editar</button>
          <button onClick={() => deleteData(id)}>Eliminar</button>
        </td>
      </tr>
    </>
  );
}
