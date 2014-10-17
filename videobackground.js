(function ($) {
    //add the videBackground function to the jQuery library
    $.fn.videoBackground = function(video, options) {
        var that = this;
        if(typeof options === 'undefined') options = {};

        //check and see if options were passed
        var settings = {};
        settings.autoplay = options.autoplay ? options.autoplay : 'autoplay';
        settings.muted = options.muted ? options.muted : 'muted';
        settings.loop = options.loop ? options.loop : 'loop';
        settings.fit = options.fit ? options.fit : 'fill';
        settings.src = options.src ? options.src : video;

        //append a video tag to the target element
        that.append($('<video>')
            .attr({'autoplay': settings.autoplay, 'muted': settings.muted, 'loop': settings.loop, 'src': settings.src})
            .css({'height': '100%', 'width': '100%', 'object-fit': settings.fit, 'overflow': 'hidden', 'position': 'absolute'}));

        //sets the initial video size
        resizeVideo(that);

        //updates the sizing as the window size changes
        $(window).on('resize', function(e) {
            that.css({'width': '100%', 'height': '100%'});
            resizeVideo(that);
        });

        //function to adjust the video size as needed
        function resizeVideo(vidElement) {
            vidElement.height(vidElement.height());
            vidElement.width(vidElement.width())
        }
    }
}(jQuery));
