import Vue from 'vue'
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import 'leaflet/dist/leaflet.css';


Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)

Vue.directive("numeric", {
    bind: function(el, binding, vnode) {
      var max_chars = binding.expression;
      let childData = el.querySelectorAll("input")[0];
      console.log(el, childData, max_chars)

      var handler = function(e) {
        let regex = /^[0-9]*$/
         if (!regex.test(el.value)) {
            el.value = el.value.slice(0, -1)
            }   
        if (e.target.value.length > max_chars) {
          e.target.value = e.target.value.substr(0, max_chars);
        }
      }; 
      childData.addEventListener("input", handler);
    }
  });

  Vue.directive('numeric-only', {  
    bind(el) {
        el.querySelectorAll("input")[0].addEventListener('keydown', (e) => {
            if ([46, 8, 9, 27, 13, 110, 190].indexOf(e.keyCode) !== -1 ||
                // Allow: Ctrl+A
                (e.keyCode === 65 && e.ctrlKey === true) ||
                // Allow: Ctrl+C
                (e.keyCode === 67 && e.ctrlKey === true) ||
                // Allow: Ctrl+X
                (e.keyCode === 88 && e.ctrlKey === true) ||
                // Allow: home, end, left, right
                (e.keyCode >= 35 && e.keyCode <= 39)) {
                // let it happen, don't do anything
                return
            }
            // Ensure that it is a number and stop the keypress
            if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
                e.preventDefault()
            }
        })
    }
  })
