$(function(){
    chrome.storage.sync.get('limit',function(budget){
        $('#limit').val(budget.limit);
    });

    $('#saveLimit').click(function(){
        var limit = $('#limit').val();
        if (limit){
            chrome.storage.sync.set({'limit': limit}, function(){
                alert('Limit has been changed!');
                close();
            });
        }
    });

    $('#resetTotal').click(function(){
        chrome.storage.sync.set({'total': 0}, function(){
            alert("Total has been reset to 0.");
             close();
        });
    });
});


