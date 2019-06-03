<template>
  <div class="about">
    <p>This is component with dynamic content</p>
    <pre>{{ content }}</pre>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'DynamicComponent',
  data() {
    return {
      content: '',
    };
  },
  beforeMount() {
    const { dataName } = this.$route.params;

    axios.get(`/data-${dataName}.json`)
      .then(({ data }) => {
        this.content = data.content;
      })
      .catch(() => {
        this.$router.replace('/404');
      });
  },
};
</script>

<style>
pre {
  display: inline-block;
  padding: 25px;
  font-size: 25px;
  border: 1px dotted #ccc;
}
</style>
