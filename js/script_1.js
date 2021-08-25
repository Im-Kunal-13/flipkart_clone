var img_slide_travel = 0;
var slide_1 = document.querySelector('.slide_1');
var slide_1_ml;
var allow_slide = true;


// LEFT AND RIGHT ARROW BUTTONS SLIDING WORKING START.
left_arrow_icon.addEventListener('click', () => {
    // FINDING WHICH RADIO BUTTON IS PRESENTLY CHECKED AND CHANGIND THAT ACCORDIGLY.
    for (let i = 1; i <= 6; i++) {
        if (document.querySelector(`#radio_${i}`).checked && i > 1) {
            document.querySelector(`#radio_${i - 1}`).checked = true;
            break;
        }
    }
})

right_arrow_icon.addEventListener('click', () => {
    // FINDING WHICH RADIO BUTTON IS PRESENTLY CHECKED AND CHANGIND THAT ACCORDIGLY.
    for (let i = 1; i <= 6; i++) {
        if (document.querySelector(`#radio_${i}`).checked && i < 6) {
            document.querySelector(`#radio_${i + 1}`).checked = true;
            break;
        }
    }
})
// LEFT AND RIGHT ARROW BUTTONS SLIDING WORKING END.


// LEFT AND RIGHT ARROW SIZE CHANGE ON CLICK START
left_arrow_icon.addEventListener('mousedown', function () {
    left_arrow_icon.style.backgroundColor = 'var(--arrow-click)';
    left_arrow_icon.style.fontSize = '35px';
})

left_arrow_icon.addEventListener('mouseup', function () {
    left_arrow_icon.style.backgroundColor = 'transparent';
    left_arrow_icon.style.fontSize = '40px';
})

right_arrow_icon.addEventListener('mousedown', function () {
    right_arrow_icon.style.backgroundColor = 'var(--arrow-click)';
    right_arrow.style.fontSize = '35px';
})

right_arrow_icon.addEventListener('mouseup', function () {
    right_arrow_icon.style.backgroundColor = 'transparent';
    right_arrow.style.fontSize = '40px';
})
// LEFT AND RIGHT ARROW SIZE CHANGE ON CLICK END


// FOOTER CARDS ANIMATION CONTROL START
footer_bottom_box_6.addEventListener('mousedown', () => {
    let temp = document.querySelector('#footer_bottom_box_6 img');

    temp.transition = 'transform 1s linear';
    temp.style.transform = 'rotateX(360deg)';
})

footer_bottom_box_6.addEventListener('mouseup', () => {
    let temp = document.querySelector('#footer_bottom_box_6 img');

    temp.transition = 'transform 1s linear';
    temp.style.transform = 'rotateX(0deg)';
})
// FOOTER CARDS ANIMATION CONTROL END



// AUTOMATIC IMAGE SLIDIG START 
var slide_counter = 1
var slide_reverse = false;
document.querySelector(`#radio_${slide_counter}`).checked = true;


// RIPPLE ON CLICK EFFECT START 
var previous = 0;
setInterval(() => {
    for (let i = 1; i <= 6; i++) {
        if (document.querySelector(`#radio_${i}`).checked && i != previous) {
            previous = i;
            document.querySelector(`#manual_btn_${i}`).dispatchEvent(new Event('click'));
        }
    }
}, 100);


// RIPPLE ON CLICK EFFECT END



setInterval(() => {
    // CHECKING WHICH RADIO BUTTON IS PRESENTLY CHECKED AND CHANGING THAT ACCORDINGLY 

    for (let i = 1; i <= 6; i++) {
        if (document.querySelector(`#radio_${i}`).checked) {
            slide_counter = i;
            break;
        }
    }

    if (slide_counter == 6) {
        slide_reverse = true;
    }
    else if (slide_counter == 1) {
        slide_reverse = false;
    }

    if (slide_reverse) {
        slide_counter--;

        setTimeout(() => {
            left_arrow_icon.dispatchEvent(new Event('mousedown'));
        }, 50);

        setTimeout(() => {
            left_arrow_icon.dispatchEvent(new Event('mouseup'));
        }, 200);

        document.querySelector(`#radio_${slide_counter}`).checked = true;
    }
    else {
        slide_counter++;

        setTimeout(() => {
            right_arrow_icon.dispatchEvent(new Event('mousedown'));
        }, 50);

        setTimeout(() => {
            right_arrow_icon.dispatchEvent(new Event('mouseup'));
        }, 200);

        document.querySelector(`#radio_${slide_counter}`).checked = true;
    }

}, 5000);
// AUTOMATIC IMAGE SLIDIG END

