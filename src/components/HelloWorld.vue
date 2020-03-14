<template>
  <div class="hello">
    <div id="container" class="allmapclass"></div>
  </div>
</template>

<script>
import BMap from "BMap";
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      defaultAnchor: "",
      defaultOffset: ""
    };
  },
  mounted() {
    this.createMap();
  },
  methods: {
    createMap() {
      // /* eslint-disable */
      // 创建Map实例
      var map = new BMap.Map("container");
      //
      var point = new BMap.Point(110.404, 45.915);
      // 初始化地图,设置中心点坐标和地图级别
      map.centerAndZoom(new BMap.Point(118.404, 45.915), 11);
      //创建标注
      var marker = new BMap.Marker(point);
      //创建标注二
      var marker2 = new BMap.Marker(new BMap.Point(118.404, 45.915));
      //将标注添加到地图
      map.addOverlay(marker);
      map.addOverlay(marker2);
      map.addOverlay(marker2);
      //添加控件
      map.addControl(new BMap.NavigationControl());
      map.addControl(new BMap.ScaleControl());
      //开启鼠标滚轮缩放
      map.enableScrollWheelZoom(true);
      //监听标注
      marker.addEventListener("click", function() {
        alert("您点击了标注");
      });
      //拖拽标签
      // marker.addEventListener("dragend", function(e) {
      //   alert("当前位置：" + e.point.lng + "," + e.point.lat);
      // });
      //添加折线
      var polyline = new BMap.Polyline(
        [new BMap.Point(116.399, 39.91), new BMap.Point(90.405, 30.92)],
        { strokeColor: "blue", strokeWeight: 6, strokeOpacity: 0.5 }
      );
      map.addOverlay(polyline);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.allmapclass {
  height: 500px;
}
</style>
