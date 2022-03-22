const template =
  /*html*/
  `<div class="langSwitcher" >
    <template v-for="lang in langs">
        <div 
            :class="['lang', lang, {currentLang: currentLang === lang}]" 
            @click="switchLang(lang)"
        >
            {{lang}}
        </div>
    </template>
</div>`

export default {
  template,
  props: {
    langs: Array,
    currentLang: String,
    switchLang: Function
  }
}
