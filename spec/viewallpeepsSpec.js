'use strict'

describe("ViewAllPeeps", function() {
  var view

  beforeEach(function(){
    view = new ViewAllPeeps;
  });

  describe("listpeeps", function(){
    it("returns a list of strings from json data", function(){

      var json = [
    {
        "id": 46,
        "body": "woi",
        "created_at": "2018-09-23T12:20:04.944Z",
        "updated_at": "2018-09-23T12:20:04.944Z",
        "user": {
            "id": 268,
            "handle": "HJHJ"
        },
        "likes": []
    }]
    expect(view.listPeeps(json)).toEqual("<ul><li><div> HJHJ <br> woi</div></li></ul>")
    })
  });
})
