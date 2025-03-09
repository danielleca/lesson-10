class Movie{
    constructor(title, director, actor, year){
        this.title=title
        this.director=director
        this.actor=actor
        this.year=year

    }

}
const defaultm=[
    {
        title:'Frozen',
        director:'Chris Buck',
        actor:'Elsa', 
        year:'2013',
    },
    {
        title:'Titanic',
        director:'James Cameron',
        actor:'Leonardo Di Caprio',
        year:'1997',
    },
]
class ui{
    static addMovieList=(movie)=>{
        const list=document.getElementById('movie-list');
        const row=document.createElement('tr');
        row.innerHTML=`<td>${movie.title}</td><td>${movie.director}</td><td>${movie.actor}</td><td>${movie.year}</td>`
        list.appendChild(row)
    }
    static displayMovie=()=>{
        defaultm.forEach(movie=>ui.addMovieList(movie))
    }

}
ui.displayMovie()
document.querySelector('#movie-form').addEventListener('submit',addMovie)
function addMovie(a){
    a.preventDefault()
    const title=document.querySelector('#title').value;
    const director=document.querySelector('#director').value;
    const actor=document.querySelector('#actor').value;
    const year=document.querySelector('#year').value;
    const m=new Movie(title, director, actor, year);
    ui.addMovieList(m)
}
