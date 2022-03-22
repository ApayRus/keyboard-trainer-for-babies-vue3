export const calculateKey = (keyboardData, code, shiftKey) => {
  const keyObject = keyboardData.flat().find(elem => elem.code === code)

  // possible values
  const { main, shifted, shiftedName, mainName } = keyObject

  const fileName = shiftKey
    ? shiftedName || shifted || main
    : mainName || main || code

  const keyValue = shiftKey ? shifted || main?.toUpperCase() : main

  return { ...keyObject, shiftKey, keyValue, fileName: fileName.toLowerCase() }
}
