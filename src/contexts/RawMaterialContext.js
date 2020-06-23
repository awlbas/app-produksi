import React, { createContext, useState, useEffect } from 'react';

export const RawMaterialContext = createContext()

const RawMaterialContextProvider = (props) => {

  const url = "http://192.168.88.111/firebird/data.php"
  const [items, setItem] = useState([])

  const fetchRawMaterials = async () => {
    const rawMaterialsData = await fetch(url).then(res=>res.json())
    setItem(rawMaterialsData)
  }

  useEffect(() => {
    fetchRawMaterials()
  }, [])

  return (
    <RawMaterialContext.Provider value={{items}}>
      {props.children}
    </RawMaterialContext.Provider>
  );

}

export default RawMaterialContextProvider;