$(function() {
    //Contacts
    $('#get-button').on('click', function() {
        $.ajax({
            url: '/Contacts',
            contentType: 'application/json',
            success: function(response) {
                var tbodyEl = $('tbody');

                tbodyEl.html('');

                response.product.forEach(function(product) {
                    tbody.El.append('\
                     <table>\
                      <thead>\
                         <th>ID</th>\
                         <th>Name and Number</th>\
                         <th>Action</th>\
                      </thead>\
                       <tr>\
                        <td class="id">'+ product.id +'</td>\
                           <td><td input type="text" class="name and number" value"'+ product +'"></td>\
                           <td>\
                           <button class="update-button">save</button>\
                           <button class="delete-button">delete</button>\
                     </table>\
                    ');
                });
            }
        });
    });

    //Photos
    $('#get-button').on('click', function() {
        $.ajax({
            url:'/photos',
            contentType: 'application/json',
            success: function(response) {
                var tbodyEl = $('tbody');

                tbodyEl.html('');

                response.product.forEach(function(product) {
                    tbodyEl.append('\
                    <table>\
                       <tr>\
                        <th colspan="4">Photo Gallery</th>\
                       </tr>\
                    ')
                });
            }
        })
    });
});