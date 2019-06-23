$.ajax({ 
    method: 'POST',
    url: 'https://rubizza.com/register',
    headers: {
        'Authorization': 'o43KBFc',
        'X-CSRF-TOKEN': 'DobrovskayaEF',
        'Content-Type': 'application/json'
    },
    data: {'secret_code': 'o43KBFc', 'github': 'DobrovskayaEF'},
    dataType: 'json',
    success: function(data) {
      console.log("SUCCESS:");
      console.log(data);
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log("ERROR: " + textStatus + ", " + errorThrown);
      console.log(jqXHR);
    }
  });