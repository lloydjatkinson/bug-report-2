import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'Example',

  props: {
    as: {
      type: String as PropType<string>,
      required: true,
    }
  },

  render () {
    const Element = this.as;

    return (
        <Element class="example">
            {this.$slots.default && this.$slots.default()}
        </Element>
    );
  },
})