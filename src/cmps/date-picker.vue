<template>
  <div class="block date">
    <el-date-picker
      style="color:#000;"
      @input="x"
      v-model="dateRange"
      type="daterange"
      range-separator=""
      start-placeholder="Add dates"
      end-placeholder="Add dates"
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
