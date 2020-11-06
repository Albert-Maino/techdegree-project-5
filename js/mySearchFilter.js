document.getElementById('search').addEventListener("keyup", filter)

function filter(){
    const searchFilter = document.getElementById('search');
    const text = searchFilter.value.toLowerCase();
    const images = document.getElementsByTagName('img');

    for ( let i = 0; i< images.length; i++ ) {
        const dataCaption = document.getElementsByTagName('a')[i].getAttribute('data-caption')
    
        if (dataCaption.toLowerCase().indexOf(text) > -1) {
            images[i].style.display = '';
        } else {
            images[i].style.display = 'none';
        }
    }
}
