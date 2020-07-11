let app = new Vue({
  el: "#app",
  data: {
    message: "皆さん、こんにちは!",
    url: "https://wings.msn.to/",
    flag: true,
    email: "Piyori-piyopiyo@gmail.com",
  },

  computed: {
    localEmail: function () {
      return this.email.split("@")[0].toLowerCase();
    },
  },

  methods: {
    localEmail2: function () {
      return this.email.split("@")[0].toUpperCase();
    },
  },
});

let app2 = new Vue({
  el: "#app2",
  data: {
    current: new Date().toLocaleDateString(),
  },
  computed: {
    // 算出プロパティ経由で乱数を取得
    randomc: function () {
      return Math.random();
    },
  },
  methods: {
    // クリック時に処理を実行
    onclick: function () {
      this.current = new Date().toLocaleString();
    },
    // メソッド経由で乱数を取得
    randomm: function () {
      return Math.random();
    },
  },
});
