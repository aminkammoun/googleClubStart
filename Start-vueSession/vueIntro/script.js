new Vue({
  el: "#app",
  data: {
    message: "google club",
    tabs: ["one", "two", "three", "four"],
    outputText: "",
  },
  methods: {
    changeMsg() {
      this.message == "google club"
        ? (this.message = "new mesg")
        : (this.message = "google club");
    },
    ajouter() {
      if (this.outputText != "") {
        this.tabs.unshift(this.outputText);
      }
    },
  },
});
