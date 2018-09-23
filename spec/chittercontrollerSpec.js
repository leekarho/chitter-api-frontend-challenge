'use strict'

describe("ViewAllPeeps", function() {
  var controller

  beforeEach(function(){
    controller = new ChitterController;
  });

  describe("getsHtml", function(){
    it("sets getsElementById to that of the json data", function(){
      var view = new ViewAllPeeps;
      spyOn(view, 'fetchPeeps').and.returnValue("<ul><li><div> HJHJ <br> woi</div></li></ul>")
      var mockElement = { innerHTML: ""};
      expect(mockElement.innerHTML).toEqual("<ul><li><div> HJHJ <br> woi</div></li></ul>")
    });
  });
});