// LOGIN BUTTON MOUSEOVER START 
login_button.addEventListener('mouseover', () => {
    login_sub_box.style.display = 'initial';
    more_box.style.color = 'white';
    arrow.style.color = 'white';
    arrow.style.transform = 'rotateZ(0deg)';
    login_button.style.height = '30px';
    login_button.style.width = '120px';
    login_button.style.fontSize = '13px';
    login_button.style.backgroundColor = '#e2e2e2c0';

    // TOGGLING OFF DISPLAY OF OTHER CONTAINERS START 
    more_sub_box.style.display = "none";
    fashion_box.style.display = "none";
    electronics_box.style.display = "none";
    home_box.style.display = "none";
    appliances_box.style.display = "none";
    extra_box.dispatchEvent(new Event('mouseout'));
    // TOGGLING OFF DISPLAY OF OTHER CONTAINERS END
});

login_sub_box.addEventListener('mouseover', () => {
    login_sub_box.style.display = 'initial';
    login_button.style.height = '30px';
    login_button.style.width = '120px';
    login_button.style.fontSize = '13px';
    login_button.style.backgroundColor = '#e2e2e2c0';
});

login_sub_box.addEventListener('mouseout', () => {
    login_sub_box.style.display = 'none';
    login_button.style.height = '33px';
    login_button.style.width = '125px';
    login_button.style.fontSize = '15px';
    login_button.style.backgroundColor = 'white';
});
// LOGIN BUTTON MOUSEOU


function hotkeys(e) {
    if (e.ctrlKey && e.shiftKey && e.keyCode === 81) {
        // dark_mode_checkbox.checked ? dark_mode_checkbox.checked = false : dark_mode_checkbox.checked = true;
        if (dark_mode_checkbox.checked) {
            dark_mode_checkbox.checked = false;
        }
        else {
            dark_mode_checkbox.checked = true;
        }

        dark_mode_checkbox.dispatchEvent(new Event('change'));
    }

    else if (e.ctrlKey && e.keyCode === 37) {
        left_arrow_icon.click();

        setTimeout(() => {
            left_arrow_icon.dispatchEvent(new Event('mousedown'));
        }, 50);

        setTimeout(() => {
            left_arrow_icon.dispatchEvent(new Event('mouseup'));
        }, 200);
    }
    else if (e.ctrlKey && e.keyCode === 39) {
        right_arrow_icon.click();

        setTimeout(() => {
            right_arrow_icon.dispatchEvent(new Event('mousedown'));
        }, 50);

        setTimeout(() => {
            right_arrow_icon.dispatchEvent(new Event('mouseup'));
        }, 200);
    }

    else if (e.keyCode === 27) {
        login_popup_toggle.click();
        signup_popup_toggle.click();
    }
}
document.onkeydown = hotkeys;

// LOGIN POPUP TOGGLE WORKING START
login_button.addEventListener('click', () => {
    login_sub_box.dispatchEvent(new Event('mouseout'));
    login_button.style.borderRadius = "5px";
    login_popup.style.display = "flex";

    setTimeout(() => {
        login_popup.style.backgroundColor = "#00000050";
        login_popup_box.style.cssText = "margin-right: 0";
        login_popup_box.style.opacity = "1";
        login_popup_toggle.style.cssText = "margin: 0 0 30rem 49rem";
        login_popup_toggle.style.opacity = "1";
        login_popup_toggle.style.transform = "rotateZ(-360deg)";
        document.querySelector('header').style.filter = "blur(5px)";
        document.querySelector('main').style.filter = "blur(5px)";
        document.querySelector('footer').style.filter = "blur(5px)";
    }, 200);

    // window.addEventListener('keydown', function(event){
    //     console.log(event.key);
    //     if(event.key == 'Escape'){
    //         login_popup_toggle.dispatchEvent(new Event('click'));
    //     }
    // })


})
login_popup_toggle.addEventListener('click', () => {
    login_button.style.borderRadius = "10px";
    login_popup_box.style.cssText = "margin-right: 42rem";
    login_popup_toggle.style.cssText = "margin: 0 0 30rem 81rem";
    login_popup_box.style.opacity = "0";
    login_popup_toggle.style.opacity = "0";
    login_popup_toggle.style.transform = "rotateZ(0deg)";
    document.querySelector('header').style.filter = "none";
    document.querySelector('main').style.filter = "none";
    document.querySelector('footer').style.filter = "none";

    login_popup_toggle.style.color = "red";
    login_popup_toggle.style.backgroundColor = "#ffffff99";

    setTimeout(() => {
        login_popup_toggle.style.color = "white";
        login_popup_toggle.style.backgroundColor = "transparent";
    }, 100);

    setTimeout(() => {
        login_popup.style.display = "none";
    }, 300);
})

