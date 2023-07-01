<template>
  <div>
    <h1>{{ serialNumber }}、{{ title }}</h1>
    <!-- 访问元素&组件 -->
    <ChildComponent ref="childCompRef" :serialNumber="1"/>
    <!-- 组件的循环引用 -->
    <TreeFolder :folder="folder"/>
    <!-- 内联模版 -->
    <InlineTemplate inline-template>
      <div>this is inline template {{ serialNumber }}</div>
    </InlineTemplate>

    <hr>
  </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue';
import TreeFolder from './TreeFolder.vue';
import InlineTemplate from './InlineTemplate.vue';

export default {
  name: "BoundaryHandle",
  components: {
    ChildComponent,
    TreeFolder,
    InlineTemplate
  },
  props: {
    serialNumber: {
      type: Number,
      required: true,
      default: 0
    }
  },
  provide: function() {
    return {
      boundaryHandler: this.boundaryHandler
    }
  },
  data: function () {
    return {
      title: "Boundary Handle",
      folder: {
        name: 'folder1',
        key: 1,
        children: [
          {
            name: 'folder2-1',
            key: '2-1',
            children: [
              {
                name: 'folder2-1-1',
                key: '2-1-1',
                children: [
                  {
                    name: 'folder2-1-1-1',
                    key: '2-1-1-1'
                  }
                ]
              }
            ]
          },
          {
            name: 'folder2-2',
            key: '2-2',
            children: [
              {
                name: 'folder2-2-1',
                key: '2-2-1',
                children: [
                  {
                    name: 'folder2-2-1-1',
                    key: '2-2-1-1'
                  }
                ]
              },
              {
                name: 'folder2-2-2',
                key: '2-2-2',
                children: [
                  {
                    name: 'folder2-2-2-1',
                    key: "2-2-2-1"
                  }
                ]
              },
              {
                name: 'folder2-2-3',
                key: '2-2-3',
                children: [
                  {
                    name: 'folder2-2-3-1',
                    key: '2-2-3-1'
                  }
                ]
              }
            ]
          }
        ]
      }
    }
  },
  methods: {
    boundaryHandler(callingTitle) {
      console.log('======this is: ' + this.title+ ' call by ' + callingTitle + '...');
    }
  },
  created: function () {
    const setI = setInterval(function () {
      console.log('666');
    }, 1000);

    this.$once('hook:beforeDestroy', function () {
      clearInterval(setI);
    });
  },
  mounted: function () {
    this.$refs.childCompRef.childFunc(this.title);
  }
}
</script>