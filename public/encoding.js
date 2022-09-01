/**
 * @description 这是一个补丁包。用来解决新引入的stomp中引用textEncoder和textDecoder在IE下不兼容的问题
 *              由于stomp源码中只使用了最基本的utf8编码，故可以用支持ie的 unescape 和 encodeURIComponent伪装该函数
 *
 */
(function (window) {
  if (undefined !== window.TextEncoder) { return }

  function _TextEncoder () {
    // --DO NOTHING
  }
  _TextEncoder.prototype.encode = function (s) {
    return unescape(encodeURIComponent(s)).split('').map(function (val) { return val.charCodeAt() })
  }
  function _TextDecoder () {
    // --DO NOTHING
  }
  _TextDecoder.prototype.decode = function (code_arr) {
    return decodeURIComponent(escape(String.fromCharCode.apply(null, code_arr)))
  }

  window.TextEncoder = _TextEncoder
  window.TextDecoder = _TextDecoder
})(this)
