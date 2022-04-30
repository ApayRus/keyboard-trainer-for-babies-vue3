import Key from './Key.js'

const template = /*html*/ `
    <div class="keyboard">
        <div :class="['row', 'row-'+(1+index)]" v-for="(row, index) in keyboardData">
            <template v-for="keyContent in row">
              <vue-key 
              :keyContent="keyContent" 
              :currentLang="currentLang" 
              :activeKey="activeKey" 
              :setActiveKey="setActiveKey" 
              :playActiveKey="playActiveKey"  
              :shiftOn="shiftOn" 
              :toggleShiftOn="toggleShiftOn"
              />
            </template>
        </div>
    </div>
`

export default {
	template,
	props: {
		currentLang: String,
		keyboardData: Array,
		activeKey: Object,
		setActiveKey: Function,
		playActiveKey: Function,
		shiftOn: Boolean,
		toggleShiftOn: Function
	},
	components: {
		'vue-key': Key
	}
}
