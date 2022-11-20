$(document).ready(function () {
  $('#getPokemon').on('click', function () {
    if ($('#pokemonCreate').val() != 2) {
      alert('You need fill all fields');
      console.log('Omg');
    }
  });

  $('#getRegion').on('click', function () {
    if ($('#regionCreate').val() != 2) {
      alert('You need fill all fields');
    }
  });

  $('#getType').on('click', function () {
    if ($('#typeCreate').val() != 2) {
      alert('You need fill all fields');
    }
  });
});