// LOGIN POPUP TOGGLE WORKING END

// SIGNUP POPUP TOGGLE WORKING START
sign_up.addEventListener('click', () => {
    signup_popup.style.display = "flex";

    setTimeout(() => {
        signup_popup.style.backgroundColor = "#00000050";
        signup_popup_box.style.cssText = "margin-right: 0";
        signup_popup_box.style.opacity = "1";
        signup_popup_toggle.style.cssText = "margin: 0 0 30rem 49rem";
        signup_popup_toggle.style.opacity = "1";
        signup_popup_toggle.style.transform = "rotateZ(-360deg)";
        document.querySelector('header').style.filter = "blur(5px)";
        document.querySelector('main').style.filter = "blur(5px)";
        document.querySelector('footer').style.filter = "blur(5px)";
    }, 200);
})
signup_popup_toggle.addEventListener('click', () => {
    login_sub_box.dispatchEvent(new Event('mouseout'));
    signup_popup_box.style.cssText = "margin-right: 42rem";
    signup_popup_toggle.style.cssText = "margin: 0 0 30rem 81rem";
    signup_popup_box.style.opacity = "0";
    signup_popup_toggle.style.opacity = "0";
    signup_popup.style.backgroundColor = "transparent";
    signup_popup_toggle.style.transform = "rotateZ(0deg)";
    document.querySelector('header').style.filter = "none";
    document.querySelector('main').style.filter = "none";
    document.querySelector('footer').style.filter = "none";


    signup_popup_toggle.style.color = "red";
    signup_popup_toggle.style.backgroundColor = "#ffffff99";

    setTimeout(() => {
        signup_popup_toggle.style.color = "white";
        signup_popup_toggle.style.backgroundColor = "transparent";
    }, 100);


    setTimeout(() => {
        signup_popup.style.display = "none";
    }, 300);
})
// SIGN POPUP TOGGLE WORKING END

// MORE BUTTON MOUSEOVER START 
more_box.addEventListener('mouseover', () => {
    more_sub_box.style.display = 'initial';
    login_button.style.height = '33px';
    login_button.style.width = '125px';
    login_button.style.fontSize = '15px';
    login_button.style.backgroundColor = 'white';
    more_box.style.color = '#e2e2e2c0';
    arrow.style.color = '#e2e2e2c0';
    arrow.style.transform = 'rotateZ(180deg)';

    // TOGGLING OFF DISPLAY OF OTHER CONTAINERS START 
    login_sub_box.style.display = "none";
    fashion_box.style.display = "none";
    electronics_box.style.display = "none";
    home_box.style.display = "none";
    appliances_box.style.display = "none";
    extra_box.dispatchEvent(new Event('mouseout'));
    // TOGGLING OFF DISPLAY OF OTHER CONTAINERS END
});

more_sub_box.addEventListener('mouseover', () => {
    more_sub_box.style.display = 'initial';
    more_box.style.color = '#e2e2e2c0';
    arrow.style.color = '#e2e2e2c0';
    arrow.style.transform = 'rotateZ(180deg)';
});

more_sub_box.addEventListener('mouseout', () => {
    more_sub_box.style.display = 'none';
    more_box.style.color = 'white';
    arrow.style.color = 'white';
    arrow.style.transform = 'rotateZ(0deg)';

});
// MORE BUTTON MOUSEOUT END

// GET_LINK UNDER MORE SUB BOX WORKING START 

