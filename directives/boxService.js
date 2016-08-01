/**
 * Created by Дмитрий on 30.07.2016.
 */
app.service("boxService", function($http){

  this.values= {
    items: [
      {
        id: 1,
        title: "Search",
        description: "Google search description",
        iconURL: "http://www.userlogos.org/files/imagecache/thumbnail/logos/jumpordie/google_search.png"
      },
      {
        id: 2,
        title: "Analytics",
        description: "Google analytics description",
        iconURL: "http://www.userlogos.org/files/imagecache/thumbnail/logos/jumpordie/google_analytics.png"
      },
      {
        id: 3,
        title: "Answers",
        description: "Google Q&A description",
        iconURL: "http://www.userlogos.org/files/imagecache/thumbnail/logos/jumpordie/google_answers.png"
      },
      {
        id: 4,
        title: "Blog Search",
        description: "Google blog search description",
        iconURL: "http://www.userlogos.org/files/imagecache/thumbnail/logos/jumpordie/google_blogsearch.png"
      },
      {
        id: 5,
        title: "Calendar",
        description: "Google calendar description",
        iconURL: "http://www.userlogos.org/files/imagecache/thumbnail/logos/jumpordie/google_calendar_0.png"
      },
      {
        id: 6,
        title: "Dictionary",
        description: "Google dictionary description",
        iconURL: "http://www.userlogos.org/files/imagecache/thumbnail/logos/jumpordie/google_dictionary.png"
      },
      {
        id: 7,
        title: "Images",
        description: "Google images description",
        iconURL: "http://www.userlogos.org/files/imagecache/thumbnail/logos/jumpordie/google_images.png"
      },
      {
        id: 8,
        title: "Mobile Application",
        description: "Google mobile application description",
        iconURL: "http://www.userlogos.org/files/imagecache/thumbnail/logos/jumpordie/google_mobile_app.png"
      },
      {
        id: 9,
        title: "News",
        description: "Google news description",
        iconURL: "http://www.userlogos.org/files/imagecache/thumbnail/logos/jumpordie/google_news.png"
      },
      {
        id: 10,
        title: "Translate",
        description: "Google translate description",
        iconURL: "http://www.userlogos.org/files/imagecache/thumbnail/logos/jumpordie/google_translate.png"
      },
      {
        id: 11,
        title: "Video",
        description: "Google video description",
        iconURL: "http://www.userlogos.org/files/imagecache/thumbnail/logos/jumpordie/google_video.png"
      },
      {
        id: 12,
        title: "Chrome Browser",
        description: "Google chrome description",
        iconURL: "http://www.userlogos.org/files/imagecache/thumbnail/logos/jumpordie/google_chrome.png"
      },
      {
        id: 13,
        title: "Youtube",
        description: "Google youtube description",
        iconURL: "http://www.userlogos.org/files/imagecache/thumbnail/logos/jumpordie/youtube.png"
      },
      {
        id: 14,
        title: "Docs",
        description: "Google docs description",
        iconURL: "http://www.userlogos.org/files/imagecache/thumbnail/logos/jumpordie/google_docs.png"
      }
    ]
  }
});