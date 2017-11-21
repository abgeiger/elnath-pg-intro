console.log('js')

$(document).ready(function() {
    console.log('JQ');
    $('#sumbmitButton').on('click', addNewShoes);
    $('#shoeList').on('click', '.deleteButton', removeShoe);
    getShoes();
});

function getShoes() {
    $.ajax({
        method: 'GET',
        url: '/shoes',
        success: function(response) {
            console.log('shoes are', response);
            $('#shoelist').empty();
            for (var index = 0; index < response.length; index++) {
                var shoe = response[index];
                var $newShoeItem = $('<li>' + shoe.name + ': ' + shoe.cost + '</li>');
                var $deleteShoeButton = $('<button class="deleteButton">Delete</button>');
                $deleteShoeButton.data('id', shoe.id);
                $newShoeItem.append($deleteShoeButton);
                $('#shoelist').append($newShoeItem);
            }
        }
    });
}

function removeShoe() {
    var shoeIdToRemove = $(this).data().id;
    console.log('remove shoe was clicked', shoeIdToRemove);
    
}

function addNewShoes() {
    $.ajax({
        method: 'POST',
        url: '/shoes',
        data: {
            name: 'Nike Air Jordan',
            cost: '110'
        },
        success: function(response) {
            console.log('response', response);
            getShoes();
        }
    });
}