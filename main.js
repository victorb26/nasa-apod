let botao = $("#submit");

 botao.click(function(event){
    event.preventDefault();
    executar();
});

function executar() {
    let diaFoto = $("#date").val();

    $.ajax({
        url: `https://api.nasa.gov/planetary/apod?api_key=wBZ2RTKbK33SJnnxb8Oi8DUFITHiGSCeBqHV2zDE&date=${diaFoto}`,
        type: "GET",
        contentType: "application/json",

success: function (execucao) {
 $("#title").text(execucao.title);
 $("#date-init").text(execucao.date);
 $("#text").text(execucao.explanation);
 $("#author").text(execucao.copyright);
 


            if (execucao.media_type == "image") {
              $("#images").attr("src", execucao.url);
              document.getElementById("images").style.display = "block";
              document.getElementById("video").style.display = "none";
            } else {
              document.getElementById("images").style.display = "none";
              document.getElementById("video").style.display = "block";
              $("#video").attr("src", execucao.url);
            }
     return execucao;
    },
});
}