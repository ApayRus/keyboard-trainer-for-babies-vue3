const template = /*html*/ `
<div @click="keyClick(keyContent)" :class="['key', keyContent.code, shiftKeyOnStyle]">
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
		playActiveKey: Function,
		shiftOn: Boolean,
		toggleShiftOn: Function
	},
	methods: {
		keyClick(keyContent) {
			this.setActiveKey(keyContent.code, this.shiftOn)
			this.playActiveKey()
			if (keyContent.code.includes('Shift')) {
				this.toggleShiftOn()
			}
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
		shiftKeyOnStyle() {
			const { code } = this.keyContent
			return code.includes('Shift') && this.shiftOn ? 'shiftKeyOn' : ''
		},
		activeKeyValue() {
			const { keyValue, label, main, code } = this.activeKey
			return keyValue?.trim() || label || main || code
		}
	}
}
