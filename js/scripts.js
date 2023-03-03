document.addEventListener("DOMContentLoaded", function() {
    window.innerWidth <= 950 && new Swiper(".after__slider",{
        navigation: {
            nextEl: ".after-button-next",
            prevEl: ".after-button-prev"
        },
        pagination: {
            el: ".after-pagination",
            clickable: !0
        },
        paginationClickable: !0,
        loop: !0,
        watchOverflow: !0,
        initialSlide: 0,
        allowTouchMove: !0,
        slideToClickedSlide: !0,
        speed: 500,
        autoplay: {
            delay: 5e3,
            stopOnLastSlide: !1,
            disableOnIteration: !1
        },
        spaceBetween: 20,
        breakpoints: {
            320: {
                slidesPerView: "auto",
                spaceBetween: 20
            }
        }
    })
}),
document.addEventListener("DOMContentLoaded", function() {
    window.innerWidth <= 950 && new Swiper(".benefits .swiper-container",{
        slidesPerView: 1,
        navigation: {
            nextEl: ".benefits-button-next",
            prevEl: ".benefits-button-prev"
        },
        pagination: {
            el: ".benefits .swiper-pagination",
            type: "bullets",
            clickable: !0
        },
        autoplay: {
            delay: 4e3
        },
        breakpoints: {
            320: {
                slidesPerView: 1
            }
        }
    })
}),
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".faq__list") && document.querySelector(".faq__list").addEventListener("click", function(e) {
        e.target.closest(".faq-item") && e.target.closest(".faq-item").classList.toggle("active")
    })
}),
document.addEventListener("DOMContentLoaded", function() {
    window.innerWidth <= 1330 && new Swiper(".for__slider",{
        navigation: {
            nextEl: ".for-button-next",
            prevEl: ".for-button-prev"
        },
        pagination: {
            el: ".for-pagination",
            clickable: !0
        },
        paginationClickable: !0,
        watchOverflow: !0,
        initialSlide: 0,
        allowTouchMove: !0,
        slideToClickedSlide: !0,
        speed: 500,
        spaceBetween: 20,
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            650: {
                slidesPerView: 2
            },
            950: {
                slidesPerView: 3
            }
        }
    })
}),
document.addEventListener("DOMContentLoaded", function() {
    var e, t = _createForOfIteratorHelper(document.querySelectorAll('a[href*="#"]'));
    try {
        for (t.s(); !(e = t.n()).done; )
            !function() {
                var t = e.value;
                t.addEventListener("click", function(e) {
                    e.preventDefault(),
                    t.getAttribute("href").substr(1),
                    (window.matchMedia("(max-width: 950px)").matches ? document.querySelector(".order__percent") : document.querySelector(".order-money4")).scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    })
                })
            }()
    } catch (e) {
        t.e(e)
    } finally {
        t.f()
    }
}),
document.addEventListener("DOMContentLoaded", function() {
    if (950 <= window.innerWidth) {
        for (var i = document.querySelectorAll(".money-odd"), e = 0; e < i.length; e++)
            !function(n) {
                window.addEventListener("mousemove", function(e) {
                    var t = e.clientX / window.innerWidth
                      , e = e.clientY / window.innerHeight;
                    i[n].style.transform = "translate(-" + 50 * t + "px, -" + 50 * e + "px)"
                })
            }(e);
        for (var o = document.querySelectorAll(".money-even"), t = 0; t < o.length; t++)
            !function(n) {
                window.addEventListener("mousemove", function(e) {
                    var t = e.clientX / window.innerWidth
                      , e = e.clientY / window.innerHeight;
                    o[n].style.transform = "translate(-" + 25 * t + "px, -" + 25 * e + "px)"
                })
            }(t)
    }
}),
document.addEventListener("DOMContentLoaded", function() {
    new Swiper(".reviews .swiper-container",{
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
            el: ".reviews .swiper-pagination",
            type: "bullets",
            clickable: !0
        },
        navigation: {
            nextEl: ".reviews .swiper-button-next",
            prevEl: ".reviews .swiper-button-prev"
        },
        loop: !0,
        autoplay: {
            delay: 4e3
        },
        breakpoints: {
            950: {
                slidesPerView: "auto",
                spaceBetween: 35
            },
            1400: {
                slidesPerView: 3
            }
        }
    })
}),
document.addEventListener("DOMContentLoaded", function() {
    new Swiper(".slider .swiper-container",{
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
            nextEl: ".slider .swiper-button-next",
            prevEl: ".slider .swiper-button-prev"
        },
        loop: !0,
        autoplay: {
            delay: 4e3
        },
        breakpoints: {
            650: {
                slidesPerView: 2
            },
            800: {
                slidesPerView: 3
            },
            999: {
                slidesPerView: "auto",
                spaceBetween: 40
            }
        }
    })
}),
document.addEventListener("DOMContentLoaded", function() {
    window.innerWidth <= 998 && new Swiper(".suit .swiper-container",{
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            el: ".suit .swiper-pagination",
            type: "bullets",
            clickable: !0
        },
        loop: !0,
        autoplay: {
            delay: 4e3
        },
        breakpoints: {
            700: {
                slidesPerView: 2
            }
        }
    })
});
var intr, time = 900;
function start_timer() {
    intr = setInterval(tick, 1e3)
}
function tick() {
    time--;
    var e = Math.floor(time / 60)
      , t = time - 60 * e;
    0 == e && 0 == t && clearInterval(intr),
    t = 10 <= t ? t : "0" + t,
    $(".minutes").html(10 <= e ? e : "0" + e),
    $(".seconds").html(t)
}
document.addEventListener("DOMContentLoaded", function() {
    start_timer()
}),
document.addEventListener("DOMContentLoaded", function() {
    window.innerWidth <= 1400 && new Swiper(".why .swiper-container",{
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            el: ".why .swiper-pagination",
            type: "bullets",
            clickable: !0
        },
        navigation: {
            nextEl: ".why .swiper-button-next",
            prevEl: ".why .swiper-button-prev"
        },
        loop: !0,
        autoplay: {
            delay: 4e3
        },
        breakpoints: {
            700: {
                slidesPerView: 2
            }
        }
    })
}),
document.addEventListener("DOMContentLoaded", function() {
    window.innerWidth <= 998 && (new Swiper(".y-get__slider--1 .swiper-container",{
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            el: ".y-get__slider--1  .swiper-pagination",
            type: "bullets",
            clickable: !0
        },
        loop: !0,
        autoplay: {
            delay: 4e3
        }
    }),
    new Swiper(".y-get__slider--2 .swiper-container",{
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            el: ".y-get__slider--2  .swiper-pagination",
            type: "bullets",
            clickable: !0
        },
        loop: !0,
        autoplay: {
            delay: 4e3
        }
    }))
}),
document.addEventListener("DOMContentLoaded", function() {
    window.innerWidth <= 1400 && new Swiper(".y-get2 .swiper-container",{
        spaceBetween: 10,
        slidesPerView: 1,
        pagination: {
            el: ".y-get2  .swiper-pagination",
            type: "bullets",
            clickable: !0
        },
        loop: !0,
        autoplay: {
            delay: 4e3
        },
        breakpoints: {
            650: {
                slidesPerView: 2
            }
        }
    })
});
