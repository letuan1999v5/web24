window.onload = () => {

    const submitElement = document.querySelector('.submit');
    if (submitElement) {
        submitElement.addEventListener('click', (event) => {
            var listPlayer = [document.querySelector('#player1').value,
            document.querySelector('#player2').value,
            document.querySelector('#player3').value,
            document.querySelector('#player4').value];
            fetch(`/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    playerData: listPlayer,
                }),
            })
                .then((res) => {
                     res.json();
                })
                .then((data) => {
                  console.log(data);
                  console.log(listPlayer);
                  
                })
                .catch((error) => {
                    console.log(error);
                    window.alert(error.message);
                });
        })
    }


}