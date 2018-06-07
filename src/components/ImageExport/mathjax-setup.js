let mj2img;

window.MathJax = {
  jax: ["input/TeX", "output/SVG"],
  extensions: ["tex2jax.js", "MathMenu.js", "MathZoom.js"],
  showMathMenu: false,
  showProcessingMessages: false,
  messageStyle: "none",
  SVG: {
    useGlobalCache: false
  },
  TeX: {
    extensions: ["AMSmath.js", "AMSsymbols.js", "autoload-all.js"]
  },
  AuthorInit: function() {
    MathJax.Hub.Register.StartupHook("End", function() {
      console.log('Startup hook called')
      mj2img = function(texstring, callback) {
        console.log('texstring', texstring)
        var input = texstring;
        console.log('wrapper #1', wrapper)
        console.log('test', document.createElement("div"))
        var wrapper = document.createElement("div");
        console.log('wrapper', wrapper)
        wrapper.innerHTML = input;
        console.log('wrapper', wrapper)
        var output = { svg: "", img: ""};
        MathJax.Hub.Queue(["Typeset", MathJax.Hub, wrapper]);
        MathJax.Hub.Queue(function() {
          console.log('wrapper', wrapper)
          var mjOut = wrapper.getElementsByTagName("svg")[0];
          mjOut.setAttribute("xmlns", "http://www.w3.org/2000/svg");
          // thanks, https://spin.atomicobject.com/2014/01/21/convert-svg-to-png/
          output.svg = mjOut.outerHTML;
          var image = new Image();
          image.src = 'data:image/svg+xml;base64,' + window.btoa(unescape(encodeURIComponent(output.svg)));
          image.onload = function() {
            var canvas = document.createElement('canvas');
            canvas.width = image.width;
            canvas.height = image.height;
            var context = canvas.getContext('2d');
            context.drawImage(image, 0, 0);
            output.img = canvas.toDataURL('image/png');
            callback(output);
          };
        });
      }
      mj2img("\\[e=\\frac{mc^2}{2}\\]", function(output){
        console.log('here', output)
        //document.getElementById("target").innerHTML = output.svg;
      });
    });
  }
};

(function(d, script) {
  script = d.createElement('script');
  script.type = 'text/javascript';
  script.async = true;
  script.onload = function() {
    // remote script has loaded
  };
  script.src = 'https://cdn.mathjax.org/mathjax/latest/MathJax.js';
  d.getElementsByTagName('head')[0].appendChild(script);
}(document));

export default () => {
  return mj2img
}