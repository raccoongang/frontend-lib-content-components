"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uploader = exports.uploadEditor = exports.state = exports.postUploadRedirect = exports.onVideoUpload = exports.navigateTo = exports.fileValidator = exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _module = _interopRequireWildcard(require("./hooks"));
var _redux = require("../../data/redux");
var _store = _interopRequireDefault(require("../../data/store"));
var appHooks = _interopRequireWildcard(require("../../hooks"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const extToMime = {
  mp4: 'video/mp4',
  mov: 'video/quicktime'
};
const {
  navigateTo
} = appHooks;
exports.navigateTo = navigateTo;
const state = {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  loading: val => _react.default.useState(val),
  // eslint-disable-next-line react-hooks/rules-of-hooks
  errorMessage: val => _react.default.useState(val),
  // eslint-disable-next-line react-hooks/rules-of-hooks
  textInputValue: val => _react.default.useState(val)
};
exports.state = state;
const uploadEditor = () => {
  const [loading, setLoading] = _module.state.loading(false);
  const [errorMessage, setErrorMessage] = _module.state.errorMessage(null);
  return {
    loading,
    setLoading,
    errorMessage,
    setErrorMessage
  };
};
exports.uploadEditor = uploadEditor;
const uploader = () => {
  const [textInputValue, settextInputValue] = _module.state.textInputValue('');
  return {
    textInputValue,
    settextInputValue
  };
};
exports.uploader = uploader;
const postUploadRedirect = storeState => {
  const learningContextId = _redux.selectors.app.learningContextId(storeState);
  const blockId = _redux.selectors.app.blockId(storeState);
  return videoUrl => navigateTo(`/course/${learningContextId}/editor/video/${blockId}?selectedVideoUrl=${videoUrl}`);
};
exports.postUploadRedirect = postUploadRedirect;
const onVideoUpload = () => {
  const storeState = _store.default.getState();
  return _module.postUploadRedirect(storeState);
};
exports.onVideoUpload = onVideoUpload;
const getFileExtension = filename => filename.slice(Math.abs(filename.lastIndexOf('.') - 1) + 2);
const fileValidator = (setLoading, setErrorMessage, uploadVideo) => file => {
  const supportedFormats = Object.keys(extToMime);
  const ext = getFileExtension(file.name);
  const type = extToMime[ext] || '';
  const newFile = new File([file], file.name, {
    type
  });
  if (supportedFormats.includes(ext)) {
    uploadVideo({
      supportedFiles: [newFile],
      setLoadSpinner: setLoading,
      postUploadRedirect: onVideoUpload()
    });
  } else {
    const errorMsg = 'Video must be an MP4 or MOV file';
    setErrorMessage(errorMsg);
  }
};
exports.fileValidator = fileValidator;
var _default = {
  postUploadRedirect,
  uploadEditor,
  uploader,
  onVideoUpload,
  fileValidator
};
exports.default = _default;
//# sourceMappingURL=hooks.js.map