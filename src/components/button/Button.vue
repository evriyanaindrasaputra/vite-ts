<script setup lang="ts">
import { computed } from 'vue'

type StyleVariant = 'solid' | 'outline' | 'ghost' | 'link' | 'input'
type ColorVariant =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'
  | 'gold'
type SizeVariant = 'sm' | 'md' | 'lg'
interface Props {
  variant?: StyleVariant
  color?: ColorVariant
  size?: SizeVariant
}

const { variant, color, size } = withDefaults(defineProps<Props>(), {
  variant: 'solid',
  color: 'primary',
  size: 'md',
})

const classNames = computed(() => {
  const result: string[] = ['btn']

  color && result.push(`btn--${color}`)

  variant && result.push(`btn--${variant}`)

  size && result.push(`btn--${size}`)
  return result
})
</script>

<template>
  <button :class="classNames">
    <slot />
  </button>
</template>

<style lang="postcss" scoped>
.btn {
  @apply inline-flex font-medium disabled:pointer-events-none disabled:opacity-50;

  /*
  * Button has 3 different sizing
  * eg: sm, md, and lg
  */
  &--sm {
    @apply gap-2 rounded-sm px-4 py-2 text-base;
  }

  &--md {
    @apply gap-3 rounded px-5 py-3 text-base;
  }

  &--lg {
    @apply gap-4 rounded px-8 py-5 text-base;
  }

  /*
  * Button solid is the
  * default style variant
  */
  &--solid {
    @apply border border-solid text-white hover:shadow-lg focus:shadow-none active:shadow-none;

    &.btn {
      &--primary {
        @apply bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 active:bg-blue-700;
      }
    }
  }
}
</style>
