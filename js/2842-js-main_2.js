$(window).scroll(function () {
	if ($(document).scrollLeft() != 0) {
		$(document).scrollLeft(0);
	}
});

$( document ).ready(function() {
	$(".stakeYourAtoloWrapper").delay(500).animate({
		"margin-left": "+=50",
		opacity: 1
	}, 500);



	// ------------------ Mainnet Swap ------------------
	// $('.testnetSwapUl li:nth-child(2)').mouseover(function() {
	// 	$(".mainnetSwapTitle").css('opacity', '0.1');
	// 	$(".mainnetSwapDescription").css('opacity', '0.1');
	// 	$(".mainnetSwapBtn").css('opacity', '0.2');

	// 	$(".comingSoonTitle").css('opacity', '1');
	// 	$(".testnetSwapUl li:nth-child(2)").css("background-image", "url('assets/mainnetSwapOn.png')");
	// });

	// $('.testnetSwapUl li:nth-child(2)').mouseleave(function() {
	// 	$(".mainnetSwapTitle").css('opacity', '1');
	// 	$(".mainnetSwapDescription").css('opacity', '1');
	// 	$(".mainnetSwapBtn").css('opacity', '1');

	// 	$(".comingSoonTitle").css('opacity', '0');
	// 	$(".testnetSwapUl li:nth-child(2)").css("background-image", "url('assets/mainnetSwapOff.png')");
	// });

	// ------------------ Partners ------------------
	$('.gdacLogoBox').mouseover(function() {
		$(".gdacLogoOff").css('opacity', '0');
		$(".gdacLogoOn").css('opacity', '1');
	});

	$('.gdacLogoBox').mouseleave(function() {
		$(".gdacLogoOff").css('opacity', '1');
		$(".gdacLogoOn").css('opacity', '0');
	});

	// ------------------ News ------------------
	var settings = {
		"async": true,
		"crossDomain": true,
		"dataType": "xml",
		"url": "https://cors-anywhere.herokuapp.com/https://medium.com/feed/@hdac-rizon",
		"method": "GET",
		"headers": {
			"X-Requested-With": "XMLHttpRequest"
		}
	}
/*
	$.ajax(settings).done(function (response) {
		let count = 0;
		$(response).find("item").each(function() {
			if (count < 3) {
				var link = $(this).find("link").text(); 
				var title = truncate($(this).find("title").text());
				var description = $(this).find("content\\:encoded").text(); 
				var tag = $(this).find("tag").text();
				// image src
				let i = description.indexOf(`src="https://cdn`);
				let j = description.indexOf(`</figure>`);
				let imageSrc = description.substring(i + 5, j - 4);
				// content text
				let contentStr;
				let k = 0;
				// <p> 찾기
				k = description.indexOf(`<p>`);
				contentStr = description.substring(k + 3, k + 76) + "...";
				contentStr = contentStr.replace(/<\/?[^>]+(>|$)/g, "");		// clean text

				$(".newsBoxUl").append("<li onclick=\"window.open('" + link + "')\"><div><img class=\"newsThumbnail\" src=\"" + imageSrc + "\" /></div><div class=\"newsArticleBox\"><p class=\"newsArticleTitle\">" + title + "</p><p class=\"newsArticleContent\">" + contentStr + "</p><p class=\"newsArticleDate\">July 23  RIZON Korea</p><div class=\"newsPlusBtn noDrag\">+</div></div></li>");
			}
			count++;
		});
	});
	*/
});

// ------------------------------------- Util -------------------------------------

function ScrollTo(name) {
	ScrollToResolver(document.getElementById(name));
}

function ScrollToResolver(elem) {
	var jump = parseInt(elem.getBoundingClientRect().top * .2) - 18;
	document.body.scrollTop += jump;
	document.documentElement.scrollTop += jump;
	if (!elem.lastjump || elem.lastjump > Math.abs(jump)) {
		elem.lastjump = Math.abs(jump);
		setTimeout(function() { ScrollToResolver(elem);}, "10");
	} else {
		elem.lastjump = null;
	}
}

function truncate(input) {
	if (input.length > 28) {
		return input.substring(0, 28) + '...';
	}
	return input;
};

// ------------------------------------- Top -------------------------------------

function resetMenuBtns() {
	for (var i = 1; i < 6; i++) {
		$('.menuBtn' + i).removeClass("selectedMenu");
	}
}

function selectMenuHandler(menuNum) {
	$('.menuBtn' + menuNum).addClass("selectedMenu");
}

// ------------------------------------- Footer -------------------------------------

function goToPage(socialName) {
	switch (socialName) {
		case "twitter":
			window.open("https://twitter.com/hdac_rizon");
			break;
		case "coinmarketcap":
			window.open("https://coinmarketcap.com/currencies/rizon-blockchain/");
			break;
		case "github":
			window.open("https://github.com/rizon-world/rizon");
			break;
		case "medium":
			window.open("https://medium.com/hdac");
			break;
		case "discord":
			window.open("https://discord.com/invite/DvZFA7mpuX");
			break;
		case "facebook":
			window.open("https://www.facebook.com/hdacrizon");
			break;	
		case "telegram":
			window.open("https://t.me/rizon_atolo_eng");
			break;	
		case "youtube":
			window.open("https://www.youtube.com/c/HdacTechnologyOfficial");
			break;
		case "coingecko":
			window.open("https://www.coingecko.com/en/coins/rizon");
			break;
		case "linkedin":
			window.open("https://www.linkedin.com/company/hdac-rizon/");
			break;
			
	}
}

new simpleParallax(document.getElementsByClassName('stake-pc'), {
    orientation: 'up',
    scale: 2,
    delay: .5,
    overflow: true,
    transition: 'cubic-bezier(0,0,0,1)',
    maxTransition: 50
});

new simpleParallax(document.getElementsByClassName('stake-mb'), {
    orientation: 'up',
    scale: 1.5,
    delay: .8,
    overflow: true,
    transition: 'cubic-bezier(0,0,0,1)',
    maxTransition: 50
});



/* sb */
$(function(){

    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if (scroll >= 150) {
            $("body").addClass("scroll");
            $("body").addClass("croll-fixs");
        } else {
            $("body").removeClass("scroll");
        }
    });





	/* Madia */
	$(window).resize(function(){
		var width = window.innerWidth;
		if (width<1024) {


            $("#nav .nav > li.explore > a").off("click").on("click", function() {
                if ($(this).hasClass("on")) { 
                    $(this).removeClass("on");
                    $(this).next(".sub-box").slideUp();
                    return false;
                }
                else {
                    $(this).addClass("on");
                    $(this).next(".sub-box").slideDown();
                    return false;
                }
            });


            $(".btn-menu").off("click").on("click", function() {
                if ($(this).hasClass("on")) { 
                    $(this).removeClass("on");
                    $("#nav").animate({
                        "top": "-=446",
                        opacity: 0
                    }, 300); 
                }

                else {
                    $(this).addClass("on");
                    $("#nav").animate({
                        "top": "+=446",
                        opacity: 1
                    }, 300); 
                }
            });




		} else if (width>= 1024) {
            $("#nav .nav > li.explore").off('click');
            $(".sub-box").removeAttr("style");




		}
	}).resize();






});
