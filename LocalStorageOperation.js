
function LocalStorageOperation(targetStorageKey) {
    this.Add = function (arr) {
       
      localStorage.setItem("targetStorageKey", JSON.stringify(arr));
     return arr
    } 
      this.GetData = function () {
        var retrievedElement = localStorage.getItem("targetStorageKey");
        if(retrievedElement != null ){
            arr =JSON.parse(retrievedElement);
        }
    }
    this.clear = function () {
        
     localStorage.clear();
     return '';
    } 
  }