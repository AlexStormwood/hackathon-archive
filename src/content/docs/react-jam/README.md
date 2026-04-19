---
title: React Jam
description: Themes and other info about React Jam events.
---

React Jam is an online event where React developers come together to create games in 12 days.

The first five instances of this event all had an additional challenge from a sponsor: "Multiplayer Challenge by Rune". This challenge required developers to use the Rune SDK and achieve the highest playtime out of the competition during a specified window of time, and that window of time is typically after the jam submission deadline has passed.

The sixth instance of this event still had Rune sponsoring and providing that additional challenge, but with a new change: Rune released an MCP server to enable faster generative AI-assisted development.

# Per-Event Information

As a personal note, this northern-hemisphere-defaultism is stupid. As someone living in the southern hemisphere, I won't call a game jam starting in December a "Winter Jam". We can't even be like GGJ and title the instance as a year number, since multiple of these jams occur per year. 

So, the events will be numbered, like Ludum Dare.

| Event Number | Theme                  | Time              | Website                           |
|--------------|------------------------|-------------------|-----------------------------------|
| 1            | Party!                 | 20/07/23-30/07/23 | https://summer-2023.reactjam.com/ |
| 2            | Classics with a Twist! | 19/10/23-29/10/23 | https://fall-2023.reactjam.com/   |
| 3            | Cooperation!           | 26/12/23-07/01/24 | https://winter-2023.reactjam.com/ |
| 4            | 1 Tap!                 | 16/05/24-28/05/24 | https://reactjam.com/spring-2024  |
| 5            | Retro Minimalism       | 27/09/24-07/10/24 | https://fall-2024.reactjam.com/   |
| 6            | Trust No One!          | 16/05/25-27/05/25 | https://reactjam.com/spring-2025  |


# Rules & FAQ

This will be an amalgamation of the Rules & FAQ section from each React Jam, as they are mostly the same. The sixth jam's sponsor introduced an MCP server to aid development, which also led to questions about AI usage in the jam - so the FAQ was updated to address that.

## What kind of games can I make?

Your imagination is the limit! Just make a game using React that's below 10mb when zipped, doesn't perform network requests, and follows the community guidelines (e.g no NSFW games). You can take a look at the other FAQ answers for more details on these points.

