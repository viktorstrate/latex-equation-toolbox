let mj2img

window.MathJax = {
  AuthorInit: function() {
    console.log('Initialization')
  },
}

let loadListeners = []

// Thanks to Peter Krautzberger for his codepen https://codepen.io/pkra/details/PZLyQO
window.MathJax = {
  jax: ['input/TeX', 'output/SVG'],
  extensions: ['tex2jax.js', 'MathMenu.js', 'MathZoom.js'],
  showMathMenu: false,
  showProcessingMessages: false,
  messageStyle: 'none',
  SVG: {
    useGlobalCache: false,
  },
  TeX: {
    extensions: ['AMSmath.js', 'AMSsymbols.js', 'autoload-all.js'],
  },
  AuthorInit: function() {
    console.log('AuthorInit called')
    MathJax.Hub.Register.StartupHook('End', function() {
      mj2img = function(latex, callback) {
        let texstring = `\\[${latex}\\]`

        var input = texstring

        var wrapper = document.createElement('div')

        wrapper.innerHTML = input

        var output = { svg: '', img: '' }
        MathJax.Hub.Queue(['Typeset', MathJax.Hub, wrapper])
        MathJax.Hub.Queue(function() {
          var mjOut = wrapper.getElementsByTagName('svg')[0]

          if (typeof mjOut == 'undefined') {
            return
          }

          mjOut.setAttribute('xmlns', 'http://www.w3.org/2000/svg')

          // Example "22.676ex"
          let widthStr = mjOut.getAttribute('width')
          let heightStr = mjOut.getAttribute('height')

          let scale = 1.4

          if (widthStr) {
            let width = widthStr.substr(0, widthStr.length - 2)
            width = Number(width)
            mjOut.setAttribute('width', `${width * scale}ex`)
          }

          if (heightStr) {
            let height = heightStr.substr(0, heightStr.length - 2)
            height = Number(height)
            mjOut.setAttribute('height', `${height * scale}ex`)
          }

          // thanks, https://spin.atomicobject.com/2014/01/21/convert-svg-to-png/
          output.svg = mjOut.outerHTML
          var image = new Image()
          let svgData =
            'data:image/svg+xml;base64,' +
            window.btoa(unescape(encodeURIComponent(output.svg)))
          output.svgData = svgData
          image.src = svgData
          image.onload = function() {
            var canvas = document.createElement('canvas')
            if (image.width > 0 && image.height > 0) {
              canvas.width = image.width
              canvas.height = image.height
              var context = canvas.getContext('2d')
              context.drawImage(image, 0, 0)
              output.img = canvas.toDataURL('image/png')
            }
            callback(output)
          }
        })
      }

      for (let listener of loadListeners) {
        listener(mj2img)
      }

      loadListeners = []

      // mj2img("\\[e=\\frac{mc^2}{2}\\]", function (output) {
      //   console.log('here', output)
      //   //document.getElementById("target").innerHTML = output.svg;
      // });
    })
  },
}
;(function(d, script) {
  script = d.createElement('script')
  script.type = 'text/javascript'
  script.async = true
  script.onload = function() {
    // remote script has loaded
  }
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.4/MathJax.js'
  d.getElementsByTagName('head')[0].appendChild(script)
})(document)

// export default () => {
//   return mj2img
// }

export default () => {
  return new Promise(resolve => {
    if (mj2img === undefined) {
      loadListeners.push(resolve)
    } else {
      resolve(mj2img)
    }
  })
}
