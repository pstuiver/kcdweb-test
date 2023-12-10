+kcdweb test site to test new features/designs when deployed on GH Pages with different browsers, devices, etc.
This test site is hosted on https://pstuiver.github.io/kcdweb-test/

The actual, production site where new features will eventually be implemented, is hosted on GH Pages in a custom domain - www.kidzcandurban.com

### Note to developer

Various methods were tested to restore scroll position on the home page when returning from navigating to one or more "views" routes.
This worked perfectly in previous versions of the website when built with html/css, Jekyll and using the browser's history.go(-1) functionality.

Did not work with first SvelteKit iteration. Methods tried to fix included Svelte's built-in "snapshot" functionality to reset scrollY positions ... but this worked intermittently on mobile Safari devices (iPhones).

Eventually, after many tries and tests, the problem was identified as the target="_self" attribute in the <a> tags.
When the target="_self" was removed (and replaced with nothing) all the <a> tags started behaving as expected and would return to their previous scroll position when a back-button with history.go(-1) or history.back().
