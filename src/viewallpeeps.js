(function(exports){
  function ViewAllPeeps(){
    this.peepArray = [];
  }

  ViewAllPeeps.prototype.returnPeeps = function(){
    fetch("https://chitter-backend-api.herokuapp.com/peeps")
    .then((resp) => resp.json())
    .then(data => {
      this.peepArray.push(data)
    })
    .catch((err) => console.log(err));
  };


  ViewAllPeeps.prototype.listPeeps = function() {
    this.returnPeeps();
    var array = this.peepArray
    var allPeeps = "pie"
    array.forEach(function(peep) {
      allPeeps += "pie"
    });
    allPeeps += "pie";
    console.log(allPeeps)
    return allPeeps;
  };

  exports.ViewAllPeeps = ViewAllPeeps;

})(this);
