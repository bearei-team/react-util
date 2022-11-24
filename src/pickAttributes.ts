export interface PickHTMLAttributesConfig {
  aria?: boolean;
  data?: boolean;
  attribute?: boolean;
}

export const pickHTMLAttributes = (
  props: Record<string, unknown>,
  config = {
    aria: true,
    data: true,
    attribute: true,
  } as PickHTMLAttributesConfig,
) => {
  const attributes = [
    'accept',
    'acceptCharset',
    'action',
    'allowFullScreen',
    'allowTransparency',
    'alt',
    'as',
    'async',
    'autoComplete',
    'autoFocus',
    'autoPlay',
    'capture',
    'cellPadding',
    'cellSpacing',
    'charSet',
    'challenge',
    'checked',
    'cite',
    'classID',
    'cols',
    'colSpan',
    'content',
    'controls',
    'coords',
    'crossOrigin',
    'data',
    'dateTime',
    'default',
    'defer',
    'disabled',
    'download',
    'encType',
    'form',
    'formAction',
    'formEncType',
    'formMethod',
    'formNoValidate',
    'formTarget',
    'frameBorder',
    'headers',
    'height',
    'high',
    'href',
    'hrefLang',
    'htmlFor',
    'httpEquiv',
    'integrity',
    'keyParams',
    'keyType',
    'kind',
    'label',
    'list',
    'loop',
    'low',
    'manifest',
    'marginHeight',
    'marginWidth',
    'max',
    'maxLength',
    'media',
    'mediaGroup',
    'method',
    'min',
    'minLength',
    'multiple',
    'muted',
    'name',
    'noValidate',
    'open',
    'optimum',
    'pattern',
    'placeholder',
    'playsInline',
    'poster',
    'preload',
    'readOnly',
    'rel',
    'required',
    'reversed',
    'rows',
    'rowSpan',
    'sandbox',
    'scope',
    'scoped',
    'scrolling',
    'seamless',
    'selected',
    'shape',
    'size',
    'sizes',
    'span',
    'src',
    'srcDoc',
    'srcLang',
    'srcSet',
    'start',
    'step',
    'summary',
    'target',
    'type',
    'useMap',
    'value',
    'width',
    'wmode',
    'wrap',
  ];

  const events = [
    'onCopy',
    'onCopyCapture',
    'onCut',
    'onCutCapture',
    'onPaste',
    'onPasteCapture',
    'onCompositionEnd',
    'onCompositionEndCapture',
    'onCompositionStart',
    'onCompositionStartCapture',
    'onCompositionUpdate',
    'onCompositionUpdateCapture',
    'onFocus',
    'onFocusCapture',
    'onBlur',
    'onBlurCapture',
    'onChange',
    'onChangeCapture',
    'onBeforeInput',
    'onBeforeInputCapture',
    'onInput',
    'onInputCapture',
    'onReset',
    'onResetCapture',
    'onSubmit',
    'onSubmitCapture',
    'onInvalid',
    'onInvalidCapture',
    'onLoad',
    'onLoadCapture',
    'onError',
    'onErrorCapture',
    'onKeyDown',
    'onKeyDownCapture',
    'onKeyPress',
    'onKeyPressCapture',
    'onKeyUp',
    'onKeyUpCapture',
    'onAbort',
    'onAbortCapture',
    'onCanPlay',
    'onCanPlayCapture',
    'onCanPlayThrough',
    'onCanPlayThroughCapture',
    'onDurationChange',
    'onDurationChangeCapture',
    'onEmptied',
    'onEmptiedCapture',
    'onEncrypted',
    'onEncryptedCapture',
    'onEnded',
    'onEndedCapture',
    'onLoadedData',
    'onLoadedDataCapture',
    'onLoadedMetadata',
    'onLoadedMetadataCapture',
    'onLoadStart',
    'onLoadStartCapture',
    'onPause',
    'onPauseCapture',
    'onPlay',
    'onPlayCapture',
    'onPlaying',
    'onPlayingCapture',
    'onProgress',
    'onProgressCapture',
    'onRateChange',
    'onRateChangeCapture',
    'onResize',
    'onResizeCapture',
    'onSeeked',
    'onSeekedCapture',
    'onSeeking',
    'onSeekingCapture',
    'onStalled',
    'onStalledCapture',
    'onSuspend',
    'onSuspendCapture',
    'onTimeUpdate',
    'onTimeUpdateCapture',
    'onVolumeChange',
    'onVolumeChangeCapture',
    'onWaiting',
    'onWaitingCapture',
    'onAuxClick',
    'onAuxClickCapture',
    'onClick',
    'onClickCapture',
    'onContextMenu',
    'onContextMenuCapture',
    'onDoubleClick',
    'onDoubleClickCapture',
    'onDrag',
    'onDragCapture',
    'onDragEnd',
    'onDragEndCapture',
    'onDragEnter',
    'onDragEnterCapture',
    'onDragExit',
    'onDragExitCapture',
    'onDragLeave',
    'onDragLeaveCapture',
    'onDragOver',
    'onDragOverCapture',
    'onDragStart',
    'onDragStartCapture',
    'onDrop',
    'onDropCapture',
    'onMouseDown',
    'onMouseDownCapture',
    'onMouseEnter',
    'onMouseLeave',
    'onMouseMove',
    'onMouseMoveCapture',
    'onMouseOut',
    'onMouseOutCapture',
    'onMouseOver',
    'onMouseOverCapture',
    'onMouseUp',
    'onMouseUpCapture',
    'onSelect',
    'onSelectCapture',
    'onTouchCancel',
    'onTouchCancelCapture',
    'onTouchEnd',
    'onTouchEndCapture',
    'onTouchMove',
    'onTouchMoveCapture',
    'onTouchStart',
    'onTouchStartCapture',
    'onPointerDown',
    'onPointerDownCapture',
    'onPointerMove',
    'onPointerMoveCapture',
    'onPointerUp',
    'onPointerUpCapture',
    'onPointerCancel',
    'onPointerCancelCapture',
    'onPointerEnter',
    'onPointerEnterCapture',
    'onPointerLeave',
    'onPointerLeaveCapture',
    'onPointerOver',
    'onPointerOverCapture',
    'onPointerOut',
    'onPointerOutCapture',
    'onGotPointerCapture',
    'onGotPointerCaptureCapture',
    'onLostPointerCapture',
    'onLostPointerCaptureCapture',
    'onScroll',
    'onScrollCapture',
    'onWheel',
    'onWheelCapture',
    'onAnimationStart',
    'onAnimationStartCapture',
    'onAnimationEnd',
    'onAnimationEndCapture',
    'onAnimationIteration',
    'onAnimationIterationCapture',
    'onTransitionEnd',
    'onTransitionEndCapture',
  ];

  const allProps = [...attributes, ...events];
  const ariaPrefix = 'aria-';
  const dataPrefix = 'data-';
  const attrs = {} as Record<string, unknown>;

  const matchPrefix = (key: string, prefix: string) => key.startsWith(prefix);

  Object.entries(props).forEach(([key, value]) => {
    const aria =
      (config.aria && key === 'role') || matchPrefix(key, ariaPrefix);

    const data = config.data && matchPrefix(key, dataPrefix);
    const attr = config.attribute && allProps.includes(key);

    (aria || data || attr) && Object.assign(attrs, {[key]: value});
  });

  return attrs;
};

