<script>
    // Like functionality
    const likeButtons = document.querySelectorAll('.like-button');
    likeButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.classList.toggle('liked');
            const icon = button.querySelector('i');
            if (button.classList.contains('liked')) {
                icon.classList.remove('far');
                icon.classList.add('fas');
                button.style.color = '#1877f2';
            } else {
                icon.classList.remove('fas');
                icon.classList.add('far');
                button.style.color = '#65676b';
            }
        });
    });

    // Share functionality
    const shareButtons = document.querySelectorAll('.share-button');
    const shareModal = document.querySelector('.share-modal');
    const closeModal = document.querySelector('.close-modal');

    shareButtons.forEach(button => {
        button.addEventListener('click', () => {
            shareModal.style.display = 'block';
        });
    });

    closeModal.addEventListener('click', () => {
        shareModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === shareModal) {
            shareModal.style.display = 'none';
        }
    });

    // Share options
    const whatsappShare = document.querySelector('.whatsapp');
    const facebookShare = document.querySelector('.facebook');
    const twitterShare = document.querySelector('.twitter');
    const copyLink = document.querySelector('.copy-link');

    whatsappShare.addEventListener('click', () => {
        window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(window.location.href)}`, '_blank');
    });

    facebookShare.addEventListener('click', () => {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank');
    });

    twitterShare.addEventListener('click', () => {
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}`, '_blank');
    });

    copyLink.addEventListener('click', () => {
        navigator.clipboard.writeText(window.location.href).then(() => {
            alert('Link copied to clipboard!');
        });
    });

    // Comment functionality
    const commentInputs = document.querySelectorAll('.add-comment input');
    commentInputs.forEach(input => {
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && input.value.trim() !== '') {
                const comment = document.createElement('div');
                comment.classList.add('comment');
                comment.innerHTML = `
                    <img src="https://placekitten.com/200/200" alt="Makson Chakma" class="user-avatar">
                    <div class="comment-content">
                        <h4>Makson Chakma</h4>
                        <p>${input.value}</p>
                    </div>
                `;
                input.parentElement.previousElementSibling.appendChild(comment);
                input.value = '';
            }
        });
    });
</script>
