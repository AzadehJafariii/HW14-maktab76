

  $(document).ready(function () {
    $("button").click(function () {
    $.ajax({
      url: "https://62c462c37d83a75e39f89aea.mockapi.io/api/users",
    }).done(function (data, status) {
      $("#status").html(`Status is: ${status}`);
      $.each(data, function (index, user) {
        $("#data").append(`<p>Data length: ${data.length} includes ID: ${user.id} & Name: ${user.name}</p>`);
      });
    });
  });
});

