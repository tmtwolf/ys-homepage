// ここを同期処理にしたい、スライダー読み込み感知したい
$(document).ready(function () {
    endLoading();
    setSlider();
});

function setSlider() {
    $("#vegas").width("100%");
    $("#vegas").height("100%");
    $("#vegas").vegas({
        slides: [
            { src: "assets/test/a.png" },
            { src: "assets/test/b.png" },
            { src: "assets/test/c.png" },
        ],
        transition: ["fade"],
        animation: ["kenburns"],
        preload: true,
        timer: false,
        delay: 6000,
        transitionDuration: 2000,
    });
}

function endLoading() {
    setTimeout(() => {
        $(".loading").addClass("loaded");
    }, 1000);
}
