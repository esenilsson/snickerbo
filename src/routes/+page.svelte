<script>
    import logo from "$lib/assets/shed.png";
    let animated = false;
    let y=0;
    $: y > 200 ? (animated = true) : (animated = false);
   
    function interpolate_color(color1, color2, factor) {
      if (arguments.length < 3) {
        factor = 0.5;
      }
      var result = color1.slice();
      for (var i = 0; i < 3; i++) {
        result[i] = Math.round(result[i] + factor * (color2[i] - color1[i]));
      }
      return result;
    }

    function get_factor_from_val(val, start_val, end_val) {
      console.log(val, start_val, end_val)
      return Math.min(1,Math.max(0,(val - start_val) / (end_val - start_val)));
    }
    let m = { x: 0, y: 0 };

    function handleMousemove(event) {
		m.x = event.clientX;
		m.y = event.clientY;
	}
</script>


<svelte:window bind:scrollY={y} />

<div class="top" style='background-color: rgb({interpolate_color([190,200,190],[255,255,255],get_factor_from_val(m.y,300,700))})'  on:mousemove={handleMousemove}>
        <img alt="The project logo" src={logo} class='logo bounce' />
        <div class="titles" >
            <h1 style='color: rgb({interpolate_color([255,255,255],[190,200,190],get_factor_from_val(m.y,300,700))})'  on:mousemove={handleMousemove}>Snickerbo</h1>
            <p style='color: rgb({interpolate_color([255,255,255],[190,200,190],get_factor_from_val(m.y,300,700))})'  on:mousemove={handleMousemove}>This is some text </p>
        </div>
</div>



<style>

.hey{
  position: relative;
}

/* .gradient {
  background: linear-gradient(180deg, rgb(190, 200, 190) 0%, rgb(190, 200, 190) 60%, #f5f5f5 100%);
  transition: linear 2s
} */
</style>
