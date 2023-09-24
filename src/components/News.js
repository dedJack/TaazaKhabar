import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
   articles = [
    {
      "source": {
        "id": "google-news-au",
        "name": "Google News (Australia)"
      },
      "author": "Wide World of Sports",
      "title": "RECAP: Grand final bound Lions euphoric after 'long road', overcoming early onslaught - Wide World of Sports",
      "description": null,
      "url": "https://news.google.com/rss/articles/CBMi4gFodHRwczovL3d3b3MubmluZS5jb20uYXUvYWZsL3ByZWxpbWluYXJ5LWZpbmFscy1saXZlLXNjb3Jlcy0yMDIzLXJlc3VsdHMtYnJpc2JhbmUtbGlvbnMtY2FybHRvbi1ibHVlcy11cGRhdGVzLWtpY2stb2ZmLXRpbWUtbmV3cy1kYW5pZWwtbWNzdGF5LXRvLXNpdC1vdXQtZ3JhbmQtZmluYWwtYWZ0ZXItaW5qdXJ5LWhlYXJ0YnJlYWsvMzYxOWFkZDctOTI5My00ODNkLWFkZDgtOTRmZTkzNGEzNWI20gFGaHR0cHM6Ly9hbXAubmluZS5jb20uYXUvbGl2ZS1ibG9nLzM2MTlhZGQ3LTkyOTMtNDgzZC1hZGQ4LTk0ZmU5MzRhMzViNg?oc=5",
      "urlToImage": null,
      "publishedAt": "2023-09-23T08:51:08+00:00",
      "content": null
    },
    {
      "source": {
        "id": "cbs-news",
        "name": "CBS News"
      },
      "author": "CBS News",
      "title": "How Coach Prime and the Colorado Buffaloes took over college football",
      "description": "Deion Sanders and the Colorado Buffaloes have taken the college football world by storm this season and are quickly becoming the biggest story in all of sports. CBS Colorado anchor and reporter Justin Adams joins to discuss how Coach Prime brought the team to…",
      "url": "https://www.cbsnews.com/video/how-coach-prime-colorado-buffaloes-took-over-college-football/",
      "urlToImage": "https://assets3.cbsnewsstatic.com/hub/i/r/2023/09/23/5d133288-4f89-47bd-b149-99575045fc3f/thumbnail/1200x630/b0daec796c3ca13228df361c732254ab/coach-prime.jpg?v=f5251b37272e6b1bc4e5456ab4445a67",
      "publishedAt": "2023-09-23T00:57:00+00:00",
      "content": "Watch CBS News\r\nCopyright ©2023 CBS Interactive Inc. All rights reserved.\r\nGet browser notifications for breaking news, live events, and exclusive reporting.\r\nNot NowTurn On"
    },
    {
      "source": {
        "id": "fox-sports",
        "name": "Fox Sports"
      },
      "author": "Joel Klatt",
      "title": "Joel Klatt: What to expect in 'best slate of games we've had in years' in Week 4",
      "description": "FOX Sports lead college football analyst Joel Klatt shared his thoughts on Ohio State-Notre Dame, Oklahoma-Cincinnati, Colorado-Oregon and more.",
      "url": "http://www.foxsports.com/stories/college-football/joel-klatt-week-4-preview",
      "urlToImage": "https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2023/09/1408/814/09.21.23_Klatt-Weekly-Preview_16x9.jpg?ve=1&tl=1",
      "publishedAt": "2023-09-22T21:13:17Z",
      "content": "The 2023 college football season officially begins this week, as this is the best slate of games we've had in years. \r\nThere are six ranked matchups on the Week 4 schedule and significant games in ea… [+12579 chars]"
    },
    {
      "source": {
        "id": "bleacher-report",
        "name": "Bleacher Report"
      },
      "author": null,
      "title": "NFL Stars in Reality TV ",
      "description": "Fan easier, fan faster and fan better with Bleacher Report. Keep up with the latest storylines, expert analysis, highlights and scores for all your favorite sports.",
      "url": "https://bleacherreport.com/videos/462993-gridiron-heights-episode-3",
      "urlToImage": null,
      "publishedAt": "2023-09-22T18:22:17.2736148Z",
      "content": "49ers. Jets. Packers. This Gridiron Heights episode is WILD"
    },
    {
      "source": {
        "id": "bleacher-report",
        "name": "Bleacher Report"
      },
      "author": null,
      "title": "⭐️ Micah Responds to DAL Critics ⭐️",
      "description": "Fan easier, fan faster and fan better with Bleacher Report. Keep up with the latest storylines, expert analysis, highlights and scores for all your favorite sports.",
      "url": "https://bleacherreport.com/videos/462889-the-edge-with-micah-parsons-ep-2-vod",
      "urlToImage": null,
      "publishedAt": "2023-09-22T18:07:19.9459894Z",
      "content": "Copyright © 2023 Bleacher Report, Inc. Turner Broadcasting System, Inc.\r\n All Rights Reserved.\r\n BleacherReport.com is part of Bleacher Report Turner Sports Network, part of the Turner Sports and Ent… [+200 chars]"
    },
    {
      "source": {
        "id": "wired",
        "name": "Wired"
      },
      "author": "Wired",
      "title": "Streaming TV Is Entering Its Jock Phase",
      "description": "Like, literally. Everyone, save for maybe Netflix, is clamoring to offer sports as content dries up amid the Hollywood strikes. The latest to enter the scrimmage: (HBO) Max.",
      "url": "https://www.wired.com/story/streaming-wars-sports-espn-disney-charter-netflix",
      "urlToImage": "https://media.wired.com/photos/650cd881f4c0c10b17229943/191:100/w_1280,c_limit/Streaming-Enters-Its-Jock-Era-Culture-1683550892.jpg",
      "publishedAt": "2023-09-22T13:00:00Z",
      "content": "Gather round, ye readers, I have a question for you: Are you ready for some football? Worldwide, where football is what Americans call soccer, theres always someone, somewhere ready to answer yes to … [+2695 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "[Removed]"
      },
      "author": null,
      "title": "[Removed]",
      "description": "[Removed]",
      "url": "https://removed.com",
      "urlToImage": null,
      "publishedAt": "1970-01-01T00:00:00Z",
      "content": "[Removed]"
    },
    {
      "source": {
        "id": "usa-today",
        "name": "USA Today"
      },
      "author": null,
      "title": "Daily Briefing",
      "description": "The day's top stories, from sports to movies to politics to world events.",
      "url": "https://profile.usatoday.com/newsletters/daily-briefing/",
      "urlToImage": "https://profile.usatoday.com/newsletters/resources/usat/property/usatoday/newsletter-thumbs/8872UT-E-NLETTER02@2x.jpg",
      "publishedAt": "2021-08-15T15:35:07+00:00",
      "content": "The day's top stories, from sports to movies to politics to world events."
    }
  ]

  constructor(){
    super();
    console.log("I am news constructor.");
    this.state = {
      articles : this.articles,
      loading : false
    }
  }

  render() {
    return (
      <div className="container my-3 ">
        <h1><strong>TaazaKhabar - TOP Headlines</strong></h1>
        <div className="row">
          <div className="col-md-4 my-4">
            <NewsItem title="Streaming TV Is Entering Its Jock Phase"  description="Like, literally. Everyone, save for maybe Netflix, is clamoring to offer sports as content dries up amid the Hollywood strikes. The latest to enter the scrimmage: (HBO) Max." imageUrl="https://media.wired.com/photos/650cd881f4c0c10b17229943/191:100/w_1280,c_limit/Streaming-Enters-Its-Jock-Era-Culture-1683550892.jpg" newsUrl = "TODO"/>
          </div>
          <div className="col-md-4 my-4">
            <NewsItem title="myTitle" description="myDesc"/>
          </div>
          <div className="col-md-4 my-4">
            <NewsItem title="myTitle" description="myDesc"/>
          </div>
          
        </div>
      </div>
    )
  }
}

export default News
