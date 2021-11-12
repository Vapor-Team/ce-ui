import Vue from 'vue'
declare module 'vue/types/vue' {
  interface VueConstructor {
    $t: any
  }
}
declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    t?: any
  }
}
