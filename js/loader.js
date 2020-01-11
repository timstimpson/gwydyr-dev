
function main() {

(function () {
   'use strict';
    document.onreadystatechange = () => {
      if (document.readyState === 'complete') {
        document.getElementById("loader").style.display = "none"
      }
    };

}());


}
main();