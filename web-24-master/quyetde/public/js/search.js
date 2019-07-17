window.onload = () => {
    const searchForm = document.querySelector('.search-form');
    if(searchForm){
        searchForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const keyword = document.querySelector('.search-input').value;
            fetch(`/search-question?keyword=${keyword}`, {
                method: 'GET',
                headers: {
                    'Content-Type:': 'application/json',
                }
            })
            .then((res) => res.json())
            .then((result) => {
                document.querySelector('result').innerHTML = '';
                result.data.forEach((question) => {
                    const questionElement = `
                    <div>
                    <div> ${question.questionContent} </div>
                    <div> Like: ${question.like} </div>
                    <div> Dislike: ${question.dislike} </div> 
                    </div>
                    `;
                });
            })
            .catch((error) => {
                console.log(error);
                window.alert(error.message);
            });
        });
    }
}