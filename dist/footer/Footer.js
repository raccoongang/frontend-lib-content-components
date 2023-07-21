"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _lodashEs = _interopRequireDefault(require("lodash-es"));
var _i18n = require("@edx/frontend-platform/i18n");
var _paragon = require("@edx/paragon");
var _icons = require("@edx/paragon/icons");
var _messages = _interopRequireDefault(require("./messages"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
const Footer = _ref => {
  let {
    marketingBaseUrl,
    termsOfServiceUrl,
    privacyPolicyUrl,
    supportEmail,
    platformName,
    lmsBaseUrl,
    studioBaseUrl,
    showAccessibilityPage,
    // injected
    intl
  } = _ref;
  const [isOpen, setIsOpen] = (0, _react.useState)(false);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "m-0 row align-items-center justify-content-center",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "col border-top mr-2"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Button, {
        "data-testid": "helpToggleButton",
        variant: "outline-primary",
        onClick: () => setIsOpen(!isOpen),
        iconBefore: _icons.Help,
        iconAfter: isOpen ? _icons.ExpandLess : _icons.ExpandMore,
        size: "sm",
        children: isOpen ? intl.formatMessage(_messages.default.closeHelpButtonLabel) : intl.formatMessage(_messages.default.openHelpButtonLabel)
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "col border-top ml-2"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.TransitionReplace, {
      children: isOpen ? /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.ActionRow, {
        className: "py-4",
        "data-testid": "helpButtonRow",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.ActionRow.Spacer, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Button, {
          as: "a",
          href: "https://docs.edx.org/",
          size: "sm",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.edxDocumentationButtonLabel))
        }), platformName === 'edX' ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Button, {
          as: "a",
          href: "https://partners.edx.org/",
          size: "sm",
          "data-testid": "edXPortalButton",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.parnterPortalButtonLabel))
        }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Button, {
          as: "a",
          href: "https://open.edx.org/",
          size: "sm",
          "data-testid": "openEdXPortalButton",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.openEdxPortalButtonLabel))
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Button, {
          as: "a",
          href: "https://www.edx.org/course/edx101-overview-of-creating-an-edx-course#.VO4eaLPF-n1",
          size: "sm",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.edx101ButtonLabel))
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Button, {
          as: "a",
          href: "https://www.edx.org/course/studiox-creating-a-course-with-edx-studio",
          size: "sm",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.studioXButtonLabel))
        }), !_lodashEs.default.isEmpty(supportEmail) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Button, {
          as: "a",
          href: `mailto:${supportEmail}`,
          size: "sm",
          "data-testid": "contactUsButton",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.contactUsButtonLabel))
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.ActionRow.Spacer, {})]
      }, "help-link-button-row") : null
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.ActionRow, {
      className: "pt-3 px-4 m-0 x-small",
      children: ["\xA9 ", new Date().getFullYear(), " ", /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Hyperlink, {
        destination: marketingBaseUrl,
        target: "_blank",
        className: "ml-2",
        children: platformName
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.ActionRow.Spacer, {}), !_lodashEs.default.isEmpty(termsOfServiceUrl) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Hyperlink, {
        destination: termsOfServiceUrl,
        "data-testid": "termsOfService",
        children: intl.formatMessage(_messages.default.termsOfServiceLinkLabel)
      }), !_lodashEs.default.isEmpty(privacyPolicyUrl) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Hyperlink, {
        destination: privacyPolicyUrl,
        "data-testid": "privacyPolicy",
        children: intl.formatMessage(_messages.default.privacyPolicyLinkLabel)
      }), showAccessibilityPage && /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Hyperlink, {
        destination: `${studioBaseUrl}/accessibility`,
        "data-testid": "accessibilityRequest",
        children: intl.formatMessage(_messages.default.accessibilityRequestLinkLabel)
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Hyperlink, {
        destination: lmsBaseUrl,
        children: "LMS"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.ActionRow, {
      className: "mt-3 mx-4 pb-4 x-small",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.trademarkMessage)), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Hyperlink, {
        className: "ml-1",
        destination: "https://www.edx.org",
        children: "edX Inc"
      }), ".", /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.ActionRow.Spacer, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Hyperlink, {
        destination: "https://open.edx.org",
        className: "float-right",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Image, {
          width: "120px",
          alt: "Powered by Open edX",
          src: "https://logos.openedx.org/open-edx-logo-tag.png"
        })
      })]
    })]
  });
};
Footer.defaultProps = {
  marketingBaseUrl: null,
  termsOfServiceUrl: null,
  privacyPolicyUrl: null,
  spanishPrivacyPolicy: null,
  supportEmail: null
};
Footer.propTypes = {
  marketingBaseUrl: _propTypes.default.string,
  termsOfServiceUrl: _propTypes.default.string,
  privacyPolicyUrl: _propTypes.default.string,
  spanishPrivacyPolicy: _propTypes.default.string,
  supportEmail: _propTypes.default.string,
  platformName: _propTypes.default.string.isRequired,
  lmsBaseUrl: _propTypes.default.string.isRequired,
  studioBaseUrl: _propTypes.default.string.isRequired,
  showAccessibilityPage: _propTypes.default.bool.isRequired,
  // injected
  intl: _i18n.intlShape.isRequired
};
var _default = (0, _i18n.injectIntl)(Footer);
exports.default = _default;
//# sourceMappingURL=Footer.js.map