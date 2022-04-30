const template = /*html*/ `
<div @click="keyPress(keyContent)" :class="['key', keyContent.code]">
    <div v-if="isActiveKey" :class="['key', 'activeKey', keyContent.code]">
      <div>{{activeKeyValue}}</div>
    </div>
    <div>{{main}}</div>
    <div>{{shifted}}</div>
</div>
`

export default {
	template,
	props: {
		keyContent: Object,
		currentLang: String,
		activeKey: Object,
		setActiveKey: Function,
		playActiveKey: Function
	},
	methods: {
		keyPress(keyContent) {
			console.log('keyContent')
			console.log(keyContent)
			this.setActiveKey(keyContent.code)
			this.playActiveKey()
		}
	},
	computed: {
		isActiveKey() {
			const { keyContent, activeKey } = this
			if (!activeKey) return false
			return keyContent?.code === activeKey?.code
		},
		main() {
			const { main, label, code } = this.keyContent
			return label || main || code
		},
		shifted() {
			const { shifted } = this.keyContent
			return shifted
		},
		activeKeyValue() {
			const { keyValue, label, main, code } = this.activeKey
			return keyValue?.trim() || label || main || code
		}
	}
}
