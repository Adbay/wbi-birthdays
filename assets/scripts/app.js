$(function() {
  // load the widget configuration
  var config = new WidgetConfig();
  config.on("config-initialized", function(event, data) {
    //$("#output").text(config.preferences["Article Number"]);
    //load the page
    $.get(config.preferences["Feed"], "", function(data, textStatus, jqXHR) {
      console.log(data);
      var html = "";
      for (var i = 0; i < data.length; i++) {
        if (data[i][0] == "") break;
        html += "<div class=\"small-6 cell text-right\">" + data[i][0] + "</div> " + "<div class=\"small-6 cell\">" + data[i][1] + "</div>";
      }
      $("#birthday-list").html(html);
    });
  });
  config.on("config-error", function() {
    $("#output").text("Error loading preferences");
  });
  config.init();
});

function get_random(myList) {
  return Math.floor(Math.random() * 72);
}
