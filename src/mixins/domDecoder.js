export default {
  methods: {
    domDecoder(str) {
      let parser = new DOMParser();
      let dom = parser.parseFromString(
        `<!doctype html><body>${str}`,
        "text/html"
      );
      return dom.body.textContent;
    }
  },
}
