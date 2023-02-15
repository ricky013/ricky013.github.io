var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.lastElementChild;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
  coll[i].addEventListener("mouseover", function() {
    var content = this.lastElementChild;
    if (!this.classList.contains("active") && content.style.maxHeight !== content.scrollHeight + "px") {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
  coll[i].addEventListener("mouseout", function() {
    var content = this.lastElementChild;
    if (!this.classList.contains("active")) {
      content.style.maxHeight = null;
    }
  });
}