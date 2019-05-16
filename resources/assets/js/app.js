/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
var VueCodeMirror = require('vue-codemirror');


// global use
window.Vue.use(VueCodeMirror);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// Vue.component('example-component', require('./components/ExampleComponent.vue'));

// require active-line.js
require('codemirror/addon/selection/active-line.js');

// styleSelectedText
require('codemirror/addon/selection/mark-selection.js');
require('codemirror/addon/search/searchcursor.js');
// highlightSelectionMatches
require('codemirror/addon/scroll/annotatescrollbar.js');
require('codemirror/addon/search/matchesonscrollbar.js');
require('codemirror/addon/search/searchcursor.js');
require('codemirror/addon/search/match-highlighter.js');
// keyMap
require('codemirror/mode/clike/clike.js');
require('codemirror/addon/edit/matchbrackets.js');
require('codemirror/addon/comment/comment.js');
require('codemirror/addon/dialog/dialog.js');
require('codemirror/addon/dialog/dialog.css');
require('codemirror/addon/search/searchcursor.js');
require('codemirror/addon/search/search.js');
require('codemirror/keymap/sublime.js');
// foldGutter
require('codemirror/addon/fold/foldgutter.css');
require('codemirror/addon/fold/brace-fold.js');
require('codemirror/addon/fold/comment-fold.js');
require('codemirror/addon/fold/foldcode.js');
require('codemirror/addon/fold/foldgutter.js');
require('codemirror/addon/fold/indent-fold.js');
require('codemirror/addon/fold/markdown-fold.js');
require('codemirror/addon/fold/xml-fold.js');

require('codemirror/addon/hint/show-hint.js');
require('codemirror/addon/hint/html-hint.js');


require('codemirror/addon/edit/closetag.js');



const app = new Vue({
  el: '#app',
  data() {
    return {
      code: `<h1 class="text-center text-gray-900 mb-4 text-3xl font-bold">Welcome to Gusts</h1>
      <div class="p-4 bg-white text-gray-600 border rounded shadow text-center">
        <p>Gusts is a <a href="http://tailwindcss.com" class="no-underline text-teal-500 font-semibold" target="_blank">Tailwind Css</a> playground. Build something cool.</p>
      </div>`,
      editorOptions: {
        tabSize: 4,
        mode: 'text/html',
        extraKeys: {"Ctrl-Space": "autocomplete"},
        foldGutter: true,
        styleActiveLine: true,
        lineNumbers: true,
        line: true,
        keyMap: "sublime",
        theme: 'base16-dark',
        viewportMargin: Infinity,
        autoCloseTags: true,
        lineWrapping: true,
      }
    }
  },

  methods: {
    onEditorCursorActivity(codemirror) {
      console.log('onEditorCursorActivity', codemirror)
    },
    onEditorReady(codemirror) {
      console.log('onEditorReady', codemirror)
    },
    onEditorFocus(codemirror) {
      console.log('onEditorFocus', codemirror)
    },
    onEditorBlur(codemirror) {
      console.log('onEditorBlur', codemirror)
    }
  }
});
