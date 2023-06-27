<!-- <template>
  <div>I am async!</div>
</template> -->

<script>
import LoadingComponent from '../../common/LoadingComponent.vue';
import ErrorComponent from '../../common/ErrorComponent.vue';

export default {
  // 需要加载的组件 (应该是一个 `Promise` 对象)
  component: setTimeout(()=> import('./ArchiveComponent.vue'), 3000),
  // 异步组件加载时使用的组件
  loading: LoadingComponent,
  // 加载失败时使用的组件
  error: ErrorComponent,
  // 展示加载时组件的延时时间。默认值是 200 (毫秒)
  delay: 2000,
  // 如果提供了超时时间且组件加载也超时了，
  // 则使用加载失败时使用的组件。默认值是：`Infinity`
  timeout: 3000
}
</script>