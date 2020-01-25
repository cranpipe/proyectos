$(document).ready(function() {

  $(function() {
    $('[data-toggle="tooltip"]').tooltip()
  });

  $(function() {
    $('[data-toggle="popover"]').popover();
  });


  $(function() {
    $("a").click(function(event) {
      if (this.hash !== "") {
        event.preventDefault();

        var gato = this.hash;
        var diferencial = 0;

        if (this.hash == "#aboutme") {
          diferencial = 250;
        }

        if (this.hash == "#trabajos") {
          diferencial = 70;
        }

        if (this.hash == "#contacto") {
          diferencial = 60;
        }
        $("html, body").animate({
          scrollTop: $(gato).offset().top - diferencial
        }, 800);
      }
    });
    $('[data-toggle="popover"]').popover();
  });



});
