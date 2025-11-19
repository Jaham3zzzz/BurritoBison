<link rel="stylesheet" href="style.css">

<!-- Fake Kongregate API so game doesn't crash -->
<script>
  window.kongregate = {
    services: {
      connect: () => {}
    },
    stats: {
      submit: (a,b) => console.log("Stat submitted:", a, b)
    },
    payments: {
      showRegDialog: () => {}
    },
    getUsername: () => "Guest",
    getUserId: () => 0
  };
</script>

<script src="UnityProgress.js"></script>
<script src="burrito-bison-ll.js"></script>

<script>
  var gameInstance = UnityLoader.instantiate("gameContainer", "burrito-bison-ll.json", {
    onProgress: UnityProgress,
    Module:{
      onRuntimeInitialized: function() {
        UnityProgress(gameInstance, "complete");
      }
    }
  });
</script>

<div class="webgl-content">
    <div id="gameContainer" style="width: 100%; height: 100%; margin: auto"></div>
</div>
