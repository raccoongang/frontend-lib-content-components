"use strict";

var hooks = _interopRequireWildcard(require("./hooks"));
var _testUtils = require("../../../testUtils");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const state = new _testUtils.MockUseState(hooks);
const setLoading = jest.fn();
const setErrorMessage = jest.fn();
const uploadVideo = jest.fn();
describe('Video Upload Editor hooks', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  describe('state hooks', () => {
    state.testGetter(state.keys.loading);
    state.testGetter(state.keys.errorMessage);
    state.testGetter(state.keys.textInputValue);
  });
  describe('using state', () => {
    beforeEach(() => {
      state.mock();
    });
    afterEach(() => {
      state.restore();
    });
    describe('Hooks for Video Upload', () => {
      beforeEach(() => {
        hooks.uploadEditor();
        hooks.uploader();
      });
      it('initialize state with correct values', () => {
        expect(state.stateVals.loading).toEqual(false);
        expect(state.stateVals.errorMessage).toEqual(null);
        expect(state.stateVals.textInputValue).toEqual('');
      });
    });
  });
  describe('File Validation', () => {
    it('Checks with valid MIME type', () => {
      const file = new File(['(⌐□_□)'], 'video.mp4', {
        type: 'video/mp4'
      });
      const validator = hooks.fileValidator(setLoading, setErrorMessage, uploadVideo);
      validator(file);
      expect(uploadVideo).toHaveBeenCalled();
      expect(setErrorMessage).not.toHaveBeenCalled();
    });
    it('Checks with invalid MIME type', () => {
      const file = new File(['(⌐□_□)'], 'video.gif', {
        type: 'video/mp4'
      });
      const validator = hooks.fileValidator(setLoading, setErrorMessage, uploadVideo);
      validator(file);
      expect(uploadVideo).not.toHaveBeenCalled();
      expect(setErrorMessage).toHaveBeenCalled();
    });
  });
});
//# sourceMappingURL=hooks.test.js.map