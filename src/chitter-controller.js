(function(exports){
  function ChitterController(view = new ViewAllPeeps()){
    this.view = view
  }

  ChitterController.prototype.getsHtml = function(){
    document.getElementById("peeps").innerHTML = this.view.fetchPeeps();
  };

  exports.ChitterController = ChitterController;

})(this);
