function checkScrollSpy() {
    try {
        var scrollSpys = [].slice.call(document.querySelectorAll("[data-bs-spy=\"scroll\"]"));
        var scrollSpysLength = scrollSpys.length;

        for (var i = scrollSpysLength; i--;) {
            var $spy = $(scrollSpys[i]);

            $.fn['scrollspy'].call($spy, $spy.data());
        }
    } catch {
        // ignore
    }
}

function showModal(s) {
    $(`#${s}`).modal('show');
}

function hideModal(s) {
    $(`#${s}`).modal('hide');
}

function collapse(s, b) {
    if (b)
        $(`#${s}`).collapse('show');
    else
        $(`#${s}`).collapse('hide');
}

window.anchorLink = {
    scrollIntoView: function (elementId) {
        // This function is called from the AnchorLink component using JavaScript interop.
        // It will try to find an element using the ID given to the function, and scroll that
        // element into view, if an element is found.
        var elem = document.getElementById(elementId);
        if (elem) {
            elem.scrollIntoView();
            window.location.hash = elementId;
        }
    }
}