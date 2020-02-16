var title=document.getElementById('title');
var author=document.getElementById('author');
var isbn=document.getElementById('isbn');
var button=document.getElementById('button');
var popup=document.getElementById('popup');
var tbody=document.getElementById('tbody');
var det=document.getElementsByTagName('a');

button.onclick=function(){
    if(title.value && author.value && isbn.value){
        var tr=document.createElement('tr');
        tr.innerHTML="<td>"+title.value+"</td><td>"+author.value+"</td><td>"+isbn.value+"</td><td><a href='#' class='deleteit' >X</a></td>";
        tbody.appendChild(tr);
        title.value="";
        author.value="";
        isbn.value="";
        popup.className='d-flex alert alert-success my-2 py-0';
        popup.innerText="Successfully added book.";
        setTimeout(() => {
            document.querySelector('.alert').remove();
        }, 2000);
        addtolocal();
    }

}
tbody.onclick=function(e){
    if(e.target.className=='deleteit'){
        e.target.parentElement.parentElement.remove();
        popup.className='d-flex alert alert-danger my-2 py-0';
        popup.innerText="Successfully deleted book.";
        setTimeout(() => {
            document.getElementsByClassName('alert').remove();
        }, 2000);
        deletefromlocal();
    }
}