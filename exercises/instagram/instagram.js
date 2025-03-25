document.addEventListener('DOMContentLoaded', function() {
    const heartIcon = document.querySelector('.actions i.fa-heart');
    const bookmarkIcon = document.querySelector('.save-icon i.fa-bookmark');
    // Seleccionamos el elemento <p> que muestra los likes
    const likesCountElement = heartIcon.nextElementSibling;
    // Convertimos el contenido a número (por ejemplo, "353")
    let likesCount = parseInt(likesCountElement.textContent);
      
        heartIcon.addEventListener('click', function() {
          if (heartIcon.classList.contains('fa-regular')) {
            // Si no estaba marcado, lo marcamos
            heartIcon.classList.remove('fa-regular');
            heartIcon.classList.add('fa-solid');
            heartIcon.style.color = 'red';
            likesCount++; // Incrementamos el número de likes
          } else {
            // Si ya estaba marcado, revertimos el cambio
            heartIcon.classList.remove('fa-solid');
            heartIcon.classList.add('fa-regular');
            heartIcon.style.color = '';
            likesCount--; // Decrementamos el número de likes
          }
          // Actualizamos el texto del contador
          likesCountElement.textContent = likesCount;
        });

    bookmarkIcon.addEventListener('click', function() {
      if (this.classList.contains('fa-regular')) {
        this.classList.remove('fa-regular');
        this.classList.add('fa-solid');
        this.style.color = 'goldenrod';
      } else {
        this.classList.remove('fa-solid');
        this.classList.add('fa-regular');
        this.style.color = '';
      }
    })
});
