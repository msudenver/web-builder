MODGLOBALS.HEADER.enableGoButton = false;

MODGLOBALS.HEADER.searchInputOnClick = function() {
  $("#search-input #autoSuggestResults").hide();
  return false;
};

MODGLOBALS.HEADER.searchAutoSuggestOnClick = function(elem) {
  var elemHtml = $(elem).html();
  $("#search-input #search-text").val(elemHtml);
  $("#search-input #autoSuggestResults").hide();
  $(".gobutton #searchGoLink").click();
};

MODGLOBALS.HEADER.searchAutoSuggestOnMouseOver = function(elem) {
  $(elem).addClass("autoSuggestResultMouseOver")
};

MODGLOBALS.HEADER.searchAutoSuggestOnMouseOut = function(elem) {
  $(elem).removeClass("autoSuggestResultMouseOver")
};

MODGLOBALS.HEADER.searchGoLinkOnClick = function() {
  if (MODGLOBALS.HEADER.enableGoButton) MODGLOBALS.submitSearchCriteria();
};

MODGLOBALS.HEADER.searchOnKeyUp = function(sender, e) {
  var searchInputField = $("#search-input #search-text");
  var searchInputFieldDom = searchInputField.get(0);

  // Test that search text is not empty
  var searchText = searchInputField.val();
  var searchTextNotEmpty = $.trim(searchText).length > 0;

  // Test that search text is not default
  var defaultSearchText = searchInputFieldDom.getAttribute('value');
  var searchTextNotDefault = searchText !== defaultSearchText;

  MODGLOBALS.HEADER.enableGoButton = searchTextNotEmpty && searchTextNotDefault;

  if (MODGLOBALS.HEADER.enableGoButton) {
    $(".gobutton #searchGoLink").removeClass("disableGoButton");

    var charCode;
    if (e && e.which) {
      charCode = e.which;
    } else if (window.event) {
      e = window.event;
      charCode = e.keyCode;
    }

    if (charCode === 13) { // Enter pressed
      $(".gobutton #searchGoLink").click();
      return false;
    }
  } else {
    $(".gobutton #searchGoLink").addClass("disableGoButton");
  }

  // Call auto-suggest module
  var searchBarValue = $("#search-input #search-text").val();

  //
  function(urlParam, injectIntoElem, moduleName, successCallback, fadeOutDuration, fadeInDuration, dataParam, nullContentCallback, preProcessCallback, errorCallback)
  MODGLOBALS.injectHTML(MODGLOBALS.autoCompleteServer + "?q=" + searchBarValue,
    "#search-input #autoSuggestResults",
    "HEADER > searchOnKeyUp",
    MODGLOBALS.HEADER.searchAutoSuggestSuccessCallback,
    undefined, undefined, undefined,
    MODGLOBALS.HEADER.searchAutoSuggestNullContentCallback);
}; // MODGLOBALS.HEADER.searchOnKeyUp()

MODGLOBALS.HEADER.searchAutoSuggestSuccessCallback = function() {
  $("#search-input #autoSuggestResults").show();
};

MODGLOBALS.HEADER.searchAutoSuggestNullContentCallback = function() {
  $("#search-input #autoSuggestResults").hide();
};
