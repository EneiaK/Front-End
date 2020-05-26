function myFunction(slider)
    {
        var id= slider.id + '-label';
        var label = document.getElementById(id);
        var currency = label.innerHTML.split(/\d+/g)[1];
        var text=label.innerHTML.split(/\d+/g)[0];;
        label.innerHTML = text + slider.value + currency;
    }