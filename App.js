import Key from './Key.js'
import Keyboard from './Keyboard.js'
import LangSwitcher from './LangSwitcher.js'
import { calculateKey } from './utils/utils.js'

const template = /*html*/ `<div class="app">
    <vue-lang-switcher :langs="langs" :currentLang="currentLang" :switchLang="switchLang" />
    <vue-keyboard :keyboardData="keyboardData" :currentLang="currentLang" :activeKey="activeKey" /> 
</div>`

export default {
  template,
  data () {
    return {
      currentLang: 'en',
      langs: ['en', 'ar', 'ru'],
      keyboardData: [],
      activeKey: null
    }
  },
  mounted () {
    this.getKeyboardData(this.currentLang)

    window.addEventListener('keydown', e => {
      e.preventDefault()
      const { key, code, shiftKey } = e

      console.log(e)
      console.log({ key, code, shiftKey })

      this.activeKey = calculateKey(this.keyboardData, code, shiftKey)

      console.log(this.activeKey)

      clearTimeout(this.timeout)

      this.timeout = setTimeout(() => (this.activeKey = null), 1000)
      // audio
      const audio = new Audio(
        `./keyboardData/sounds/${this.currentLang}/${this.activeKey.fileName}.mp3`
      )
      audio
        .play()
        .then()
        .catch(() => {
          if (this.currentLang !== 'en') {
            const audio = new Audio(
              `./keyboardData/sounds/en/${this.activeKey.fileName}.mp3`
            )
            audio.play()
          }
        })
    })
  },
  methods: {
    switchLang (lang) {
      this.currentLang = lang
      this.getKeyboardData(lang)
    },
    async getKeyboardData (lang) {
      const { default: keyboardData } = await import(
        `./keyboardData/keys/${lang}.js`
      )
      this.keyboardData = keyboardData
    }
  },
  components: {
    'vue-key': Key,
    'vue-keyboard': Keyboard,
    'vue-lang-switcher': LangSwitcher
  }
}
