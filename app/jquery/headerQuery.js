
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
        if(MODGLOBALS.HEADER.enableGoButton) MODGLOBALS.submitSearchCriteria();
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

        if( MODGLOBALS.HEADER.enableGoButton ) {
            $(".gobutton #searchGoLink").removeClass("disableGoButton");

            var charCode;
            if (e && e.which) { charCode = e.which; }
            else if (window.event) { e = window.event; charCode = e.keyCode; }

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
function(urlParam,injectIntoElem,moduleName,successCallback,fadeOutDuration,fadeInDuration,dataParam,nullContentCallback,preProcessCallback,errorCallback)
        MODGLOBALS.injectHTML(    MODGLOBALS.autoCompleteServer + "?q=" + searchBarValue,
                                "#search-input #autoSuggestResults",
                                "HEADER > searchOnKeyUp",
                                MODGLOBALS.HEADER.searchAutoSuggestSuccessCallback,
                                undefined,undefined,undefined,
                                MODGLOBALS.HEADER.searchAutoSuggestNullContentCallback    );
    }; // MODGLOBALS.HEADER.searchOnKeyUp()

    MODGLOBALS.HEADER.searchAutoSuggestSuccessCallback = function() {
        $("#search-input #autoSuggestResults").show();
    };

    MODGLOBALS.HEADER.searchAutoSuggestNullContentCallback = function() {
        $("#search-input #autoSuggestResults").hide();
    };

    function getVideoId(vid,vidlocation)
    {
        $.get(
            "https://www.googleapis.com/youtube/v3/videos",
            {
                part: 'snippet',
                id: vid,
                key: 'AIzaSyCDfS9ySngtqbe3iC04kRcHzRHZEFAaV0g'
            },

            function(data)
            {
                $.each(data.items,
                    function(i, item)
                    {
                        videoTitle = item.snippet.title;
                        vidThumbUrl = item.snippet.thumbnails.medium.url; // video thumbnail url
                        var channelTitle = item.snippet.channelTitle; // channel of uploaded video

                        // check if video uploaded belongs to March of Dimes
                        if(channelTitle === "March of Dimes")
                        {
                            $('#image'+vidlocation).replaceWith('<img src="' + vidThumbUrl + '" alt="' + videoTitle + '"/>');
                            $('#title'+vidlocation).append(videoTitle);

                        }
                        else
                        {

$('#input-errorMsg').css("color","red").text('Error! Please enter a video ID that is exclusive to March of Dimes.');
                        }
                    }
                );

                // check if video thumbnail is empty (in other words, no thumbnail generated from GET response)
                if($('.video-thumbnail').length <= 0)
                {

// $('#input-errorMsg').css("color","red").text('Request Error: Could not get video ID! Please enter a valid video ID that is exclusive to March of Dimes.');
                }
            }
        );
    }
