import { defineComponent, h, type VNode } from 'vue';
import { RouterView } from 'vue-router';
import ProLayout from '@ant-design-vue/pro-layout';

export default defineComponent({
  setup() {
    return () => (
      <ProLayout>
        <RouterView
          v-slots={{
            default: ({ Component }: { Component: VNode }) => h(Component),
          }}
        />
      </ProLayout>
    );
  },
});
