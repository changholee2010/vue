<template>
  <div>
    <label><input type="radio" v-bind:value="radio1" v-model="picked">서울</label><br>
    <label><input type="radio" v-bind:value="radio2" v-model="picked">부산</label><br>
    <label><input type="radio" v-bind:value="radio3" v-model="picked">제주</label><br>
    <span>선택: {{picked}}</span>
  </div>
</template>

<script>
export default {
    data() {
        return {
          radio1: '서울',
          radio2: '부산',
          radio3: '제주',
          picked: '부산',
        }
    }
}
</script>