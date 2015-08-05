# The #RealDiversityNumbers of your Twitter

This is aittle Twitter app to get a sense of how diverse your own Twitter experience is. The procedure is simple:

1. You authenticate with Twitter, and the app will pull down a sampling (up to 150) of people you *Follow* on Twitter.
2. You go through this sampling of people and tag the gender and race, to get a glimpse of how diverse or homogeneous your Twitter experience is.
3. There is no step 3.

## Why do this?

You might be interested in getting a better idea of whether you are following a diverse mix of people, or whether you have a pretty homogeneous stream. The latter does not have to be a bad thing, mind you. This app does not judge you; it only provides transparency into your follow_ing_.

## What about privacy?

By design, this app _does not store any data_. It uses a session-based temporary database in your browser (called [`sessionStorage`](http://www.w3.org/TR/webstorage/)), so the stored data is _limited to your current browsing session_. That means: if you quit your browser in the middle of doing this, you’ll have to start over again. The reason for that is maximizing privacy and sensitive data concerns: *no one* will ever find out how you identified specific people you follow, and no one can ever make use of it for anything else.

## Can I contribute?

Absolutely! The whole application runs off of this GitHub repository and a Heroku dynamic server, and we welcome Pull Requests. If that sentence makes sense to you, you’re good to go. If it doesn’t but you still want to contribute, [hit me up on Twitter](https://twitter.com/KuraFire)!

## Who made this?

This app was lovingly crafted by [Faruk Ateş](https://twitter.com/KuraFire) and [Dominic Dagradi](https://twitter.com/dddagradi). You should follow us if you like this kind of thing!