get_link.addEventListener('click', () => {
    link_copy_pop.style.filter = "none";
    link_copy_pop.style.display = "flex";
    setTimeout(() => {
        link_copy_pop.style.opacity = "1";
    }, 50);


    setTimeout(() => {
        link_copy_pop.style.opacity = "0";
        link_copy_pop.style.display = "flex";
        link_copy_pop.style.filter = "blur(0.5px)";
    }, 450);
})

// GET_LINK UNDER MORE SUB BOX WORKING END


// WINDOW SCROLL EVENTlISTENER START 

let scrolled = window.scrollY;
let window_present_scroll;
let timer = null;

window.addEventListener('scroll', () => {
    window_present_scroll = window.scrollY;


    if (window_present_scroll > scrolled) {
        scrolled = window_present_scroll;
        document.querySelector('body').className = "bottomScroll";
    }
    else if (window_present_scroll < scrolled) {
        scrolled = window_present_scroll;
        document.querySelector('body').className = "topScroll";
    }
    if (timer !== null) {
        clearTimeout(timer);
    }
    timer = setTimeout(function () {
        document.querySelector('body').className = "defaultScroll";
    }, 10);

})
// WINDOW SCROLL EVENTlISTENER END


// GALLERY SUB ITEMS SELF CUSTOM FUNCTIONS START 

// GALLERY FIRST FUNCTION START 
gallery_first = (item) => {
    document.querySelector(`#${item}_gallery_item`).style.color = 'var(--flipkart-blue)';
    document.querySelector(`#${item}_gallery_item i`).style.transform = "rotateZ(180deg)";
    document.querySelector(`#${item}_gallery_item i`).style.color = "var(--flipkart-blue";
    document.querySelector(`#${item}_box`).style.display = "flex";
    document.querySelector(`#${item}_gallery_item_1`).dispatchEvent(new Event('mouseover'));

}

// GALLERY FIRST FUNCTION END

// GALLERY BOX MOUSEOVER FUNCTION START 

gallery_box_mouseover = (item) => {
    document.querySelector(`#${item}_gallery_item`).style.color = 'var(--flipkart-blue)';
    document.querySelector(`#${item}_gallery_item i`).style.transform = "rotateZ(180deg)";
    document.querySelector(`#${item}_gallery_item i`).style.color = "var(--flipkart-blue";
    document.querySelector(`#${item}_box`).style.display = "flex";
}

// GALLERY BOX MOUSEOVER FUNCTION END

// GALLERY BOX MOUSEOUT FUNCTION START 

gallery_box_mouseout = (item) => {
    document.querySelector(`#${item}_gallery_item`).style.color = 'initial';
    document.querySelector(`#${item}_gallery_item i`).style.transform = "rotateZ(0deg)";
    document.querySelector(`#${item}_gallery_item i`).style.color = "initial";
    document.querySelector(`#${item}_box`).style.display = "none";
}

// GALLERY BOX MOUSEOUT FUNCTION END

// GALLERY ITEMS MOUSEOUT AND MOUSEOVER FUNCTION START 

gallery_items_over_out = (item, n) => {
    for (let i = 1; i <= n; i++) {
        document.querySelector(`#${item}_gallery_item_${i}`).addEventListener('mouseover', () => {
            document.querySelector(`#${item}_${i}`).style.display = "initial";
            document.querySelector(`#${item}_gallery_item_${i}`).style.color = 'var(--flipkart-blue)';
            document.querySelector(`#${item}_gallery_item_${i}`).style.backgroundColor = "#c7c7c731";
            document.querySelector(`#${item}_gallery_item_${i} i`).style.display = "initial";
            document.querySelector(`#${item}_gallery_item_${i} i`).style.color = "var(--flipkart-blue)";

            for (let j = 1; j <= n; j++) {
                if (j === i) {
                    continue;
                }
                document.querySelector(`#${item}_${j}`).style.display = "none";
                document.querySelector(`#${item}_gallery_item_${j}`).style.color = 'initial';
                document.querySelector(`#${item}_gallery_item_${j}`).style.backgroundColor = "inherit";
                document.querySelector(`#${item}_gallery_item_${j} i`).style.display = "none";
                document.querySelector(`#${item}_gallery_item_${j} i`).style.color = "initial";

            }

        });
    }
}

// GALLERY ITEMS MOUSEOUT AND MOUSEOVER FUNCTION END 

