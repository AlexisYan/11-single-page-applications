'use strict';
var app = app || {};

(function(module) {
  const aboutController = {};

  // Done: Define a function that hides all main section elements, and then reveals just the #about section:
  aboutController.init = function() {
    app.Article.fetchAll(app.articleView.initArticleViewPage);
    $('.tab-content').hide();
    $('#about').fadeIn();
  }
  module.aboutController = aboutController;
})(app);
