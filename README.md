# vue-sticky-scroll
__Proper Sticky Scrolling for Vue 2.x__

All the other examples either don't work, or forcibly keep the scroll at the bottom despite the user having scrolled up.
This:
1. works.
2. only keeps the view scrolled while it is at the bottom. Ie it allows the user to scroll away without being disturbed.


# How it works

When the view is at the bottom (within 100px), the "sticky" is added to the element's classes.

When the container is updated, if the "sticky" class is present, the element will be scrolled to the bottom.

## Installation

ctrl+c
ctrl+v
