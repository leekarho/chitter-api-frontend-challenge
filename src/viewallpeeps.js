(function(exports){
  function ViewAllPeeps(){
  }

  ViewAllPeeps.prototype.fetchPeeps = function(){
    fetch("https://chitter-backend-api.herokuapp.com/peeps")
    .then((resp) => resp.json())
    .then(data => {
      this.listPeeps(data)
    })
  };

  ViewAllPeeps.prototype.listPeeps = function(peepArray) {
    var allPeeps = "<ul><div";
    peepArray.forEach(function(peep) {
      allPeeps += ` id=${peep.id}><li>${peep.body}</li>`
    });
    allPeeps += "</div></ul>";
    return allPeeps;
  };

  exports.ViewAllPeeps = ViewAllPeeps;

})(this);
