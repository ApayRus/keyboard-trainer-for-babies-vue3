import Key from './Key.js'
import Keyboard from './Keyboard.js'
import LangSwitcher from './LangSwitcher.js'
import { calculateKey } from './utils/utils.js'

const template =
	/*html*/
	`<div class="app">
      <vue-lang-switcher 
        :langs="langs" 
        :currentLang="currentLang" 
        :switchLang="switchLang" 
      />
      <vue-keyboard 
        :keyboardData="keyboardData" 
        :currentLang="currentLang" 
        :activeKey="activeKey" 
        :setActiveKey="setActiveKey" 
        :playActiveKey="playActiveKey" 
      /> 
  </div>`

export default {
	template,
	data() {
		return {
			currentLang: 'en',
			langs: ['en', 'ar', 'ru'],
			keyboardData: [],
			activeKey: null,
			shiftOn: false
		}
	},
	mounted() {
		this.getKeyboardData(this.currentLang)

		window.addEventListener('keydown', e => {
			e.preventDefault()
			const { code, shiftKey } = e
			if (e.key === 'Shift') {
				this.shiftOn = true
			}
			this.setActiveKey(code, shiftKey)
			this.playActiveKey()
		})

		window.addEventListener('keyup', e => {
			if (e.key === 'Shift') {
				this.shiftOn = false
			}
		})
	},
	methods: {
		switchLang(lang) {
			this.currentLang = lang
			this.getKeyboardData(lang)
		},
		async getKeyboardData(lang) {
			const { default: keyboardData } = await import(
				`./keyboardData/keys/${lang}.js`
			)
			this.keyboardData = keyboardData
		},
		playActiveKey() {
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
		},
		setActiveKey(code, shiftKey = false) {
			this.activeKey = calculateKey(this.keyboardData, code, shiftKey)
			clearTimeout(this.timeout)
			this.timeout = setTimeout(() => (this.activeKey = null), 1000)
		}
	},
	components: {
		'vue-key': Key,
		'vue-keyboard': Keyboard,
		'vue-lang-switcher': LangSwitcher
	}
}
