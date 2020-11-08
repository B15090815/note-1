<template>
  <div>
    <div>
      <row>
        <Col :xs="{span: 18, offset: 3}" :sm="{span: 20, offset: 2}" :md="{span: 18, offset: 3}" :lg="{span: 8, offset: 8}">
          <div>hhhhhhh</div>
        </Col>
      </row>
    </div>
    <Button>okok</Button>
  </div>
</template>

<script>
import {Button, Col, Row} from 'ant-design-vue'
export default {
  components: {
    Button, Col, Row
  },
  name: 'Login',
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style scoped>

</style>