// TOGGLING OFF FUNCTION OF THE GALLERY AND OTHER ITEMS START 
toggle_on = (item) => {
    let boxes = ['login_sub', 'more_sub', 'home', 'fashion', 'electronics', 'home', 'appliances', 'extra']

    for (let curr in boxes) {
        if (boxes[curr] == item) {
            continue;
        }
        document.querySelector(`#${boxes[curr]}_box`).dispatchEvent(new Event('mouseout'));
    }
}

// TOGGLING OFF FUNCTION OF THE GALLERY AND OTHER ITEMS END

// GALLERY SUB ITEMS SELF CUSTOM FUNCTIONS END


// GALLERY SUB MENUS WORKING START

// FASHION SUB ITEM WORKING START
fashion_gallery_item.addEventListener("mouseover", () => {
    gallery_first('fashion');
    toggle_on('fashion');
})

fashion_box.addEventListener('mouseover', () => {
    gallery_box_mouseover('fashion');
})

fashion_box.addEventListener('mouseout', () => {
    gallery_box_mouseout('fashion');
})

gallery_items_over_out('fashion', 11);

// FASHION SUB ITEM WORKING END

// ELECTRONICS SUB ITEM WORKING START

electronics_gallery_item.addEventListener('mouseover', () => {
    gallery_first('electronics');
    toggle_on('electronics');
})

electronics_box.addEventListener('mouseover', () => {
    gallery_box_mouseover('electronics');
})

electronics_box.addEventListener('mouseout', () => {
    gallery_box_mouseout('electronics');
})

gallery_items_over_out('electronics', 13);

// ELECTRONICS SUB ITEM WORKING END

// HOME SUB ITEMS WORKING START

home_gallery_item.addEventListener('mouseover', () => {
    gallery_first('home');
    toggle_on('home');
})

home_box.addEventListener('mouseover', () => {
    gallery_box_mouseover('home');
})

home_box.addEventListener('mouseout', () => {
    gallery_box_mouseout('home');
})

gallery_items_over_out('home', 11);
// HOME SUB ITEMS WORKING END


// APPLIANCES SUB ITEMS WORKING START

appliances_gallery_item.addEventListener('mouseover', () => {
    gallery_first('appliances');
    toggle_on('appliances');
})

appliances_box.addEventListener('mouseover', () => {
    gallery_box_mouseover('appliances');
})

appliances_box.addEventListener('mouseout', () => {
    gallery_box_mouseout('appliances');
})

gallery_items_over_out('appliances', 10);

// APPLIANCES SUB ITEMS WORKING END

// EXTRA SUB ITEMS WORKING START

extra_gallery_item.addEventListener('mouseover', () => {
    gallery_first('extra');
    toggle_on('extra');
})

extra_box.addEventListener('mouseover', () => {
    gallery_box_mouseover('extra');
})

extra_box.addEventListener('mouseout', () => {
    gallery_box_mouseout('extra');
})

gallery_items_over_out('extra', 11);
// EXTRA SUB ITEMS WORKING END

// GALLERY SUB MENUS WORKING END 

// LOGIN POPUP INPUT FIELD WORKING START 

login_popup_input_1.addEventListener('focus', () => {
    login_popup_input_1_label.style.margin = ".3rem 11.5rem 0 0";
    login_popup_input_1_label.style.fontSize = "12px";
    login_input_1_border.style.visibility = "visible";
    login_input_1_border.style.width = "21rem";
})

login_popup_input_1.addEventListener('focusout', () => {
    if (!Boolean(login_popup_input_1.value)) {
        login_popup_input_1_label.style.margin = "1.4rem 8.5rem 0 0";
        login_popup_input_1_label.style.fontSize = "16px";
    }

    setTimeout(() => {
        login_input_1_border.style.visibility = "hidden";
    }, 300);
    login_input_1_border.style.width = "0";
})
login_popup_input_2.addEventListener('focus', () => {
    login_popup_input_2_label.style.margin = "-2.5rem 15.8rem 0px 0px";
    login_popup_input_2_label.style.fontSize = "12px";
    login_input_2_border.style.visibility = "visible";
    login_input_2_border.style.width = "21rem";
})

