const keys = [
  [
    { label: 'Esc', code: 'Escape' },
    { code: 'F1' },
    { code: 'F2' },
    { code: 'F3' },
    { code: 'F4' },
    { code: 'F5' },
    { code: 'F6' },
    { code: 'F7' },
    { code: 'F8' },
    { code: 'F9' },
    { code: 'F10' },
    { code: 'F11' },
    { code: 'F12' }
  ],
  [
    {
      main: 'ё',
      code: 'Backquote'
    },
    {
      main: '1',
      code: 'Digit1',
      shifted: '!',
      shiftedName: 'восклицательный знак'
    },
    {
      main: '2',
      code: 'Digit2',
      shifted: '"',
      shiftedName: 'двойная кавычка'
    },
    {
      main: '3',
      code: 'Digit3',
      shifted: '№',
      shiftedName: 'знак номер'
    },
    {
      main: '4',
      code: 'Digit4',
      shifted: ';',
      shiftedName: 'точка с запятой'
    },
    {
      main: '5',
      code: 'Digit5',
      shifted: '%',
      shiftedName: 'процент'
    },
    {
      main: '6',
      code: 'Digit6',
      shifted: ':',
      shiftedName: 'двоеточие'
    },
    {
      main: '7',
      code: 'Digit7',
      shifted: '?',
      shiftedName: 'вопросительный знак'
    },
    {
      main: '8',
      code: 'Digit8',
      shifted: '*',
      shiftedName: 'звездочка'
    },
    {
      main: '9',
      code: 'Digit9',
      shifted: '(',
      shiftedName: 'открывающая скобка'
    },
    {
      main: '0',
      code: 'Digit0',
      shifted: ')',
      shiftedName: 'закрывающая скобка'
    },
    {
      main: '-',
      code: 'Minus',
      mainName: 'минус',
      shifted: '_',
      shiftedName: 'нижнее подчеркивание'
    },
    {
      main: '=',
      code: 'Equal',
      mainName: 'равно',
      shifted: '+',
      shiftedName: 'плюс'
    },
    { label: 'backspace', code: 'Backspace' }
  ],
  [
    { code: 'Tab' },
    { main: 'й', code: 'KeyQ' },
    { main: 'ц', code: 'KeyW' },
    { main: 'у', code: 'KeyE' },
    { main: 'к', code: 'KeyR' },
    { main: 'е', code: 'KeyT' },
    { main: 'н', code: 'KeyY' },
    { main: 'г', code: 'KeyU' },
    { main: 'ш', code: 'KeyI' },
    { main: 'щ', code: 'KeyO' },
    { main: 'з', code: 'KeyP' },
    {
      main: 'х',
      code: 'BracketLeft'
    },
    {
      main: 'ъ',
      code: 'BracketRight'
    }
  ],
  [
    { label: 'CapsLk', code: 'CapsLock', mainName: 'caps lock' },
    { main: 'ф', code: 'KeyA' },
    { main: 'ы', code: 'KeyS' },
    { main: 'в', code: 'KeyD' },
    { main: 'а', code: 'KeyF' },
    { main: 'п', code: 'KeyG' },
    { main: 'р', code: 'KeyH' },
    { main: 'о', code: 'KeyJ' },
    { main: 'л', code: 'KeyK' },
    { main: 'д', code: 'KeyL' },
    { main: 'ж', code: 'Semicolon' },
    {
      main: 'э',
      code: 'Quote'
    },
    {
      main: '\\',
      shifted: '/',
      code: 'Backslash',
      mainName: 'обратный слэш',
      shiftedName: 'слэш'
    },
    { code: 'Enter' }
  ],
  [
    {
      code: 'ShiftLeft',
      label: 'Shift',
      mainName: 'left shift',
      shiftedName: 'left shift'
    },
    { main: 'я', code: 'KeyZ' },
    { main: 'ч', code: 'KeyX' },
    { main: 'с', code: 'KeyC' },
    { main: 'м', code: 'KeyV' },
    { main: 'и', code: 'KeyB' },
    { main: 'т', code: 'KeyN' },
    { main: 'ь', code: 'KeyM' },
    {
      main: 'б',
      code: 'Comma'
    },
    {
      main: 'ю',
      code: 'Period'
    },
    {
      main: '.',
      code: 'Slash',
      mainName: 'точка',
      shifted: ',',
      shiftedName: 'запятая'
    },
    { code: 'ArrowUp', label: '↑', mainName: 'стрелка вверх' },
    {
      code: 'ShiftRight',
      label: 'Shift',
      mainName: 'right shift',
      shiftedName: 'right shift'
    }
  ],
  [
    { code: 'ControlLeft', label: 'ctrl', mainName: 'left control' },
    { code: 'AltLeft', label: 'alt', mainName: 'left alt' },
    { code: 'MetaLeft', label: 'cmd', mainName: 'left command' },
    { code: 'Space', main: ' ', label: 'space', mainName: 'пробел' },
    { code: 'MetaRight', label: 'cmd', mainName: 'right command' },
    { code: 'AltRight', label: 'alt', mainName: 'right alt' },
    { code: 'ControlRight', label: 'ctrl', mainName: 'right control' },
    { code: 'ArrowLeft', label: '←', mainName: 'стрелка влево' },
    { code: 'ArrowDown', label: '↓', mainName: 'стрелка вниз' },
    { code: 'ArrowRight', label: '→', mainName: 'стрелка вправо' }
  ]
]

export default keys
