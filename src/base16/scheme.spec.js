import schemes from "./schemes";

describe("scheme.js", () => {
  describe("arrayOfSchemes method", () => {
    it("should return an array of paths", done => {
      schemes()
        .then(files => {
          expect(Array.isArray(files)).toBe(true);
          done();
        })
        .catch(console.error);
    });

    it('should be a list of sh path is', function (done) {
      schemes()
        .then(files => {
          const allShellFiles = files.every(file => file.match(/\.sh$/))
          expect(allShellFiles).toBe(true);
          done()
        })
        .catch(console.error)
    })
  });
});
