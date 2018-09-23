(function(exports){
  function ChitterController(view = new ViewAllPeeps){
    this.view = view
  }

  ChitterController.prototype.getsHtml = function(element = document.getElementById("peeps")){
    element.innerHTML = this.view.fetchPeeps();
    // console.log(this.view.fetchPeeps())
  };

  exports.ChitterController = ChitterController;

})(this);
