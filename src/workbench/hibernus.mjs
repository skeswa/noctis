export default syntax => ({
   name: "Noctis Nix",
   type: "light",
   colors: {
      // ---------------------------
      // Editor Base Colors
      // ---------------------------
      "selection.background": "#ade2eb88",
      "descriptionForeground": "#929ea0",
      "errorForeground": "#ff4000",
      "widget.shadow": "#00000055",
      "editor.background": "#f4f6f6",
      "editor.foreground": "#005661",
      "editorLineNumber.foreground": "#a0abac",
      "editorLineNumber.activeForeground": "#0099ad",
      "editorCursor.foreground": "#0092a8",
      // ---------------------------
      // Badge
      // ---------------------------
      "badge.background": "#0099ad",
      "badge.foreground": "#f4f6f6",
      // ---------------------------
      // Activity Bar
      // ---------------------------
      "activityBar.background": "#f4f6f6",
      "activityBar.dropBackground": "#0099ad65",
      "activityBar.foreground": "#0099ad",
      "activityBar.border": "#ece2c600",
      "activityBarBadge.background": "#0099ad",
      "activityBarBadge.foreground": "#f4f6f6",
      // ---------------------------
      // Sidebar
      // ---------------------------
      "sideBar.background": "#e7f2f3",
      "sideBar.foreground": "#71838e",
      "sideBar.border": "#ece2c600",
      "sideBar.dropBackground": "#e7f2f3",
      "sideBarTitle.foreground": "#71838e",
      "sideBarSectionHeader.background": "#c1def0",
      "sideBarSectionHeader.foreground": "#71838e",
      // ---------------------------
      // Status Bar
      // ---------------------------
      "statusBar.background": "#caedf2",
      "statusBar.foreground": "#0099ad",
      "statusBar.border": "#ece2c600",
      "statusBar.debuggingBackground": "#e7f2f3",
      "statusBar.debuggingForeground": "#e9498150",
      "statusBar.debuggingBorder": "#e94981af",
      "statusBar.noFolderForeground": "#87a7ab",
      "statusBar.noFolderBackground": "#e7f2f3",
      "statusBar.noFolderBorder": "#e7f2f3",
      "statusBarItem.activeBackground": "#dfeff1",
      "statusBarItem.hoverBackground": "#d1e8eb",
      "statusBarItem.prominentBackground": "#c1d4d7",
      "statusBarItem.prominentHoverBackground": "#bfdee3",
      // ---------------------------
      // Button
      // ---------------------------
      "button.background": "#099",
      "button.foreground": "#f1f1f1",
      "button.hoverBackground": "#0cc",
      // ---------------------------
      // Dropdown
      // ---------------------------
      "dropdown.background": "#f4f6f6",
      "dropdown.border": "#f4f6f6",
      "dropdown.foreground": "#005661",
      // ---------------------------
      // Editor Marker Navigation
      // ---------------------------
      "editorMarkerNavigation.background": "#3a3a5e29",
      "editorMarkerNavigationError.background": "#ff4000",
      "editorMarkerNavigationWarning.background": "#e69533",
      // ---------------------------
      // Errors and warnings
      // ---------------------------
      "editorError.border": "#f4f6f6",
      "editorError.foreground": "#ff4000",
      "editorWarning.border": "#f4f6f6",
      "editorWarning.foreground": "#e69533",
      "editorInfo.border": "#f4f6f6",
      "editorInfo.foreground": "#00c6e0",
      "editorHint.border": "#58cc6d00",
      "editorHint.foreground": "#58cc6d",
      // ---------------------------
      // Editor Groups and Tabs
      // ---------------------------
      "editorGroup.emptyBackground": "#93b4b833",
      "editorGroup.border": "#d0edf1",
      "editorGroup.dropBackground": "#93b4b833",
      // ---------------------------
      // Editor Group Header
      // ---------------------------
      "editorGroupHeader.noTabsBackground": "#caedf2",
      "editorGroupHeader.tabsBackground": "#caedf2",
      "editorGroupHeader.tabsBorder": "#caedf200",
      // ---------------------------
      // Editor Tabs
      // ---------------------------
      "tab.activeBackground": "#f4f6f6",
      "tab.activeForeground": "#0099ad",
      "tab.border": "#b2d2e6",
      "tab.inactiveBackground": "#caedf2",
      "tab.inactiveForeground": "#71838e",
      "tab.unfocusedActiveForeground": "#71838e",
      "tab.unfocusedInactiveForeground": "#71838e",
      "tab.activeBorderTop": "#00c6e0",
      "tab.activeModifiedBorder": "#00b368",
      "tab.activeBorder": "#f4f6f6",
      "tab.unfocusedActiveBorder": "#f4f6f6",
      "tab.unfocusedHoverBackground": "#0099ad21",
      // ---------------------------
      // Text Colors
      // ---------------------------
      "textBlockQuote.background": "#e7f2f3",
      "textBlockQuote.border": "#00899e",
      "textCodeBlock.background": "#e7f2f3",
      "textLink.activeForeground": "#00c6e0",
      "textLink.foreground": "#00c6e0",
      "textPreformat.foreground": "#e9a149",
      "textSeparator.foreground": "#e7f2f3",
      // ---------------------------
      // Welcome Page
      // ---------------------------
      "walkThrough.embeddedEditorBackground": "#e7f2f3",
      "welcomePage.buttonBackground": "#e7f2f3",
      "welcomePage.buttonHoverBackground": "#caedf2",
      // ---------------------------
      // Input Control
      // ---------------------------
      "input.background": "#f4f6f6",
      "input.border": "#e0eff1",
      "input.foreground": "#6a7a7c",
      "input.placeholderForeground": "#9fabad",
      "inputOption.activeBorder": "#0099ad",
      "inputValidation.errorBackground": "#ff400041",
      "inputValidation.errorBorder": "#ff4000",
      "inputValidation.infoBackground": "#00c6e0cc",
      "inputValidation.infoBorder": "#00c6e0",
      "inputValidation.warningBackground": "#ffa587cc",
      "inputValidation.warningBorder": "#ffa487",
      // ---------------------------
      // Editor Widgets
      // ---------------------------
      "editorWidget.background": "#e0eff1",
      "editorWidget.border": "#ece2c600",
      "editorHoverWidget.background": "#e0eff1",
      "editorHoverWidget.border": "#ece2c600",
      "editorSuggestWidget.background": "#e0eff1",
      "editorSuggestWidget.border": "#ece2c600",
      "editorSuggestWidget.foreground": "#6a7a7c",
      "editorSuggestWidget.highlightForeground": "#0099ad",
      "editorSuggestWidget.selectedBackground": "#bbe0f7",
      // ---------------------------
      // Gutter
      // ---------------------------
      "editorGutter.background": "#f4f6f6",
      "editorGutter.addedBackground": "#8ce99a",
      "editorGutter.deletedBackground": "#ff4000",
      "editorGutter.modifiedBackground": "#e9a149",
      // ---------------------------
      // Selection Colors
      // ---------------------------
      "editor.selectionBackground": "#ade2eb77",
      "editor.selectionHighlightBackground": "#14a5ff33",
      "editor.selectionHighlightBorder": "#14a5ff00",
      "editor.inactiveSelectionBackground": "#ade2eb55",
      "editor.wordHighlightStrongBackground": "#b5890027",
      "editor.wordHighlightStrongBorder": "#b5890000",
      "editor.wordHighlightBackground": "#e9a14922",
      "editor.wordHighlightBorder": "#e9a14900",
      "editor.findMatchBackground": "#8ce99a60",
      "editor.findMatchBorder": "#8ce99a00",
      "editor.findMatchHighlightBackground": "#148f9f33",
      "editor.findMatchHighlightBorder": "#148f9f00",
      "editor.findRangeHighlightBackground": "#99e62a55",
      "editor.findRangeHighlightBorder": "#58CC6D00",
      "editor.hoverHighlightBackground": "#0099ad3f",
      "editor.lineHighlightBackground": "#d1ebefcc",
      "editor.lineHighlightBorder": "#d1ebef00",
      "editor.rangeHighlightBackground": "#f1e9d5a1",
      "editorLink.activeForeground": "#14a5ff",
      "editorWhitespace.foreground": "#c1d4d7bb",
      "editorIndentGuide.background": "#c1d4d7aa",
      "editorIndentGuide.activeBackground": "#88bcc3",
      "editorBracketMatch.background": "#0099ad20",
      "editorBracketMatch.border": "#0099ad",
      "editorRuler.foreground": "#d0edf1",
      // ---------------------------
      // Code Lens
      // ---------------------------
      "editorCodeLens.foreground": "#77aaca",
      // ---------------------------
      // Integrated Terminal Colors
      // ---------------------------
      "terminal.ansiBlack": "#000000",
      "terminal.ansiRed": "#e34e1c",
      "terminal.ansiGreen": "#00c724",
      "terminal.ansiYellow": "#e9a149",
      "terminal.ansiBlue": "#339be6",
      "terminal.ansiMagenta": "#e94981",
      "terminal.ansiCyan": "#1597a8",
      "terminal.ansiWhite": "#bbc3c4",
      "terminal.ansiBrightBlack": "#71838e",
      "terminal.ansiBrightRed": "#ff4000",
      "terminal.ansiBrightGreen": "#00e62a",
      "terminal.ansiBrightYellow": "#ffbf00",
      "terminal.ansiBrightBlue": "#0095ff",
      "terminal.ansiBrightMagenta": "#ff337a",
      "terminal.ansiBrightCyan": "#00c9db",
      "terminal.ansiBrightWhite": "#dfffff",
      "terminal.background": "#e1eeef",
      "terminal.foreground": "#005661",
      "terminalCursor.background": "#e1eeef",
      "terminalCursor.foreground": "#005661",
      // ---------------------------
      // Merge
      // ---------------------------
      "merge.border": "#f4f6f600",
      "merge.currentContentBackground": "#33e7ff33",
      "merge.currentHeaderBackground": "#33e7ff55",
      "merge.incomingContentBackground": "#9d92f233",
      "merge.incomingHeaderBackground": "#9d92f255",
      "merge.commonContentBackground": "#ffc18033",
      "merge.commonHeaderBackground": "#ffc18055",
      "editorOverviewRuler.currentContentForeground": "#33e7ff55",
      "editorOverviewRuler.incomingContentForeground": "#9d92f255",
      "editorOverviewRuler.commonContentForeground": "#ffc18055",
      "editorOverviewRuler.border": "#f4f6f6",
      // ---------------------------
      // Notification Colors
      // ---------------------------
      "notificationCenter.border": "#e0eff1",
      "notificationCenterHeader.foreground": "#005661",
      "notificationCenterHeader.background": "#e0eff1",
      "notificationToast.border": "#e0eff1",
      "notifications.foreground": "#005661",
      "notifications.background": "#e0eff1",
      "notifications.border": "#e0eff1",
      "notificationLink.foreground": "#005661",
      // ---------------------------
      // Diff
      // ---------------------------
      "diffEditor.insertedTextBackground": "#b2f2bb77",
      "diffEditor.insertedTextBorder": "#b2f2bba1",
      "diffEditor.removedTextBackground": "#BB1F051a",
      "diffEditor.removedTextBorder": "#BB1F0510",
      // ---------------------------
      // Debug
      // ---------------------------
      "debugToolBar.background": "#e7f2f3",
      "debugExceptionWidget.background": "#e7f2f3",
      "debugExceptionWidget.border": "#00899e",
      // ---------------------------
      // Extensions
      // ---------------------------
      "extensionButton.prominentBackground": "#099",
      "extensionButton.prominentForeground": "#e5f5f5",
      "extensionButton.prominentHoverBackground": "#0cc",
      "focusBorder": "#e0eff1",
      "foreground": "#005661",
      // ---------------------------
      // Panel
      // ---------------------------
      "panel.background": "#e1eeef",
      "panel.border": "#00c6e0",
      "panelTitle.activeBorder": "#00c6e0",
      "panelTitle.activeForeground": "#0099ad",
      "panelTitle.inactiveForeground": "#71838e",
      // ---------------------------
      // Peek View Colors
      // ---------------------------
      "peekView.border": "#0099ad",
      "peekViewEditor.background": "#e5fcff",
      "peekViewEditor.matchHighlightBackground": "#148f9f33",
      "peekViewEditor.matchHighlightBorder": "#148f9f79",
      "peekViewEditorGutter.background": "#e5fcff",
      "peekViewResult.background": "#e7f2f3",
      "peekViewResult.fileForeground": "#e9a149",
      "peekViewResult.lineForeground": "#87a7ab",
      "peekViewResult.matchHighlightBackground": "#e0eff1",
      "peekViewResult.selectionBackground": "#e0eff1",
      "peekViewResult.selectionForeground": "#6a7a7c",
      "peekViewTitle.background": "#e7f2f3",
      "peekViewTitleDescription.foreground": "#87a7ab",
      "peekViewTitleLabel.foreground": "#e9a149",
      // ---------------------------
      // Progress Bar
      // ---------------------------
      "progressBar.background": "#00c6e0",
      // ---------------------------
      // Scroll Bar
      // ---------------------------
      "scrollbar.shadow": "#00000055",
      "scrollbarSlider.activeBackground": "#0099adad",
      "scrollbarSlider.background": "#6a90955b",
      "scrollbarSlider.hoverBackground": "#0099ad62",
      // ---------------------------
      // Git status colors in File Explorer
      // ---------------------------
      "gitDecoration.addedResourceForeground": "#009456",
      "gitDecoration.modifiedResourceForeground": "#14b832",
      "gitDecoration.deletedResourceForeground": "#ff4000",
      "gitDecoration.untrackedResourceForeground": "#00c6e0",
      "gitDecoration.ignoredResourceForeground": "#a8a28faa",
      "gitDecoration.conflictingResourceForeground": "#e9a149",
      // ---------------------------
      // Quick Picker
      // ---------------------------
      "pickerGroup.border": "#00c6e0",
      "pickerGroup.foreground": "#0099ad",
      // ---------------------------
      // Lists and Trees
      // ---------------------------
      "list.activeSelectionBackground": "#b6e1e7",
      "list.activeSelectionForeground": "#005661",
      "list.dropBackground": "#b2cacd",
      "list.focusBackground": "#bed9ea",
      "list.focusForeground": "#005661",
      "list.highlightForeground": "#0099ad",
      "list.hoverBackground": "#d1eafa",
      "list.hoverForeground": "#005661",
      "list.inactiveFocusBackground": "#c9eaed",
      "list.inactiveSelectionBackground": "#d5eef1",
      "list.inactiveSelectionForeground": "#949384",
      "list.errorForeground": "#c9481d",
      "list.warningForeground": "#e07a52",
      "listFilterWidget.background": "#d5eef1",
      "listFilterWidget.outline": "#14b832",
      "listFilterWidget.noMatchesOutline": "#ff4000",
      // ---------------------------
      // Settings Editor Colors
      // ---------------------------
      "settings.headerForeground": "#004d57",
      "settings.modifiedItemIndicator": "#00bd23",
      "settings.dropdownListBorder": "#ade2eb88",
      "settings.dropdownBackground": "#e0eff1",
      "settings.dropdownForeground": "#0bb",
      "settings.dropdownBorder": "#e0eff1",
      "settings.checkboxBackground": "#e0eff1",
      "settings.checkboxForeground": "#0bb",
      "settings.checkboxBorder": "#e0eff1",
      "settings.textInputBackground": "#e0eff1",
      "settings.textInputForeground": "#0bb",
      "settings.textInputBorder": "#e0eff1",
      "settings.numberInputBackground": "#d0edf1",
      "settings.numberInputForeground": "#5842ff",
      "settings.numberInputBorder": "#d0edf1",
      // ---------------------------
      // Breadcrumbs
      // ---------------------------
      "breadcrumb.foreground": "#71838e",
      "breadcrumb.background": "#f4f6f6",
      "breadcrumb.focusForeground": "#0099ad",
      "breadcrumb.activeSelectionForeground": "#005661",
      "breadcrumbPicker.background": "#e0eff1",
      // ---------------------------
      // Title bar
      // Note: These colors are currently only supported on macOS.
      // ---------------------------
      "titleBar.activeBackground": "#e7f2f3",
      "titleBar.activeForeground": "#005661",
      "titleBar.inactiveBackground": "#e7f2f3",
      "titleBar.inactiveForeground": "#71838e",
      // ---------------------------
      // Custom title bar and menus
      // Note: These colors are currently only supported on Windows and Linux.
      // ---------------------------
      "menu.background": "#e0eff1",
      "menu.foreground": "#71838e",
      "menu.selectionBackground": "#d1eafa",
      "menu.selectionForeground": "#0099ad",
      "menu.selectionBorder": "#d1eafa",
      "menubar.selectionBackground": "#d1eafa",
      "menubar.selectionForeground": "#0099ad",
      "menubar.selectionBorder": "#d1eafa",
      // ---------------------------
      // Snippets
      // ---------------------------
      "editor.snippetTabstopHighlightBackground": "#abe4ed77",
      "editor.snippetTabstopHighlightBorder": "#d6f1f5",
      "editor.snippetFinalTabstopHighlightBackground": "#abe4ed77",
      "editor.snippetFinalTabstopHighlightBorder": "#d6f1f5",
   },
   tokenColors: syntax
});
