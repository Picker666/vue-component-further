<template>
  <div>
    <h1>{{ serialNumber }}、{{ title }}</h1>
    <p>
      <button @click="handleClick('PostComponent')">PostComponent</button>
      <button @click="handleClick('ArchiveComponent')">ArchiveComponent</button>
    </p>
    <keep-alive>
      <component :is="componentId"></component>
    </keep-alive>

    <AsyncArchiveComponent />
    <async-example />
    <p>异步：</p>
    <AsyncComponent />
    <hr>
  </div>
</template>

<script>
import ArchiveComponent from './ArchiveComponent.vue';
import PostComponent from './PostComponent.vue';
import LoadingComponent from '../../common/LoadingComponent.vue';
import ErrorComponent from '../../common/ErrorComponent.vue';

const AsyncComponent = () => ({
  // 需要加载的组件 (应该是一个 `Promise` 对象)
  component: import('./ArchiveComponent.vue'),
  // 异步组件加载时使用的组件
  loading: LoadingComponent,
  // 加载失败时使用的组件
  error: ErrorComponent,
  // 展示加载时组件的延时时间。默认值是 200 (毫秒)
  delay: 2000,
  // 如果提供了超时时间且组件加载也超时了，
  // 则使用加载失败时使用的组件。默认值是：`Infinity`
  timeout: 3000
})

export default {
  name: "needName",
  components: {
    PostComponent,
    ArchiveComponent,
    AsyncComponent,
    AsyncArchiveComponent: () => import('./ArchiveComponent.vue')
  },
  props: {
    serialNumber: {
      type: Number,
      required: true,
      default: 0
    }
  },
  data: function () {
    return {
      title: "",
      componentId: 'PostComponent'
    }
  },
  methods: {
    handleClick(id) {
      this.componentId = id
    }
  }
}
</script>