For the Rune Multiplayer Challenge your game must be multiplayer and work on mobile in portrait mode. A game is multiplayer as long as it's playable by more than one player. It's completely fine if you create a multiplayer game that can also be played solo. See e.g. the [multiplayer Sudoku example](https://github.com/rune/rune-games-sdk/tree/staging/examples/sudoku).

## What qualifies as a React-based game?

React Jam is all about using React to code up games. As a community, we learn from each other about the nuances of using React when building games. Your game must use React directly, meaning that it uses a package.json file with React as a dependency and uses React, React Pixi, React Three Fiber or similar for rendering. We allow Preact as well. You can also use standard web primitives like plain HTML and canvas for rendering alongside React. You shouldn't use a library which abstracts away from React concepts completely or a framework where your game logic is created visually w/o coding JS. This focus helps us gather a rich community around the intersection of React and games!

You can use anything that compiles to JavaScript (JS) to make your game, e.g. TypeScript (TS). You can also combine React with any other JS/TS libraries or use WebAssembly code as part of your game. It's also totally fine to use tools like Triplex for visually editing your React game scene as long as your game is coded using React and JS.

## Can I use AI to help me make my game?

Absolutely! You can use AI and [Rune's MCP tool](https://github.com/rune/rune/blob/staging/packages/rune-mcp/README.md) to build, test and publish mobile, multiplayer games with integrated voice chat faster than ever before. Setup is super easy too.

## What assets and code snippets can I use to make my game?

You can only use assets that you have the right to use. You can use open-source assets, but please credit the authors if required. You may not use any copyrighted assets or material that infringes on any third party's rights or trademarks in your submission. For instance, you cannot copy the exact art style of another game. Similarly, you cannot not name your game submission using a trademarked game name.

You may reuse code or assets from previous projects in your submission but the game itself must be created for the jam. Using LLMs like ChatGPT and generative AI is OK as long as you mention what tool and to what extent it’s used in your game description.

## Where will my game be hosted and can it use network requests?

Your game will be hosted on reactjam.com or Rune's servers if you're participating in the Rune Multiplayer Challenge. The compiled and zipped game bundle that you upload must be playable in a browser and be below 10mb so everyone can try it out easily.

To protect user privacy and to ensure a seamless playing experience, your game must be a self-contained bundle with an index.html file at its root. Your game cannot perform any network requests or fetches from remote websites so that it will always work. React Jam was inspired by the [js13k game jam](https://js13kgames.com/), where it's awesome that you can play games all the way back to those submitted in 2012!

## Can I make my game with others as a team?

Yes, definitely! You can make a game alone or with a team. You can even submit multiple games!

If you're looking for others to collaborate with, we encourage you to tweet on [Twitter using #reactjam](https://twitter.com/search?q=%23reactjam&src=typed_query), write a post on the [React Jam reddit](https://www.reddit.com/r/reactjam/), or join [Rune's Discord](https://discord.gg/rune-ai).

## Can I make my game in less than 10 days?

Yes! In fact, most participants will likely spend much less time than the full 10 days. Your game must follow the theme, which will be posted on (event start date). After that you can submit anytime you like before the jam ends on (event end date).

It's possible to create a fun React-based game in very little time, especially if you focus on the gameplay. Another way to speed up development is to start from an open-source example. That's completely fine as long as your game fits the theme!

## At what time of day does the jam begin and end?

The jam starts and ends at 1pm UTC.

## Can I make changes to my game after the deadline?

Submissions close on (event end date). Your submission will be judged on the build you submitted before the deadline.

## Where can I find art and audio for my game?
The GMTK Jam has an excellent curated list that we recommend:

Please check the license before using any assets in your project and credit the author in your game’s description!

#### Art Assets

- [OpenGameArt](https://opengameart.org/) (2D + 3D)
- [Kenney](https://www.kenney.nl/assets) (2D + 3D)
- [Game-Icons](https://game-icons.net/) (2D)
- [Textures.com](https://www.textures.com/) (Textures)
- [Poliigon](https://www.poliigon.com/search?credit=0) (Textures)
- [Poly.pizza](https://poly.pizza/) (3D)
- [Mixamo](https://www.mixamo.com/) (Animations)

#### Fonts

- [Fontsource](https://github.com/fontsource/fontsource) (Fonts)
- [Font Squirrel](https://www.fontsquirrel.com/) (Fonts)
- [Google Fonts](https://fonts.google.com/) (Fonts)

#### Audio

- [Incompetech - Royalty Free Music](https://incompetech.com/music/royalty-free/) (Music)
- [Free Music Archive](https://freemusicarchive.org/) (Music)
- [Freesound](https://freesound.org/) (SFX)
- [OpenGameArt](https://opengameart.org/) (Music + SFX)
- [Kenney](https://www.kenney.nl/assets?q=audio) (Music + SFX)
- [Soniss](https://sonniss.com/gameaudiogdc) (SFX)

#### Tools

- [BitFontMaker2](http://www.pentacom.jp/pentacom/bitfontmaker2/) (Fonts)
- [Photopea](https://www.photopea.com/) (Art)
- [sfxr](https://www.drpetter.se/project_sfxr.html) (SFX)
- [Chiptone](https://sfbgames.itch.io/chiptone) (SFX)
- [Bosca Ceoil](https://boscaceoil.net/) (Music)
- [BeepBox](https://www.beepbox.co/) (Music)
- [Lospec](https://lospec.com/palette-list) (Palettes)
- [Tiny Tools](https://tinytools.directory/) (More!)


## How are the submissions judged?

Submissions will be judged based on the rating criteria of Fun, Theme and Presentation. The games that score the highest across the 3 rating criteria win the Best Game category.

The Best Game evaluation is done in two steps to be mindful of our external judges' time. First, an internal React Jam Committee finds the top 10 games. The judges then evaluate these top games to find the winner. If you would like to be part of the React Jam Committee, then please reach out to organizers@reactjam.com.

For the Rune Multiplayer Challenge, the winners will be selected based on the highest play time during (week or two after event end date). These prizes will be on top of the Best Game category, i.e. a game can win both Best Game and Rune Multiplayer Challenge.

## How are the winners announced?

The winners will be unveiled on the React Jam social accounts on (day after judging period). We will also email everyone who signed up for the React Jam emailing list and of course the winners themselves.

## How do I submit a game?

For the Multiplayer Challenge you submit your game by uploading it using the [Rune CLI](https://developers.rune.ai/docs/publishing/publishing-your-game). You can ask any questions in [Rune's Discord](https://discord.gg/rune-ai). Your game is automatically eligible for the best game category and you don't need to worry about the Rune review process.

If you're not participating in the Multiplayer Challenge, you submit your game using [this form](https://oy1qj8t3ptu.typeform.com/react-jam). You should only upload your compiled game, i.e. the output in your "dist" or "build" folder.

## How do I see and play the submissions?

As part of announcing the winners, we'll update this website to list all submissions. The submissions will be playable directly on this website or inside the Rune app if they participated in the Rune Multiplayer Challenge.

## Where can I see previous React Jams?

You can see the previous React Jams along with its winners and submissions here:

(Dot point list of previous React Jam events matching the event table at the top of this Hackathon Archive page!)

## How can I promote / sponsor React Jam?

Amazing if you'd like to help get people excited about building games with React! Please share this website with friends and to any forums / social media that you think might be interested in React Jam.

If your company would like to help sponsor React Jam by contributing prizes or similar, then please reach out to organizers@reactjam.com.

## How are the cash prizes paid out?

The cash prizes will be provided to you via PayPal. To receive your cash prize, you must have a PayPal account and there cannot be any laws forbidding US entities from transferring money to you (e.g. you cannot be affiliated with known terrorist groups). We will attempt to transfer the cash prize to you quickly and you should receive it within 30 business days.

## How do I share progress on making my game?

We're sure lots of people would be excited to see what you're making! The best way to share progress is to share screenshots on Twitter using the #reactjam hashtag. That way, everyone involved in React Jam will have a chance to see what you're making. We'll also help boost the exposure of your game through our social media accounts.

## Who organizes React Jam?

React Jam is organized by a community of React enthusiasts, who are also passionate about gaming. React Jam began when a couple of Rune employees came up with the idea and convinced Rune to become the first sponsor to kickstart it. React Jam now has a growing community behind it, with multiple organizations and companies sponsoring the jam and the prize money.

We're always actively talking with other companies and organizations for them to be part of organizing React Jam. If you'd like to help organize the event, please reach out to us at organizers@reactjam.com!

## What’s the legal stuff?

Anything you create during React Jam is your property and React Jam or its sponsors claims no ownership rights over your game. The same applies to any game uploaded to the Rune platform for the Multiplayer Challenge.

Any game submitted to React Jam will be available for players to try on reactjam.com or on the Rune platform if your game was submitted to the Rune Multiplayer Challenge. You may request your game to be removed at any time after the React Jam submission deadline and we'll remove it within 7 business days.

Recordings and screenshots of any game submitted to React Jam may be used for promotional purposes by React Jam or its sponsors and shown e.g. on social media, in YouTube videos, or as part of marketing campaigns, without your express permission.

If you have any questions at all, write us at organizers@reactjam.com. We're always happy to help. Hope you'll enjoy participating in React Jam!









