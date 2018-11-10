import schemes from "./schemes";

describe("scheme.js", () => {
  describe("arrayOfSchemes method", () => {
    it("should return an array of paths", done => {
      schemes()
        .then(files => {
          console.log(files);
          expect(Array.isArray(files)).toBe(true);
          done();
        })
        .catch(console.error);
    });
  });
});
