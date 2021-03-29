<template>
  <div>
    <div class="top3">
      <span class="top3-title">TOP排行</span>
      <ul class="top3-list">
        <li>
          <icon name="canyin"></icon>
          <span>饮食</span><span>2021-3-29</span><span>300</span></li>
      </ul>
    </div>
  </div>
</template>

<script>

import icon from "../icon";

export default {
  name: "ranking",
  components: {

    icon
  },
 
}
</script>

<style scoped lang="scss">

.top3 {
  margin-top: 10px;
  padding: 0 16px;
  height: 100px;
  width: 100%;

  > .top3-title {

    display: block;
    width: 100%;
    color: #d9d8d8;
    margin-right: 20px;
    border-bottom: 1px solid #4e4d4d;
  }
}
.top3-list > li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  color: #bab5b5;

  > ::v-deep .icon {
    font-size: 30px;
  }
  > :last-child{
    min-width: 80px;
    text-align: end;
  }

}
</style>