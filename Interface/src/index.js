$(document).ready(function () {
    $('#get-data').click(function () {
        var showData = $('#show-data');

        $.ajax({
            url: '/api/hello',
            success: function (data) {
                console.log('Success: ', data);
                showData.empty();
                showData.append(data);
            },
            error: function (err) {
                console.log('Error: ', err);
                showData.empty();
                showData.append('Error: ' + JSON.stringify(err));
            }
        });

        showData.text('Loading...');
    });
});