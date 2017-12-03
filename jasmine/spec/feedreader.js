/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {


    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe("RSS Feeds", function() {
        /* Spec 1: It tests to make sure that the allFeeds variable has been
         * defined and that it is not empty. Experiment with this before you
         * get started on the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the page?
         */
        it("allFeeds variable has been defined and that it is not empty", function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Spec 2: Write a test that loops through each feed in the allFeeds
         * object and ensures it has a URL defined and that the URL is not empty.
         */
         it("feed has a URL defined and that the URL is not empty", function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.length).not.toBe(0);
            });
        });

        /* Spec 3: Write a test that loops through each feed in the allFeeds object
         * and ensures it has a name defined and that the name is not empty.
         */
         it("feed has a name defined and that the name is not empty", function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name).not.toBe("");
            });
        });
    });

    /* A new test suite named "The menu" */
    describe("Menu", function() {
        /* Spec 1: Write a test that ensures the menu element is
         * hidden by default.
         * Looking at the HTML the hiding/showing of the menu element with
         * menu-hidden class.  It doesn't have id to call element(by.id)
         */
        it("menu element is hidden by default", function() {
            //expect(element(by.id('my-id')).isPresent()).toBe(true);
            expect($("body").hasClass("menu-hidden")).toBe(true);
        });

        /* Spec 2: Write a test that ensures the menu changes
         * visibility when the menu icon is clicked.
         */
        it("menu changes visibility when the menu icon is clicked", function() {
            
            var menuIconLink = $(".menu-icon-link");
            // the menu display (menu-hidden = FALSE) when clicked
            menuIconLink.click();
            expect($("body").hasClass("menu-hidden")).toBe(false);
            // the menu hidden (menu-hidden = TRUE) when clicked again
            menuIconLink.click();
            expect($("body").hasClass("menu-hidden")).toBe(true);
        });
        
    });

    /* A new test suite named "Initial Entries" */
    describe("Initial Entries", function() {

        /* Spec 1: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */

         // LoadFeed() is asynchronous so this test will require
         // the use of Jasmine's beforeEach and asynchronous done() function.
         beforeEach(function(done) {
            loadFeed(0, done);
         });
         it("after loadFeed call there is at least a single .entry in the .feed container", function(done) {
            var entry = $(".entry");
            expect(entry.length).toBeGreaterThan(0); //at least one .entry element in .feed
            done();
        });
    });

    /* A new test suite named "New Feed Selection" */
    describe("New Feed Selection", function() {

        /* Spec 1: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

    });

}());