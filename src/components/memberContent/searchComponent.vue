<template>
  <form action="#">
    <div class="type row">
      <p class="col-sm-2">點數查詢</p>
      <select name="" id="">
        <option value="P01">財富點</option>
        <option value="P02">自由點</option>
      </select>
    </div>
    <div class="time row">
      <p class="col-md-2">查詢區間</p>
      <label for="" class="col-sm-6 col-md-5 col-lg-4"
        >開始日期
        <vc-date-picker
          v-model="searchecord.strDate"
          :model-config="modelConfig"
        >
          <template v-slot="{ inputValue, inputEvents }">
            <input :value="inputValue" v-on="inputEvents" />
          </template>
        </vc-date-picker>
      </label>
      <label for="" class="col-12 col-sm-6 col-md-5 col-lg-4"
        >結束日期
        <vc-date-picker
          v-model="searchecord.endDate"
          :model-config="modelConfig"
        >
          <template v-slot="{ inputValue, inputEvents }">
            <input :value="inputValue" v-on="inputEvents" />
          </template>
        </vc-date-picker>
      </label>
    </div>
    <button class="first"><i class="fas fa-search"></i>查詢</button>
  </form>
</template>