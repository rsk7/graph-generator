import generate from "../src/graph-generator"

// not really unit tests
describe("random graphs", function() {
    for(let i = 0; i < 20; i++) {
        it("graph #" + i, function() {
            var graph = generate();
            console.log(graph);
        });
    }
});
