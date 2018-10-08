class Amazing {

    constructor(config = {}) {
        this.config = config;
        this.config.useClass = this.config.useClass || "amazing";
    }

    init() {
        var self = this;
        console.log("Amazing initiated");

        function isScrolledIntoView(el) {
            var rect = el.getBoundingClientRect();
            var elemTop = rect.top;
            var elemBottom = rect.bottom;
        
            var isVisible = elemTop < window.innerHeight && elemBottom >= 0;
            return isVisible;
        }
        
        function scroll() {
          var all_elements = document.querySelectorAll(`.${self.config.useClass}:not(.animated)`);
            all_elements.forEach((el)=>{
              if (el.classList.contains("animated"))
                    return true;
              if (isScrolledIntoView(el)) {
               //el.classList.add("animated");
               //el.style.visibility = "visible";
              }
            });
        }
        
        window.addEventListener("scroll", scroll);        
    }

}