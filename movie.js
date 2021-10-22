const movies = [];
let index = 0;

$(function(){
    $('.new-movie-form').on('submit', function(e){
        e.preventDefault();
        let $movieTitle = $('#title').val();
        let $movieRating = $('#rating').val();

        let inputData = {$movieTitle, $movieRating, index};
        const newHTML = newMovieData(inputData);

        index++;
        movies.push(inputData);

        $('.movie-body').append(newHTML);
        $('.new-movie-form').trigger('reset');
    });


    $('tbody').on('click', function(e){
        for (let movie of movies){
            //const indexToRemove = movies.findIndex((movie) => `"${movie.index}"` === e.target.id);
            //movies.splice(indexToRemove, 1);

            $(e.target).closest('tr').remove();
        }
    });
});

function newMovieData(data){
    return `
        <tr>
            <td>${data.$movieTitle}</td>
            <td>${data.$movieRating}</td>
            <td>
                <button class='delete-button' id=${data.index}>
                    Delete
                </button>
            </td>
        </tr>
    `;
}

