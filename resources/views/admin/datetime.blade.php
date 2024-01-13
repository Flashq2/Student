
<style>
  #datetime {
    color: white;
    margin-left: 35px;
  }
  p{
    color: white;
    margin-left: 30px;
  }
</style>
<p>Date Time</p>
<span id="datetime"></span>

<script>
  function updateDateTime() {
    const now = new Date();
    const currentDateTime = now.toLocaleString();
    document.querySelector('#datetime').textContent = currentDateTime;
  }
  setInterval(updateDateTime, 1000);
</script>
