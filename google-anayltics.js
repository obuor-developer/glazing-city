window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'YOUR_TRACKING_ID');

// Track Social Media Visitors
gtag('event', 'social_media_click', {
  'event_category': 'Social Media',
  'event_label': 'Instagram'
});
