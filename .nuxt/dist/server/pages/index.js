exports.ids = [4];
exports.modules = {

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(27);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("5cf8f45d", content, true, context)
};

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5a277b13_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5a277b13_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5a277b13_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5a277b13_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5a277b13_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "body{font-family:Poppins}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=5a277b13&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: ""
  }, [_vm._ssrNode("<nav class=\"bg-slate-900 text-white w-full lg:px-32 px-4 py-4 mx-auto md:flex md:justify-between md:items-center fixed-top\"><div class=\"flex items-center justify-between w-full\"><h1 class=\"font-bold text-white hover:scale-110 duration-300 transition-all hover:text-blue-400\">\n        Alvinn_t.ahmd\n      </h1> <div class=\"flex md:hidden\"><button type=\"button\" class=\"text-white hover:text-gray-400 focus:outline-none\"><svg viewBox=\"0 0 24 24\" class=\"w-6 h-6 fill-current\"><path fill-rule=\"evenodd\" d=\"M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z\"></path></svg></button></div></div> <ul" + _vm._ssrClass("scroll-smooth flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0", _vm.showMenu ? 'flex' : 'hidden') + "><li class=\"font-bold text-white hover:scale-110 duration-300 transition-all hover:text-blue-400\"><a href=\"#home\">Home</a></li> <li class=\"font-bold text-white hover:scale-110 mx-2 duration-300 transition-all hover:text-blue-400\"><a href=\"#about\">About</a></li> <li class=\"font-bold text-white hover:scale-110 mx-2 duration-300 transition-all hover:text-blue-400\"><a href=\"#projek\">Portfolio</a></li> <li class=\"font-bold text-white hover:scale-110 mx-2 duration-300 transition-all hover:text-blue-400\"><a href=\"#skill\">Skill</a></li> <li class=\"font-bold text-white hover:scale-110 mx-2 duration-300 transition-all hover:text-blue-400\"><a href=\"#kontak\">Contact</a></li></ul></nav> <div class=\"flex md:hidden\"><button type=\"button\" aria-label=\"toggle menu\" class=\"text-white focus:outline-none\"></button></div> <section id=\"home\" class=\"translate-y-6 bg-slate-900\"><div class=\"container\"><div class=\"flex flex-wrap\"><div data-aos=\"zoom-in\" data-aos-duration=\"5000 \" class=\"w-full self-center pr-4 pl-16 lg:w-1/2 sm:w-10 md:w-1/2\"><h1 class=\"pt-12 text-base font-semibold text-white md:text-xl\">Hallo Semua👋,\n              Saya <span class=\"block font-bold text-blue-400 text-xl mt-1 md:text-4xl\"> Alvin Top Ahmad Djaelani</span></h1> <p class=\"font-medium text-white mb-10 text-sm\">\n              Designing, Developing, and Delivering Web Excellence for into Seamless Digital Experiences\n            </p> <a href=\"https://wa.me/628884845979\" class=\"text-base font-semibold text-white bg-blue-400 py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition-all duration-300 ease-in-out\">Hubungi Saya\n          </a></div> <div data-aos=\"zoom-in\" data-aos-duration=\"5000\" class=\"w-full self-end px-4 lg:w-1/2 sm:w-8 md:w-1/2\"><div class=\"relative mt-10 lg:mt-9 lg:right-0\"><img src=\"/botak.png\" alt class=\"max-w-full mx-auto\"></div></div></div></div></section> <section id=\"about\" class=\"pt-36 pb-32 bg-slate-800\"><div class=\"container\"><div><div data-aos=\"fade-down\" data-aos-easing=\"linear\" data-aos-duration=\"3000\" class=\"w-full px-4 mb-10\"><h4 class=\"text-blue-400 font-bold uppercase mb-5\">about me</h4> <p class=\"font-medium text-white textsme max-w-4xl lg:text-lg\">\n            I believe that the user interface is the linchpin of the online experience, and I am dedicated to creating web experiences that are engaging, responsive, and easy to use. I have 1 experience in the world of web development and have been involved in various projects that combine the latest technology with attractive designs.\n          </p> <p class=\"pt-4 font-medium text-white text-sm max-w-4xl lg:text-lg\">\n            Additionally, I enjoy learning and continuing to develop my skills. I am always looking for opportunities to keep up with the latest web technologies and contribute to challenging projects.I believe that strong collaboration and good communication are the keys to success in web development. I'm ready to work with your team to create amazing front-end solutions.\n          </p></div></div></div></section> <section id=\"projek\" class=\"pt-36 pb-16 bg-slate-900\"><div class=\"container\"><div class=\"w-full px-4\"><div data-aos=\"fade-up\" data-aos-duration=\"3000\" class=\"max-w-xl mx-auto text-center mb-16\"><h4 class=\"font-semibold text-lg text-blue-400 mb-4 font-[Lora]\">project results</h4> <p class=\"font-medium text-md text-white font-[poppins]\">\n            I am proud to present my latest successfully completed project. In this project, we managed to achieve success with many uses in society. We are confident that this project will be very beneficial for society and contribute to technological change that is very fast and easily accepted by all levels of society\n          </p> <p class=\"pt-4 font-medium text-md text-white\">\n            If you want to know more about this project or have any questions, please feel free to contact me. Thank you for your support!\n          </p></div></div> <div class=\"w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto\"><div data-aos=\"flip-right\" data-aos-easing=\"ease-out-cubic\" data-aos-duration=\"2000\" class=\"mb-12 p-4 md:w-1/2\"><div class=\"rounded-md shadow-md overflow-hidden hover:scale-110 transition-all duration-300 ease-in-out\"><img src=\"/moviie.png\" alt width=\"w-full\"></div> <h3 class=\"font-semibold text-xl text-white mt-5 mb-3\">Movie-app</h3> <p class=\"fontt-medium text-base text-white\">\n            I proudly present Movie App, my personal project that allows you to easily browse and explore the world of movies. With powerful search features, user reviews, and intelligent recommendations, Movie App is a loyal companion for movie lovers. Find, save and share your favorite movies with this app.\n          </p> <a href=\"https://anayaamovie.vercel.app/\" target=\"blank\" class=\"fontt-medium text-Xl text-blue-500\">\n            Demo\n          </a></div> <div data-aos=\"flip-left\" data-aos-easing=\"ease-out-cubic\" data-aos-duration=\"2000\" class=\"mb-12 p-4 md:w-1/2\"><div class=\"rounded-md shadow-md overflow-hidden hover:scale-110 transition-all duration-300 ease-in-out\"><img src=\"/psk.png\" alt width=\"w-full\"></div> <h3 class=\"font-semibold text-xl text-white mt-5 mb-3\">Persik APP</h3> <p class=\"fontt-medium text-base text-white font-[]\">\n            Persikk-app is a mobile application created to make it easier for users to find information on match schedules and Persikk match history. This application presents various interesting features such as match schedules, match history, as well as match highlights from Persik. With Persikk-app, users can easily manage peach schedules online\n          </p> <a href=\"https://persikapp.vercel.app/\" target=\"blank\" class=\"fontt-medium text-Xl text-blue-500\">\n            Demo\n          </a></div> <div data-aos=\"flip-right\" data-aos-easing=\"ease-out-cubic\" data-aos-duration=\"2000\" class=\"mb-12 p-4 md:w-1/2\"><div class=\"rounded-md shadow-md overflow-hidden hover:scale-110 transition-all duration-300 ease-in-out\"><img src=\"/todo.png\" alt width=\"w-full\"></div> <h3 class=\"font-semibold text-xl text-white mt-5 mb-3\">Nuxt js Rest api Todo list</h3> <p class=\"fontt-medium text-base text-white\">\n            Nuxt js Rest api Todo list is a web application developed using Nuxt.js and Rest API technology. This app is designed to create a simple to-do list. The features available in this application include adding, editing, and deleting tasks from the list. With Nuxt js Rest api Todo list, users can manage their schedules and tasks in an efficient and organized manner.\n          </p> <a href=\"https://nuxtapitodo.vercel.app/\" target=\"blank\" class=\"fontt-medium text-Xl text-blue-500\">\n              Demo\n            </a></div></div></div></section> <section id=\"skill\" class=\"pt-36 pb-32 bg-slate-800\"><div class=\"container\"><div class=\"w-full px-4\"><div data-aos=\"fade-down\" duration=\"3000\" data-aos-easing=\"linear\" class=\"mx-auto text-center mb-16\"><h4 class=\"font-semibold text-lg text-blue-400 mb-2 font-[Lora]\">Skill</h4></div></div> <div class=\"w-full px-4\"><div class=\"flex flex-wrap items-center justify-center\"><div data-aos=\"flip-right\" data-aos-duration=\"3000\" class=\"max-w-[120px] mx-4 py-4 transition-all duration-500 lg:mx-6 xl:mx-8\"><p class=\"text-white text-center font-semibold text-base\"> Html</p> <svg stroke=\"currentColor\" fill=\"currentColor\" stroke-width=\"0\" role=\"img\" viewBox=\"0 0 24 24\" height=\"100%\" width=\"100%\" xmlns=\"http://www.w3.org/2000/svg\" class=\"text-orange-500\"><title></title><path d=\"M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z\"></path></svg></div> <div data-aos=\"flip-left\" data-aos-duration=\"3000\" class=\"max-w-[120px] mx-4 py-4 transition-all duration-500 lg:mx-6 xl:mx-8\"><p class=\"text-white text-center font-semibold text-base\"> Css</p> <svg stroke=\"currentColor\" fill=\"currentColor\" stroke-width=\"0\" role=\"img\" viewBox=\"0 0 24 24\" height=\"100%\" width=\"100%\" xmlns=\"http://www.w3.org/2000/svg\" class=\"text-blue-500\"><title></title><path d=\"M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z\"></path></svg></div> <div data-aos=\"flip-left\" data-aos-duration=\"3000\" class=\"max-w-[120px] mx-4 py-4 transition-all duration-500 lg:mx-6 xl:mx-8\"><p class=\"text-white text-center font-semibold text-base\"> Bootstrap</p> <svg stroke=\"currentColor\" fill=\"currentColor\" stroke-width=\"0\" viewBox=\"0 0 16 16\" height=\"100%\" width=\"100%\" xmlns=\"http://www.w3.org/2000/svg\" class=\"text-purple-500\"><path d=\"M6.375 7.125V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23H6.375zm0 3.762h1.898c1.184 0 1.81-.48 1.81-1.377 0-.885-.65-1.348-1.886-1.348H6.375v2.725z\"></path><path d=\"M4.002 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4h-8zm1.06 12V3.545h3.399c1.587 0 2.543.809 2.543 2.11 0 .884-.65 1.675-1.483 1.816v.1c1.143.117 1.904.931 1.904 2.033 0 1.488-1.084 2.396-2.888 2.396H5.062z\"></path></svg></div> <div data-aos=\"flip-left\" data-aos-duration=\"3000\" class=\"max-w-[120px] mx-4 py-4 transition-all duration-500 lg:mx-6 xl:mx-8\"><p class=\"text-white text-center font-semibold text-base\"> Tailwind css</p> <svg stroke=\"currentColor\" fill=\"currentColor\" stroke-width=\"0\" role=\"img\" viewBox=\"0 0 24 24\" height=\"100%\" width=\"100%\" xmlns=\"http://www.w3.org/2000/svg\" class=\"text-cyan-300\"><title></title><path d=\"M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z\"></path></svg></div> <div data-aos=\"flip-left\" data-aos-duration=\"3000\" class=\"max-w-[120px] mx-4 py-4 transition-all duration-500 lg:mx-6 xl:mx-8\"><p class=\"text-white text-center font-semibold text-base\">Javascript</p> <svg stroke=\"currentColor\" fill=\"currentColor\" stroke-width=\"0\" role=\"img\" viewBox=\"0 0 24 24\" height=\"100%\" width=\"100%\" xmlns=\"http://www.w3.org/2000/svg\" class=\"text-yellow-400\"><title></title><path d=\"M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z\"></path></svg></div> <div data-aos=\"flip-left\" data-aos-duration=\"3000\" class=\"max-w-[120px] mx-4 py-4 transition-all duration-500 lg:mx-6 xl:mx-8\"><p class=\"text-white text-center font-semibold text-base\"> Nuxtjs</p> <svg stroke=\"currentColor\" fill=\"currentColor\" stroke-width=\"0\" role=\"img\" viewBox=\"0 0 24 24\" height=\"100%\" width=\"100%\" xmlns=\"http://www.w3.org/2000/svg\" class=\"text-green-600\"><title></title><path d=\"M13.4642 19.8295h8.9218c.2834 0 .5618-.0723.8072-.2098a1.5899 1.5899 0 0 0 .5908-.5732 1.5293 1.5293 0 0 0 .216-.783 1.529 1.529 0 0 0-.2167-.7828L17.7916 7.4142a1.5904 1.5904 0 0 0-.5907-.573 1.6524 1.6524 0 0 0-.807-.2099c-.2833 0-.5616.0724-.807.2098a1.5904 1.5904 0 0 0-.5907.5731L13.4642 9.99l-2.9954-5.0366a1.5913 1.5913 0 0 0-.591-.573 1.6533 1.6533 0 0 0-.8071-.2098c-.2834 0-.5617.0723-.8072.2097a1.5913 1.5913 0 0 0-.591.573L.2168 17.4808A1.5292 1.5292 0 0 0 0 18.2635c-.0001.2749.0744.545.216.783a1.59 1.59 0 0 0 .5908.5732c.2454.1375.5238.2098.8072.2098h5.6003c2.219 0 3.8554-.9454 4.9813-2.7899l2.7337-4.5922L16.3935 9.99l4.3944 7.382h-5.8586ZM7.123 17.3694l-3.9083-.0009 5.8586-9.8421 2.9232 4.921-1.9572 3.2892c-.7478 1.1967-1.5972 1.6328-2.9163 1.6328z\"></path></svg></div> <div data-aos=\"flip-left\" data-aos-duration=\"3000\" class=\"max-w-[120px] mx-4 py-4 transition-all duration-500 lg:mx-6 xl:mx-8\"><p class=\"text-white text-center font-semibold text-base\"> Vue js</p> <svg stroke=\"currentColor\" fill=\"currentColor\" stroke-width=\"0\" role=\"img\" viewBox=\"0 0 24 24\" height=\"100%\" width=\"100%\" xmlns=\"http://www.w3.org/2000/svg\" class=\"text-green-500\"><path d=\"M24,1.61H14.06L12,5.16,9.94,1.61H0L12,22.39ZM12,14.08,5.16,2.23H9.59L12,6.41l2.41-4.18h4.43Z\"></path></svg></div></div></div></div></section> <section id=\"kontak\" class=\"pt-36 pb-32 bg-slate-900\"><div class=\"container\"><div class=\"w-full px-4\"><div class=\"max-w-xl mx-auto text-center mb-16\"><h4 class=\"font-semibold text-lg text-blue-400 mb-2 font-[Lora]\">Contack</h4></div></div> <form><div class=\"w-full lg:w-2/3 lg:mx-auto\"><div class=\"w-full px-4 mb-8\"><label for=\"name\" class=\"text-base font-bold text-blue-400\">Nama</label> <input type=\"text\" id=\"name\"" + _vm._ssrAttr("value", _vm.nama) + " class=\"w-full bg-slate-200 text-slate-600 font-normal p-3 rounded-md focus:outline-none focus:ring-teal-500 focus:ring-1 focus:border-teal-500\"></div> <div class=\"w-full px-4 mb-8\"><label for=\"pesan\" class=\"text-base font-bold text-blue-400\">Pesan</label> <textarea type=\"text\" id=\"name\" class=\"w-full bg-slate-200 text-slate-600 font-normal p-3 rounded-md focus:outline-none focus:ring-teal-500 focus:ring-1 focus:border-teal-500 h-32\">" + _vm._ssrEscape(_vm._s(_vm.area)) + "</textarea></div> <div class=\"w-full px-4\"><a" + _vm._ssrAttr("href", `mailto:alvinahmd1@gmail.com?subject=Halo&body=Halo, saya ${_vm.nama}\n${_vm.area}`) + " target=\"_blank\" class=\"text-base font-semibold text-white bg-teal-500 py-3 px-8 rounded-full w-full hover:opacity-80 hover:shadow-lg transition-all duration-500\">Kirim</a></div></div></form></div></section> <footer class=\"bg-slate-800\"><div class=\"container\"><div class=\"w-full text-center py-10 border-t border-white\"><p class=\"font-medium text-slate-400 text-center\">copyright<a href=\"https://www.instagram.com/alvinn_t.ahmd/\" target=\"blank\" class=\"font-bold text-blue-400\"> by Alvinn_t.ahmdd</a></p> <div class=\"w-10 h-10 bg-sky-300 rounded-full flex fixed bottom-5 right-5 cursor-pointer scroll-smooth\"><a href=\"/\" class=\"text-xl m-auto\">🫰</a></div></div></div></footer>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=5a277b13&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  data() {
    return {
      nama: null,
      email: null,
      area: null,
      showMenu: false
    };
  },
  methods: {
    toggleNav: function () {
      this.showMenu = !this.showMenu;
    }
  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(26)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "dca82e50"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map