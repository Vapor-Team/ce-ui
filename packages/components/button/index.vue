<template>
  <div
    @click="$emit('click')"
    class="ce-button"
    :class="[
      type ? 'ce-button--' + type : '',
      size ? 'ce-button--' + size : '',
      {
        'is-disabled': disabled,
        'is-plain': plain,
        'is-square': square,
        'is-shadow':shadow,
        'is-opacity':opacity,
				'is-round':round,
				'is-circle':circle
      }
    ]"
  >
    <slot></slot>
  </div>
</template>
<script>
import create from "../../utils/create-basic"
export default create({
	name: "button",
	props: {
		type: {
			type: String,
			default: "default"
		},
		size: String,
		shadow: Boolean,
		disabled: Boolean,
		square: Boolean,
		plain: Boolean,
		opacity: Boolean,
		round: Boolean,
		circle: Boolean
	}
})
</script>
