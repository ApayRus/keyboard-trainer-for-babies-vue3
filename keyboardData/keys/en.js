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
      main: '`',
      shifted: '~',
      shiftedName: 'tilde',
      code: 'Backquote',
      mainName: 'backquote'
    },
    {
      main: '1',
      code: 'Digit1',
      shifted: '!',
      shiftedName: 'exclamation mark'
    },
    {
      main: '2',
      code: 'Digit2',
      shifted: '@',
      shiftedName: 'at sign'
    },
    {
      main: '3',
      code: 'Digit3',
      shifted: '#',
      shiftedName: 'hash'
    },
    {
      main: '4',
      code: 'Digit4',
      shifted: '$',
      shiftedName: 'dollar sign'
    },
    {
      main: '5',
      code: 'Digit5',
      shifted: '%',
      shiftedName: 'percent sign'
    },
    {
      main: '6',
      code: 'Digit6',
      shifted: '^',
      shiftedName: 'carat'
    },
    {
      main: '7',
      code: 'Digit7',
      shifted: '&',
      shiftedName: 'ampersand'
    },
    {
      main: '8',
      code: 'Digit8',
      shifted: '*',
      shiftedName: 'asterisk'
    },
    {
      main: '9',
      code: 'Digit9',
      shifted: '(',
      shiftedName: 'left parenthesis'
    },
    {
      main: '0',
      code: 'Digit0',
      shifted: ')',
      shiftedName: 'right parenthesis'
    },
    {
      main: '-',
      code: 'Minus',
      mainName: 'minus',
      shifted: '_',
      shiftedName: 'underscore'
    },
    {
      main: '=',
      code: 'Equal',
      mainName: 'equal',
      shifted: '+',
      shiftedName: 'plus'
    },
    { label: 'backspace', code: 'Backspace' }
  ],
  [
    { code: 'Tab' },
    { main: 'q', code: 'KeyQ' },
    { main: 'w', code: 'KeyW' },
    { main: 'e', code: 'KeyE' },
    { main: 'r', code: 'KeyR' },
    { main: 't', code: 'KeyT' },
    { main: 'y', code: 'KeyY' },
    { main: 'u', code: 'KeyU' },
    { main: 'i', code: 'KeyI' },
    { main: 'o', code: 'KeyO' },
    { main: 'p', code: 'KeyP' },
    {
      main: '[',
      mainName: 'left bracket',
      shifted: '{',
      shiftedName: 'left curly bracket',
      code: 'BracketLeft'
    },
    {
      main: ']',
      mainName: 'right bracket',
      shifted: '}',
      shiftedName: 'right curly bracket',
      code: 'BracketRight'
    }
  ],
  [
    { label: 'CapsLk', code: 'CapsLock', mainName: 'caps lock' },
    { main: 'a', code: 'KeyA' },
    { main: 's', code: 'KeyS' },
    { main: 'd', code: 'KeyD' },
    { main: 'f', code: 'KeyF' },
    { main: 'g', code: 'KeyG' },
    { main: 'h', code: 'KeyH' },
    { main: 'j', code: 'KeyJ' },
    { main: 'k', code: 'KeyK' },
    { main: 'l', code: 'KeyL' },
    {
      main: ';',
      code: 'Semicolon',
      mainName: 'semicolon',
      shifted: ':',
      shiftedName: 'colon'
    },
    {
      main: "'",
      shifted: '"',
      code: 'Quote',
      mainName: 'single quote',
      shiftedName: 'double quote'
    },
    {
      main: '\\',
      shifted: '|',
      code: 'Backslash',
      mainName: 'backslash',
      shiftedName: 'vertical pipe'
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
    { main: 'z', code: 'KeyZ' },
    { main: 'x', code: 'KeyX' },
    { main: 'c', code: 'KeyC' },
    { main: 'v', code: 'KeyV' },
    { main: 'b', code: 'KeyB' },
    { main: 'n', code: 'KeyN' },
    { main: 'm', code: 'KeyM' },
    {
      main: ',',
      code: 'Comma',
      mainName: 'comma',
      shifted: '<',
      shiftedName: 'less than'
    },
    {
      main: '.',
      code: 'Period',
      mainName: 'period',
      shifted: '>',
      shiftedName: 'greater than'
    },
    {
      main: '/',
      code: 'Slash',
      mainName: 'slash',
      shifted: '?',
      shiftedName: 'question mark'
    },
    { code: 'ArrowUp', label: '↑', mainName: 'arrow up' },
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
    { code: 'Space', main: ' ', label: 'space', mainName: 'space' },
    { code: 'MetaRight', label: 'cmd', mainName: 'right command' },
    { code: 'AltRight', label: 'alt', mainName: 'right alt' },
    { code: 'ControlRight', label: 'ctrl', mainName: 'right control' },
    { code: 'ArrowLeft', label: '←', mainName: 'arrow left' },
    { code: 'ArrowDown', label: '↓', mainName: 'arrow down' },
    { code: 'ArrowRight', label: '→', mainName: 'arrow right' }
  ]
]

export default keys
