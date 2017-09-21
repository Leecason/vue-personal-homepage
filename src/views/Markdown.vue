<template>
  <div class="markdown">
    <div class="lee-panel">
      <div class="heading">Markdown</div>
      <div class="content">
        <mavon-editor :value='content'></mavon-editor>
      </div>
    </div>
  </div>
</template>

<script type="javascript">
  import { mavonEditor } from 'mavon-editor'
  import 'mavon-editor/dist/css/index.css'
  export default {
    name: 'Markdown',
    components: {
      'mavon-editor': mavonEditor
    },
    data() {
      return {
        content: `
# Thanks for [mavonEditor](https://github.com/hinesboy/mavonEditor)
**mavonEditor:** A markdown editor based on Vue that supports a variety of personalized features
`
      }
    }
  }
</script>
