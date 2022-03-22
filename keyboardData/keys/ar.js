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
      main: '٫',
      shifted: '٬',
      shiftedName: 'inverted comma',
      code: 'Backquote',
      mainName: 'comma'
    },
    {
      main: '١',
      mainName: '1',
      code: 'Digit1',
      shifted: '!',
      shiftedName: 'exclamation mark'
    },
    {
      main: '٢',
      mainName: '2',
      code: 'Digit2',
      shifted: '@',
      shiftedName: 'at sign'
    },
    {
      main: '٣',
      mainName: '3',
      code: 'Digit3',
      shifted: '#',
      shiftedName: 'hash'
    },
    {
      main: '٤',
      mainName: '4',
      code: 'Digit4',
      shifted: '$',
      shiftedName: 'dollar sign'
    },
    {
      main: '٥',
      mainName: '5',
      code: 'Digit5',
      shifted: '٪',
      shiftedName: 'percent sign'
    },
    {
      main: '٦',
      mainName: '6',
      code: 'Digit6',
      shifted: '^',
      shiftedName: 'carat'
    },
    {
      main: '٧',
      mainName: '7',
      code: 'Digit7',
      shifted: '&',
      shiftedName: 'ampersand'
    },
    {
      main: '٨',
      mainName: '8',
      code: 'Digit8',
      shifted: '*',
      shiftedName: 'asterisk'
    },
    {
      main: '٩',
      mainName: '9',
      code: 'Digit9',
      shifted: '(',
      shiftedName: 'left parenthesis'
    },
    {
      main: '٠',
      mainName: '0',
      code: 'Digit0',
      shifted: ')',
      shiftedName: 'right parenthesis'
    },
    {
      main: '-',
      code: 'Minus',
      mainName: 'minus',
      shifted: 'ـ',
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
    { main: 'ض', code: 'KeyQ', shifted: 'َ', shiftedName: 'fatha' },
    { main: 'ص', code: 'KeyW', shifted: 'ً', shiftedName: '' },
    { main: 'ث', code: 'KeyE', shifted: 'ُ', shiftedName: '' },
    { main: 'ق', code: 'KeyR', shifted: 'ٌ', shiftedName: '' },
    { main: 'ف', code: 'KeyT', shifted: 'لإ', shiftedName: '' },
    { main: 'غ', code: 'KeyY', shifted: 'إ', shiftedName: '' },
    { main: 'ع', code: 'KeyU', shifted: '‘', shiftedName: '' },
    { main: 'ه', code: 'KeyI', shifted: '÷', shiftedName: '' },
    { main: 'خ', code: 'KeyO', shifted: '×', shiftedName: '' },
    { main: 'ح', code: 'KeyP', shifted: '؛', shiftedName: '' },
    {
      main: 'ج',
      shifted: '<',
      shiftedName: 'less than',
      code: 'BracketLeft'
    },
    {
      main: 'د',
      shifted: '>',
      shiftedName: 'greater than',
      code: 'BracketRight'
    }
  ],
  [
    { label: 'CapsLk', code: 'CapsLock', mainName: 'caps lock' },
    { main: 'ش', shifted: 'ِ', code: 'KeyA', shiftedName: 'kasra' },
    { main: 'س', shifted: 'ٍ', code: 'KeyS', shiftedName: 'tanwin kasra' },
    { main: 'ي', shifted: ']', code: 'KeyD', shiftedName: 'right bracket' },
    { main: 'ب', shifted: '[', code: 'KeyF', shiftedName: 'left bracket' },
    { main: 'ل', code: 'KeyG', shifted: 'لأ', shiftedName: '' },
    { main: 'ا', code: 'KeyH', shifted: 'أ', shiftedName: '' },
    { main: 'ت', code: 'KeyJ', shifted: 'ـ', shiftedName: '' },
    { main: 'ن', code: 'KeyK', shifted: '،', shiftedName: '' },
    { main: 'م', code: 'KeyL', shifted: '’', shiftedName: '' },
    {
      main: 'ك',
      code: 'Semicolon',
      shifted: ':',
      shiftedName: 'colon'
    },
    {
      main: 'ط',
      shifted: '"',
      code: 'Quote',
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
    {
      main: 'ئ',
      code: 'KeyZ',
      mainName: 'ya mahmuza',
      shifted: '~',
      shiftedName: 'tilde'
    },
    {
      main: 'ء',
      code: 'KeyX',
      mainName: 'hamza',
      shifted: 'ْ',
      shiftedName: ''
    },
    {
      main: 'ؤ',
      mainName: 'waw mahmuza',
      code: 'KeyC',
      shifted: '}',
      shiftedName: 'right curly bracket'
    },
    {
      main: 'ر',
      code: 'KeyV',
      shifted: '{',
      shiftedName: 'left curly bracket'
    },
    { main: 'لا', code: 'KeyB', shifted: 'لآ', shiftedName: '' },
    {
      main: 'ى',
      code: 'KeyN',
      mainName: 'alif maqsura',
      shifted: 'آ',
      shiftedName: ''
    },
    { main: 'ة', code: 'KeyM', shifted: '’', shiftedName: '' },
    {
      main: 'و',
      code: 'Comma',
      shifted: ',',
      shiftedName: 'comma'
    },
    {
      main: 'ز',
      code: 'Period',
      shifted: '.',
      shiftedName: 'period'
    },
    {
      main: 'ظ',
      code: 'Slash',
      shifted: '؟',
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
