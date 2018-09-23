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
    var allPeeps = "<ul>";
    peepArray.forEach(function(peep) {
      allPeeps += `<li><div> ${peep.id}<li>${peep.body}</div></li>`
    });
    allPeeps += "</ul>";
    return document.getElementById("peeps").innerHTML = allPeeps
  };

  exports.ViewAllPeeps = ViewAllPeeps;

})(this);
