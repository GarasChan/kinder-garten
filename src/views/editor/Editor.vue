<template>
  <div class="editor">
    <mavon-editor 
      :tabSize='2'
    />
  </div>
</template>
<script>
import { mavonEditor } from 'mavon-editor';
import 'mavon-editor/dist/css/index.css';
export default {
  name: "editor",
  components: {
    'mavon-editor': mavonEditor
  },
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>
.editor {
  width: 100%;
  height: 100%;

  & > div {
    width: 100%;
    height: 100%;
  }
}
</style>