export const pickNativeAttributes = (props: Record<string, unknown>) => {
  const attributes = [
    'animating',
    'color',
    'hidesWhenStopped',
    'size',
    'title',
    'accessibilityLabel',
    'accessibilityLanguage',
    'accessibilityActions',
    'disabled',
    'hasTVPreferredFocus',
    'nextFocusDownAndroid',
    'nextFocusForwardAndroid',
    'nextFocusLeftAndroid',
    'nextFocusRightAndroid',
    'nextFocusUpAndroid',
    'testID',
    'touchSoundDisabled',
    'renderItem',
    'data',
    'ItemSeparatorComponent',
    'ListEmptyComponent',
    'ListFooterComponent',
    'ListFooterComponentStyle',
    'ListHeaderComponent',
    'ListHeaderComponentStyle',
    'columnWrapperStyle',
    'extraData',
    'getItemLayout',
    'horizontal',
    'initialNumToRender',
    'initialScrollIndex',
    'inverted',
    'keyExtractor',
    'numColumns',
    'progressViewOffset',
    'refreshing',
    'removeClippedSubviews',
    'viewabilityConfig',
    'viewabilityConfigCallbackPairs',
    'accessible',
    'alt',
    'blurRadius',
    'capInsets',
    'crossOrigin',
    'defaultSource',
    'fadeDuration',
    'height',
    'loadingIndicatorSource',
    'objectFit',
    'progressiveRenderingEnabled',
    'resizeMethod',
    'referrerPolicy',
    'resizeMode',
    'source',
    'src',
    'srcSet',
    'style',
    'tintColor',
    'width',
    'imageStyle',
    'imageRef',
    'behavior',
    'contentContainerStyle',
    'enabled',
    'keyboardVerticalOffset',
    'animated',
    'animationType',
    'hardwareAccelerated',
    'presentationStyle',
    'statusBarTranslucent',
    'supportedOrientations',
    'transparent',
    'visible',
    'android_disableSound',
    'android_ripple',
    'children',
    'unstable_pressDelay',
    'delayLongPress',
    'hitSlop',
    'pressRetentionOffset',
    'testOnly_pressed',
    'colors',
    'progressBackgroundColor',
    'titleColor',
    'StickyHeaderComponent',
    'alwaysBounceHorizontal',
    'alwaysBounceVertical',
    'automaticallyAdjustContentInsets',
    'automaticallyAdjustKeyboardInsets',
    'automaticallyAdjustsScrollIndicatorInsets',
    'bounces',
    'bouncesZoom',
    'canCancelContentTouches',
    'centerContent',
    'contentInset',
    'contentInsetAdjustmentBehavior',
    'contentOffset',
    'decelerationRate',
    'directionalLockEnabled',
    'disableIntervalMomentum',
    'disableScrollViewPanResponder',
    'endFillColor',
    'fadingEdgeLength',
    'indicatorStyle',
    'invertStickyHeaders',
    'keyboardDismissMode',
    'keyboardShouldPersistTaps',
    'maintainVisibleContentPosition',
    'maximumZoomScale',
    'minimumZoomScale',
    'nestedScrollEnabled',
    'overScrollMode',
    'pagingEnabled',
    'persistentScrollbar',
    'pinchGestureEnabled',
    'refreshControl',
    'scrollEnabled',
    'scrollEventThrottle',
    'scrollIndicatorInsets',
    'scrollPerfTag',
    'scrollToOverflowEnabled',
    'scrollsToTop',
    'showsHorizontalScrollIndicator',
    'showsVerticalScrollIndicator',
    'snapToAlignment',
    'snapToEnd',
    'snapToInterval',
    'snapToOffsets',
    'snapToStart',
    'stickyHeaderHiddenOnScroll',
    'stickyHeaderIndices',
    'zoomScale',
    'sections',
    'renderSectionFooter',
    'renderSectionHeader',
    'SectionSeparatorComponent',
    'stickySectionHeadersEnabled',
    'backgroundColor',
    'barStyle',
    'hidden',
    'networkActivityIndicatorVisible',
    'showHideTransition',
    'translucent',
    'ios_backgroundColor',
    'thumbColor',
    'trackColor',
    'value',
    'accessibilityHint',
    'accessibilityRole',
    'accessibilityState',
    'adjustsFontSizeToFit',
    'allowFontScaling',
    'android_hyphenationFrequency',
    'aria-busy',
    'aria-checked',
    'aria-disabled',
    'aria-expanded',
    'aria-label',
    'aria-selected',
    'dataDetectorType',
    'ellipsizeMode',
    'id',
    'maxFontSizeMultiplier',
    'minimumFontScale',
    'nativeID',
    'numberOfLines',
    'role',
    'selectable',
    'selectionColor',
    'suppressHighlighting',
    'textBreakStrategy',
    'userSelect',
    'lineBreakStrategyIOS',
    'autoCapitalize',
    'autoComplete',
    'autoCorrect',
    'autoFocus',
    'blurOnSubmit',
    'caretHidden',
    'clearButtonMode',
    'clearTextOnFocus',
    'contextMenuHidden',
    'dataDetectorTypes',
    'defaultValue',
    'cursorColor',
    'disableFullscreenUI',
    'editable',
    'enablesReturnKeyAutomatically',
    'enterKeyHint',
    'importantForAutofill',
    'inlineImageLeft',
    'inlineImagePadding',
    'inputAccessoryViewID',
    'inputMode',
    'keyboardAppearance',
    'keyboardType',
    'maxLength',
    'multiline',
    'placeholder',
    'placeholderTextColor',
    'readOnly',
    'returnKeyLabel',
    'returnKeyType',
    'rejectResponderTermination',
    'rows',
    'secureTextEntry',
    'selection',
    'selectTextOnFocus',
    'showSoftInputOnFocus',
    'spellCheck',
    'textAlign',
    'textContentType',
    'passwordRules',
    'underlineColorAndroid',
    'activeOpacity',
    'underlayColor',
    'nextFocusDown',
    'nextFocusForward',
    'nextFocusLeft',
    'nextFocusRight',
    'nextFocusUp',
    'tvParallaxProperties',
    'accessibilityIgnoresInvertColors',
    'aria-hidden',
    'aria-liveAndroid',
    'aria-modal',
    'accessibilityValue',
    'aria-valuemax',
    'aria-valuemin',
    'aria-valuenow',
    'aria-valuetext',
    'delayPressIn',
    'delayPressOut',
    'accessibilityElementsHidden',
    'accessibilityLiveRegion',
    'accessibilityViewIsModal',
    'aria-labelledby',
    'aria-live',
    'collapsable',
    'focusable',
    'importantForAccessibility',
    'needsOffscreenAlphaCompositing',
    'pointerEvents',
    'renderToHardwareTextureAndroid',
    'shouldRasterizeIOS',
    'tabIndex',
    'getItem',
    'getItemCount',
    'CellRendererComponent',
    'ListItemComponent',
    'debug',
    'disableVirtualization',
    'listKey',
    'maxToRenderPerBatch',
    'renderScrollComponent',
    'updateCellsBatchingPeriod',
    'windowSize',
    'drawerBackgroundColor',
    'drawerLockMode',
    'drawerPosition',
    'drawerWidth',
    'renderNavigationView',
    'statusBarBackgroundColor',
    'background',
    'useForeground',
  ];

  const events = [
    'onPress',
    'onAccessibilityAction',
    'onEndReached',
    'onEndReachedThreshold',
    'onRefresh',
    'onViewableItemsChanged',
    'onError',
    'onLayout',
    'onLoad',
    'onLoadEnd',
    'onLoadStart',
    'onPartialLoad',
    'onProgress',
    'onDismiss',
    'onOrientationChange',
    'onRequestClose',
    'onShow',
    'onLongPress',
    'onPressIn',
    'onPressOut',
    'onContentSizeChange',
    'onMomentumScrollBegin',
    'onMomentumScrollEnd',
    'onScroll',
    'onScrollBeginDrag',
    'onScrollEndDrag',
    'onScrollToTop',
    'onChange',
    'onValueChange',
    'onMoveShouldSetResponder',
    'onResponderGrant',
    'onResponderMove',
    'onResponderRelease',
    'onResponderTerminate',
    'onResponderTerminationRequest',
    'onStartShouldSetResponderCapture',
    'onTextLayout',
    'onBlur',
    'onChangeText',
    'onEndEditing',
    'onFocus',
    'onKeyPress',
    'onSelectionChange',
    'onSubmitEditing',
    'onHideUnderlay',
    'onShowUnderlay',
    'onAccessibilityEscape',
    'onAccessibilityTap',
    'onMagicTap',
    'onMoveShouldSetResponderCapture',
    'onResponderReject',
    'onStartShouldSetResponder',
    'onScrollToIndexFailed',
    'onDrawerClose',
    'onDrawerOpen',
    'onDrawerSlide',
    'onDrawerStateChanged',
  ];

  const allProps = [...attributes, ...events];
  const attrs = {} as Record<string, unknown>;

  Object.entries(props).forEach(([key, value]) => {
    allProps.includes(key) && Object.assign(attrs, {[key]: value});
  });

  return attrs;
};
