(function ($) {
    //add the videBackground function to the jQuery library
    $.fn.videoBackground = function(video, options) {
        //check and see if options were passed
        var settings = options ? options : {
            autoplay: 'autoplay',
            muted: 'muted',
            loop: 'loop',
            fit: 'fill',
            src: video,
        };

        //because closures
        var el = this;

        //append a video tag to the target element
        var $vid = $('<video>');
        $vid.attr('autoplay', settings.autoplay);
        $vid.attr('muted', settings.muted);
        $vid.attr('loop', settings.loop);
        $vid.attr('src', settings.src);
        $vid.css('height', '100%');
        $vid.css('width', '100%');
        $vid.css('object-fit', settings.fit);
        $vid.css('overflow', 'hidden');
        $vid.css('object-position', 'center center');
        el.append($vid);

        //sets the initial video size
        resizeVideo(el);

        //updates the sizing as the window size changes
        $(window).on('resize', function(e) {
            el.css('width', '100%');
            el.css('height', '100%');
            resizeVideo(el);
        });

        //function to adjust the video size as needed
        function resizeVideo(vidElement) {
            vidElement.height(vidElement.height());
            vidElement.width(vidElement.width())
        }
    }
}(jQuery));