login_popup_input_2.addEventListener('focusout', () => {
    if (!Boolean(login_popup_input_2.value)) {
        login_popup_input_2_label.style.margin = "0 14rem 0 0";
        login_popup_input_2_label.style.fontSize = "16px";
    }

    login_input_2_border.style.width = "0";

    setTimeout(() => {
        login_input_2_border.style.visibility = "hidden";
    }, 300);
})

// LOGIN POPUP INPUT FIELD WORKING END

// SINGUP POPUP INPUT FIELD WORKING START

signup_popup_input_1.addEventListener('focus', () => {
    signup_popup_input_1_label.style.margin = "0.3rem 14rem 0 0";
    signup_popup_input_1_label.style.fontSize = "12px";
    signup_input_1_border.style.visibility = "visible";
    signup_input_1_border.style.width = "21rem";
})

signup_popup_input_1.addEventListener('focusout', () => {
    if (!Boolean(signup_popup_input_1.value)) {
        signup_popup_input_1_label.style.margin = "1.4rem 11.8rem 0 0";
        signup_popup_input_1_label.style.fontSize = "16px";
    }

    setTimeout(() => {
        signup_input_1_border.style.visibility = "hidden";
    }, 300);
    signup_input_1_border.style.width = "0";
})


// SINGUP POPUP INPUT FIELD WORKING END

// COPYING LINK FROM MORE SUB BOX START 

link_input.value = location.href;

get_link.addEventListener('click', () => {

    link_input.style.display = 'initial';
    link_input.select();

    document.execCommand('copy');
    link_input.style.display = 'none';
})

// COPYING LINK FROM MORE SUB BOX END


// RIPPLE EFFECT START 

const buttons = document.querySelectorAll('.ripple');

buttons.forEach(btn => {
    btn.addEventListener('click', function (e) {
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;

        let ripples = document.createElement('span');
        ripples.id = "ripple_span";

        ripples.style.borderColor = "var(--ripple-color)";

        ripples.style.left = x + 'px';
        ripples.style.top = y + 'px';
        this.appendChild(ripples);


        setTimeout(() => {
            ripples.remove();
        }, 450);
    })
})

// `RIPPLE` EFFECT END

// PASSWORD EYE TOGGLE VIEW START 

span_eye.addEventListener('click', () => {
    if (login_popup_input_2.type == "password") {
        login_popup_input_2.type = "text";
        eye_visible.style.display = "initial";
        eye_slash.style.display = "none";
    }
    else {
        login_popup_input_2.type = "password";
        eye_visible.style.display = "none";
        eye_slash.style.display = "initial";
    }
})

// PASSWORD EYE TOGGLE VIEW END

// SPIN BOX TOGGLE START 

