## VideoBackground.js

Very simple jquer plugin to add an html5 video as background to an element on a
page with a few limited options. If you're looking for a quick way to add a
video background to a full webpage, include the following snippet in your
`$(document).ready()` function:

```javascript
$('body').videoBackground('<path to your video file>');
```

Checkout `vidtest.html` for and example.

You can also call `vidoeBackground` with a settings object to control autoplay,
whether you want the video muted, whether it loops, etc.

```javascript
var settings = {autoplay: 'autoplay',
                muted: 'muted',
                loop: 'loop',
                fit: 'fill', //changes the object-fit property of the video
                src: <url to vido> //
               }

$('body').videoBackground(, settings);
```

Works great with Chrome, kind of works with IE, and resize doesn't look to be working on Firefox.

Keep in mind that videos, while smaller than their .gif equivalents are still
big.  Mobile users, impatient customers, people in Australia, and others may
hate you for putting a moving background on your site...but it has it's place.


