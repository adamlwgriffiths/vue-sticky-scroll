Vue.directive('sticky-scroll', {
    bind(element) {
        // make sticky to begin with
        element.classList.add('sticky');

        // add a scroll listener
        // if we're at the bottom (or close enough to it)
        // add a class "sticky" to the element
        element.addEventListener('scroll', () => {
            const max_y = element.scrollHeight - element.clientHeight;
            const scroll_y = element.scrollTop;
            const deviation = 100;
            if(scroll_y >= (max_y - deviation)) {
                element.classList.add('sticky');
            } else {
                element.classList.remove('sticky');
            }
        });
    },
    componentUpdated(element) {
        // if the element has the "sticky" class
        // scroll to the bottom
        if(element.classList.contains('sticky')) {
            element.scrollTop = element.scrollHeight;
        }

    }
});