dark_mode_checkbox.addEventListener('change', () => {
    document.querySelector('header').style.transition = "filter .2s ease";
    document.querySelector('main').style.transition = "filter .2s ease";
    document.querySelector('footer').style.transition = "filter .2s ease";

    if (dark_mode_checkbox.checked) {
        document.querySelector('.spin_box').style.display = "flex";
        document.documentElement.style.setProperty('--spinner-color', 'black');

        setTimeout(() => {
            document.querySelector('.spin_box').style.backgroundColor = "#0000001e";
            document.querySelector('.spin_box').style.opacity = "1";
            document.querySelector('header').style.filter = "blur(5px)";
            document.querySelector('main').style.filter = "blur(5px)";
            document.querySelector('footer').style.filter = "blur(5px)";
        }, 200);

        setTimeout(() => {
            document.documentElement.style.setProperty('--flipkart-blue', 'black');

            // CHANGING OTHER PROPERTIES START 

            let assured_img = document.querySelectorAll('.assured');

            assured_img.forEach(img => {
                img.src = "images/flipkart_assured_1.png";

            });

            let rating_boxes = document.querySelectorAll('.rating_box');

            rating_boxes.forEach(boxes => {
                boxes.style.backgroundColor = 'black';
            });

            let prices = document.querySelectorAll('.pricing');

            prices.forEach(price => {
                price.style.color = "black";
            });

            document.documentElement.style.setProperty('--icon-hover', '#00000021');

            document.documentElement.style.setProperty('--arrow-click', 'rgba(0, 0, 0, 0.300)');

            document.documentElement.style.setProperty('--button-shadow', 'white');

            document.documentElement.style.setProperty('--ripple-color', 'white');

            moon_icon.style.display = "initial";

            telephone.style.color = 'gold';

            // CHANGING OTHER PROPERTIES END
        }, 1000);

        setTimeout(() => {
            document.querySelector('.loader').style.visibility = "visible";
            document.querySelector('.loader').style.opacity = "1";
        }, 500);

    }
    else {
        document.querySelector('.spin_box').style.display = "flex";
        document.documentElement.style.setProperty('--spinner-color', '#2874f0');

        setTimeout(() => {
            document.querySelector('.spin_box').style.backgroundColor = "#0000001e";
            document.querySelector('.spin_box').style.opacity = "1";
            document.querySelector('header').style.filter = "blur(5px)";
            document.querySelector('main').style.filter = "blur(5px)";
            document.querySelector('footer').style.filter = "blur(5px)";
        }, 200);

        setTimeout(() => {
            document.documentElement.style.setProperty('--flipkart-blue', '#2874f0');

            // CHANGING OTHER PROPERTIES START 

            let assured_img = document.querySelectorAll('.assured');

            assured_img.forEach(img => {
                img.src = "images/flipkart_assured.png";

            });

            let rating_boxes = document.querySelectorAll('.rating_box');

            rating_boxes.forEach(boxes => {
                boxes.style.backgroundColor = 'var(--rating-box)';
            });

            let prices = document.querySelectorAll('.pricing');

            prices.forEach(price => {
                price.style.color = "var(--rating_box)";
            });
            
            document.documentElement.style.setProperty('--icon-hover', '#2874f021');

            document.documentElement.style.setProperty('--arrow-click', '#2874f070');

            document.documentElement.style.setProperty('--button-shadow', 'var(--flipkart-blue)');

            document.documentElement.style.setProperty('--ripple-color', 'var(--flipkart-blue)');

            moon_icon.style.display = "none";

            telephone.style.color = "var(--flipkart-blue)";

            // CHANGING OTHER PROPERTIES END
        }, 1000);

        setTimeout(() => {
            document.querySelector('.loader').style.visibility = "visible";
            document.querySelector('.loader').style.opacity = "1";
        }, 500);

    }

    setTimeout(() => {
        document.querySelector('.spin_box').style.display = "none";
        document.querySelector('.spin_box').style.backgroundColor = "transparent";
        document.querySelector('.spin_box').style.opacity = "0";
        document.querySelector('.loader').style.visibility = "";
        document.querySelector('.loader').style.opacity = "0";

        document.querySelector('header').style.filter = "none";
        document.querySelector('main').style.filter = "none";
        document.querySelector('footer').style.filter = "none";
        document.querySelector('header').style.transition = "filter .6s ease";
        document.querySelector('main').style.transition = "filter .6s ease";
        document.querySelector('footer').style.transition = "filter .6s ease";
    }, 1500)

})

// SPIN BOX TOGGLE END

// IMAGE_SLIDER_CARD_TILT HOVER START

// VanillaTilt.init(document.querySelectorAll(".morph_slide"), {
//     speed: 1000,
//     glare: true,
//     "max-glare" : .3,
//     // reverse: false
//     max: 10,
//     perspective: 750,
// });

// IMAGE_SLIDER_CARD_TILT HOVER END

// SLICEBOX WORKING START

// $(function(){
//     var Page = (function(){
//         var $navArrows = $('#nav-arrows').hide(),
//             $shadow = $('#shadow').hide(),

//             slicebox = $('#image_slide_box').slicebox({
//                 onReady : function(){
//                     $navArrows.show();
//                     $shadow.show();
//                 }, 

//                 orientation: 'h',
//                 cuboidsRandom: false,
//                 cuboidsCount: 5,
//                 maxCuboidsCount : 5,
//                 easing: 'ease',
//                 fallbackFadeSpeed : 300,
//                 speed: 500,
//                 disperseFactor: 30
//             }),

//             init = function(){
//                 initEvents();
//             },

//             initEvents = function(){
//                 $navArrows.children(':first').on('click', 
//                 function(){
//                     slicebox.next();
//                     return false;
//                 });

//                 $navArrows.children(':last').on('click',
//                 function(){
//                     slicebox.previous();
//                     return false;
//                 });
//             };

//             return { init : init };

//     })();

//     Page.init();
// });

// SLICEBOX WORKING END
