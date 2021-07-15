<template>
  <div class="block">
    <el-date-picker
      style="color:#000; width:100%; height:1rem; outline:none; background-color:transparent;"
      @input="x"
      v-model="dateRange"
      type="daterange"
      range-separator=""
      start-placeholder="Add dates"
    >
    </el-date-picker>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pickerOptions: {},
      dateRange: "",
    };
  },
  methods: {
    x() {
      console.log(this.dateRange);
    },
  },
};
</script>
