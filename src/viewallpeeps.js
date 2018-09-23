(function(exports){
  function ViewAllPeeps(){
  }

  ViewAllPeeps.prototype.fetchPeeps = function(api = "https://chitter-backend-api.herokuapp.com/peeps"){
    fetch(api)
    .then((resp) => resp.json())
    .then(data => {
      this.listPeeps(data)
    })
  };

  ViewAllPeeps.prototype.listPeeps = function(peepArray) {
    var allPeeps = "<ul>";
    peepArray.forEach(function(peep) {
      allPeeps += `<li><div> ${peep.user.handle} <br> ${peep.body}</div></li>`
    });
    allPeeps += "</ul>";
    console.log(allPeeps)
    return allPeeps
  };

  exports.ViewAllPeeps = ViewAllPeeps;

})(this);
